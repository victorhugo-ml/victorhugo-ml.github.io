import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const readPage = (path) => readFile(new URL(`../out/${path}`, import.meta.url), "utf8");

test("exports the complete portfolio homepage", async () => {
  const html = await readPage("index.html");

  assert.match(html, /<html[^>]*lang="pt-BR"/i);
  assert.match(html, /Victor Hugo — Dados, análise e produto/);
  assert.match(html, /Dados, código/);
  assert.match(html, />PT<\/button>/);
  assert.match(html, />EN<\/button>/);
  assert.match(html, />ES<\/button>/);
  assert.match(html, /PaySim/);
  assert.match(html, /Nós Dois/);
  assert.match(html, /href="\/projetos\/paysim"/);
  assert.match(html, /href="\/projetos\/nois-dois"/);
  assert.match(html, /https:\/\/victorhugo-ml\.github\.io\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /victorhugomirandamarcelino@gmail\.com/i);
});

test("exports the PaySim case study with canonical metadata", async () => {
  const html = await readPage("projetos/paysim/index.html");

  assert.match(html, /Preservar estrutura sem carregar milhões de linhas/);
  assert.match(html, /github\.com\/victorhugo-ml\/paysim-fraud-network-analysis/);
  assert.match(html, /https:\/\/victorhugo-ml\.github\.io\/projects\/paysim\/subgrafo-fraudes\.png/);
  assert.match(html, /https:\/\/victorhugo-ml\.github\.io\/projetos\/paysim/);
});

test("exports the Nós Dois case study with sanitized images", async () => {
  const html = await readPage("projetos/nois-dois/index.html");

  assert.match(html, /Transformar uma necessidade pessoal em um produto funcional/);
  assert.match(html, /implementação foi produzida majoritariamente com IA generativa/);
  assert.match(html, /github\.com\/victorhugo-ml\/nois-dois-app/);
  assert.match(html, /https:\/\/victorhugo-ml\.github\.io\/projects\/nois-dois\/inicio\.png/);
});

test("keeps the GitHub Pages export complete", async () => {
  await Promise.all([
    access(new URL("../out/.nojekyll", import.meta.url)),
    access(new URL("../out/og.png", import.meta.url)),
    access(new URL("../out/projects/nois-dois/inicio.png", import.meta.url)),
    access(new URL("../out/projects/paysim/subgrafo-fraudes.png", import.meta.url)),
  ]);
});

test("keeps previous-hosting and starter artifacts out of the repository", async () => {
  await Promise.all([
    assert.rejects(access(new URL("../app/chatgpt-auth.ts", import.meta.url))),
    assert.rejects(access(new URL("../public/file.svg", import.meta.url))),
    assert.rejects(access(new URL("../public/globe.svg", import.meta.url))),
    assert.rejects(access(new URL("../public/window.svg", import.meta.url))),
  ]);
});
