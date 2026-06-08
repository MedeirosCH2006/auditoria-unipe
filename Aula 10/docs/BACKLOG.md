# Backlog Pós-Review (Decisões de Engenharia)

* **Componente:** `navbar.css`
* **Responsável:** Rafael Medeiros
* **Data:** 08/06/2026

Este documento registra o posicionamento oficial e o mapeamento de débitos técnicos do componente de navegação para a entrega final do projeto integrador.

---

## 🛠️ Matriz de Decisões e Ações

| ID | Item Identificado no Review | Decisão Oficial | Justificativa Técnica & Plano de Ação |
| :--- | :--- | :---: | :--- |
| **01** | Uso de `!important` no modificador `.header--scrolled` | **ACEITAR** | **Resolvido.** A diretiva foi totalmente eliminada. A correção foi realizada através do reordenamento da especificidade estrutural (`.header.header--scrolled`), removendo o bloqueador para a entrega final. |
| **02** | Ausência de estados de acessibilidade por teclado (`:focus-visible`) | **ACEITAR** | **Resolvido.** O estado de foco visível foi integralmente implementado junto com o estado `:hover`, garantindo conformidade com os critérios de acessibilidade da ementa. |
| **03** | Substituição de valores fixos (hardcoded) por Tokens Semânticos | **ACEITAR** | **Resolvido.** Todos os espaçamentos e cores remanescentes foram vinculados às variáveis globais do Design System (ex: `var(--space-3)`). |
| **04** | Presença de IDs (`#btn-mobile`, `#hamburger`) violando o padrão BEM | **ACEITAR COM ESCOPO** | **Registrado como Débito Técnico.** Para evitar a quebra dos scripts de controle do DOM localizados no arquivo JavaScript (`main.js`), os IDs foram mantidos funcionais para esta entrega definitiva. A migração total entra no backlog de manutenção pós-projeto. |

---

## 📈 Considerações de Fechamento do Projeto

Com a resolução dos itens críticos (01, 02 e 03) e o mapeamento do item estrutural residual (04) como débito técnico devidamente documentado, o componente cumpre rigorosamente com todos os requisitos de portabilidade, documentação e qualidade exigidos para o encerramento da disciplina.
