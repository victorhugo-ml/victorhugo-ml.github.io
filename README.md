# Portfólio — Victor Hugo

Disponível em [victorhugo-ml.github.io](https://victorhugo-ml.github.io).

Site pessoal que apresenta minha trajetória e dois projetos complementares:

- **PaySim:** análise exploratória de fraude com DuckDB, Pandas, NumPy, Matplotlib e grafos direcionados com NetworkX;
- **Nós Dois:** aplicação multiplataforma com JavaScript, Firebase, PWA, Capacitor, testes e refatoração incremental.

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

Ferramentas de IA generativa apoiaram prototipação, revisão, documentação e exploração visual. As decisões de produto, a seleção das informações, a validação e a responsabilidade pelo conteúdo permanecem minhas.
