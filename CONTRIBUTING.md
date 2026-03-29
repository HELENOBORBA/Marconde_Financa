# Guia de Contribuição

Este documento descreve as diretrizes de contribuição para o projeto `Marconde_Financa`. Seguir estas diretrizes ajuda a manter a qualidade do código, a rastreabilidade das mudanças e um fluxo de trabalho consistente para todos os colaboradores.

## Estratégia de Repositório

O projeto adota uma **estratégia de repositório único**. Todo o código-fonte, documentação e configuração relacionados ao `Marconde_Financa` devem residir neste repositório (`HELENOBORBA/Marconde_Financa`).

### Repositórios "Sandbox"

A criação de repositórios "sandbox" (separados) é **fortemente desencorajada**. Eles só devem ser considerados em circunstâncias excepcionais e com aprovação prévia, como Provas de Conceito (PoCs) de alto risco que provavelmente serão descartadas.

Se um sandbox for utilizado, o código **nunca** deve ser copiado e colado. A integração deve ser feita através de um Pull Request para o repositório principal, garantindo a auditoria e o histórico de commits.

## Fluxo de Desenvolvimento (AegisHub)

Todas as contribuições devem seguir um fluxo estruturado, começando com uma Service Order (SO) na plataforma AegisHub.

### 1. Criação do Branch

Para cada Service Order, um novo branch deve ser criado a partir do branch `develop`. O nome do branch deve seguir o padrão:

`aegishub/so-<ID>-<breve-descricao>`

-   `<ID>`: O número da Service Order no AegisHub.
-   `<breve-descricao>`: Uma descrição curta em kebab-case (ex: `criar-formulario-transacao`).

**Exemplo:**
`git checkout -b aegishub/so-123-ajustar-grafico-fluxo-caixa develop`

### 2. Abertura do Pull Request (PR)

Quando o desenvolvimento estiver concluído, abra um Pull Request (PR) com o branch `develop` como base.

-   **Título do PR:** Deve ser claro e referenciar a SO. Ex: `feat: Implementa formulário de transações (SO-123)`.
-   **Descrição do PR:** Detalhe as mudanças e vincule a Service Order do AegisHub.

### 3. Revisão e Merge

O PR será revisado pela equipe. Após a aprovação, ele será mesclado ao `develop`.

Este fluxo garante que todas as mudanças sejam rastreáveis, revisadas e alinhadas com os objetivos definidos na governança do AegisHub.