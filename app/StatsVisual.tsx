// Decorative statistics panel for the hero.
// The data is synthetic and deterministic (seeded), but every drawn element is
// computed for real: ordinary least squares fit, a 95% confidence band for the
// mean, and a histogram of the residuals with its fitted normal density.

const W = 360;
const H = 230;
const PAD = { left: 30, right: 14, top: 14, bottom: 26 };

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(rand: () => number) {
  const u = 1 - rand();
  const v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

const rand = mulberry32(2029);
const N = 46;
const points = Array.from({ length: N }, () => {
  const x = rand();
  return { x, y: 0.18 + 0.62 * x + 0.085 * gaussian(rand) };
});

const meanX = points.reduce((s, p) => s + p.x, 0) / N;
const meanY = points.reduce((s, p) => s + p.y, 0) / N;
const sxx = points.reduce((s, p) => s + (p.x - meanX) ** 2, 0);
const sxy = points.reduce((s, p) => s + (p.x - meanX) * (p.y - meanY), 0);
const slope = sxy / sxx;
const intercept = meanY - slope * meanX;
const residuals = points.map((p) => p.y - (intercept + slope * p.x));
const sigma = Math.sqrt(residuals.reduce((s, r) => s + r * r, 0) / (N - 2));

const sx = (x: number) => PAD.left + x * (W - PAD.left - PAD.right);
const sy = (y: number) => H - PAD.bottom - y * (H - PAD.top - PAD.bottom);

const band = Array.from({ length: 41 }, (_, i) => {
  const x = i / 40;
  const fit = intercept + slope * x;
  const half = 1.96 * sigma * Math.sqrt(1 / N + (x - meanX) ** 2 / sxx);
  return { x, lo: fit - half, hi: fit + half };
});
const bandPath =
  band.map((b, i) => `${i ? "L" : "M"}${sx(b.x).toFixed(1)},${sy(b.hi).toFixed(1)}`).join(" ") +
  " " +
  [...band].reverse().map((b) => `L${sx(b.x).toFixed(1)},${sy(b.lo).toFixed(1)}`).join(" ") +
  " Z";

// Residual histogram.
const BINS = 9;
const edge = 3 * sigma;
const width = (2 * edge) / BINS;
const counts = Array.from({ length: BINS }, (_, i) =>
  residuals.filter((r) => r >= -edge + i * width && r < -edge + (i + 1) * width).length,
);
const HW = 360;
const HH = 74;
const hx = (r: number) => 8 + ((r + edge) / (2 * edge)) * (HW - 16);
const maxDensity = 1 / (sigma * Math.sqrt(2 * Math.PI));
const maxCount = Math.max(...counts, (maxDensity * N * width) | 0);
const hy = (c: number) => HH - 10 - (c / maxCount) * (HH - 18);
const densityPath = Array.from({ length: 61 }, (_, i) => {
  const r = -edge + (i / 60) * 2 * edge;
  const d = Math.exp(-(r * r) / (2 * sigma * sigma)) * maxDensity * N * width;
  return `${i ? "L" : "M"}${hx(r).toFixed(1)},${hy(d).toFixed(1)}`;
}).join(" ");

export function StatsVisual({ fitLabel, outlierLabel, residualLabel }: { fitLabel: string; outlierLabel: string; residualLabel: string }) {
  return (
    <div className="stats-visual" aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`} className="stats-scatter">
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <g key={t}>
            <line className="grid" x1={sx(0)} x2={sx(1)} y1={sy(t)} y2={sy(t)} />
            <line className="grid" y1={sy(0)} y2={sy(1)} x1={sx(t)} x2={sx(t)} />
          </g>
        ))}
        <path className="band" d={bandPath} />
        <line className="fit" x1={sx(0)} y1={sy(intercept)} x2={sx(1)} y2={sy(intercept + slope)} />
        {points.map((p, i) => (
          <circle key={i} className={Math.abs(residuals[i]) > 1.6 * sigma ? "dot outlier" : "dot"} cx={sx(p.x)} cy={sy(p.y)} r={3.1} />
        ))}
        <text className="axis" x={sx(1)} y={H - 7} textAnchor="end">x</text>
        <text className="axis" x={8} y={sy(1) + 4}>y</text>
      </svg>
      <div className="stats-legend">
        <span><i className="swatch fit-swatch" />{fitLabel}</span>
        <span><i className="swatch outlier-swatch" />{outlierLabel}</span>
      </div>
      <svg viewBox={`0 0 ${HW} ${HH}`} className="stats-hist">
        {counts.map((c, i) => (
          <rect key={i} className="bar" x={hx(-edge + i * width) + 1.5} width={hx(-edge + width) - hx(-edge) - 3} y={hy(c)} height={HH - 10 - hy(c)} rx={2} />
        ))}
        <path className="density" d={densityPath} />
        <line className="grid" x1={8} x2={HW - 8} y1={HH - 10} y2={HH - 10} />
      </svg>
      <p className="stats-caption">{residualLabel}</p>
    </div>
  );
}

// Decorative training curves for the contact panel: training and validation
// loss decaying over epochs (synthetic, deterministic).
const LW = 320;
const LH = 200;
const lossRand = mulberry32(7);
const trainLoss = Array.from({ length: 40 }, (_, i) => 0.08 + 0.82 * Math.exp(-i / 7) + 0.018 * gaussian(lossRand));
const validLoss = Array.from({ length: 40 }, (_, i) => 0.16 + 0.76 * Math.exp(-i / 8) + 0.0016 * (i - 18) ** 2 * (i > 18 ? 1 : 0) + 0.02 * gaussian(lossRand));
const lx = (i: number) => 24 + (i / 39) * (LW - 36);
const ly = (v: number) => LH - 24 - v * (LH - 40);
const curve = (values: number[]) => values.map((v, i) => `${i ? "L" : "M"}${lx(i).toFixed(1)},${ly(v).toFixed(1)}`).join(" ");
const bestEpoch = validLoss.indexOf(Math.min(...validLoss));

export function LossCurve() {
  return (
    <svg className="loss-curve" viewBox={`0 0 ${LW} ${LH}`} aria-hidden="true">
      {[0.25, 0.5, 0.75, 1].map((t) => (
        <line key={t} className="grid" x1={lx(0)} x2={lx(39)} y1={ly(t)} y2={ly(t)} />
      ))}
      <line className="axis-line" x1={lx(0)} x2={lx(39)} y1={ly(0)} y2={ly(0)} />
      <line className="axis-line" x1={lx(0)} x2={lx(0)} y1={ly(0)} y2={ly(1)} />
      <line className="best" x1={lx(bestEpoch)} x2={lx(bestEpoch)} y1={ly(0)} y2={ly(1)} />
      <path className="train" d={curve(trainLoss)} />
      <path className="valid" d={curve(validLoss)} />
      <circle className="best-dot" cx={lx(bestEpoch)} cy={ly(validLoss[bestEpoch])} r={4} />
      <text className="axis" x={lx(39)} y={LH - 6} textAnchor="end">epoch</text>
      <text className="axis" x={lx(0) + 6} y={ly(1) + 4}>loss</text>
    </svg>
  );
}
