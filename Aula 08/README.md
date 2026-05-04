# Auditoria Técnica: Acervo Pica-Pau
**Projeto de Aplicações para Internet - UNIPÊ 2026**

## 1. Definição do Problema (Passo 1)
* **Contexto**: Plataforma de auditoria e catalogação técnica voltada para a preservação de masters de dublagens clássicas brasileiras[cite: 1].
* **Público-alvo**: Pesquisadores de mídia, arquivistas e entusiastas da preservação audiovisual que utilizam prioritariamente dispositivos desktop para análise técnica.
* **Dor**: Dificuldade em centralizar e validar a integridade de lotes de dublagem históricos (AIC, BKS, Dublasom) com seus respectivos masters técnicos em uma interface unificada.
* **Critério de Sucesso**: O usuário consegue validar um lote de dublagem e realizar a conferência da mídia com suporte a acessibilidade (legendas) em uma única interface responsiva.

## 2. Wireframe (Passo 2)
O esboço estrutural do projeto encontra-se em: `assets/wireframe.png`.

## 3. Paleta de Cores e Acessibilidade (Passo 4)
* **Inspiração**: Cores institucionais e interfaces de ferramentas de diagnóstico técnico.
* **Cores Principais**:
    * **Primária**: `#0056b3` (Contraste WCAG AA aprovado sobre fundo claro).
    * **Sucesso**: `#28a745` (Para confirmação de auditoria validada).
    * **Borda**: `#ddd` / `#374151` (Separação semântica de componentes).
* **Tipografia**:
    * **Títulos**: Poppins (Hierarquia clara para H1, H2 e H3).
    * **Corpo**: Inter (Foco em legibilidade de dados técnicos).

## 4. Arquitetura de Informação (Passo 3)
Projeto estruturado seguindo a metodologia **ITCSS**:
1. `variables.css`: Definições de cores e escala tipográfica.
2. `reset.css`: Modern CSS Reset aplicado.
3. `base.css`: Estilos globais e tipografia base.
4. `layout.css`: Estrutura de grid e responsividade mobile-first.
5. `components/`: Estilos específicos para Nav, Hero, Cards, Form e Footer.
