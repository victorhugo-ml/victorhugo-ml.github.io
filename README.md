# Portfólio — Victor Hugo

Disponível em [victorhugo-ml.github.io](https://victorhugo-ml.github.io).

Site pessoal que apresenta minha trajetória e dois projetos complementares:

- **PaySim:** análise exploratória de fraude com DuckDB, Pandas, NumPy, Matplotlib e grafos direcionados com NetworkX;
- **Nós Dois:** aplicativo pessoal criado por hobby para uso com minha namorada, com implementação produzida majoritariamente por IA generativa sob minha direção e validação.

O conteúdo está disponível em português, inglês e espanhol, com a preferência de idioma preservada no dispositivo.

## Desenvolvimento local

Requisitos: Node.js 22.13 ou superior.

```bash
pnpm install
pnpm dev
```

## Validação

```bash
pnpm test
```

O teste gera a exportação estática usada pelo GitHub Pages e verifica o conteúdo principal, os links dos projetos, os metadados sociais e a ausência de artefatos do template.

## Publicação

Cada alteração enviada à branch `main` é validada e publicada automaticamente pelo GitHub Actions.

## Transparência

No **Nós Dois**, ferramentas de IA generativa produziram a maior parte da implementação. Meu papel foi idealizar o produto, definir requisitos, orientar iterações, testar os resultados e preparar uma versão pública sanitizada. O projeto é apresentado como evidência de definição de produto e coordenação responsável de IA, não como comprovação de domínio independente de frontend ou backend.

O estudo de caso do **PaySim** permanece centrado na metodologia, na análise exploratória e nas limitações documentadas do trabalho.
