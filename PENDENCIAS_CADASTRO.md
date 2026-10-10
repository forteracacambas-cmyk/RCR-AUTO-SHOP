# RCR AUTO SHOP LTDA — Pendências de Cadastro e Próximos Passos (v2)

Este documento interno lista as pendências cadastrais e configurações necessárias para a ativação pública e produção do site da **RCR AUTO SHOP LTDA**.

---

## 1. Ativação do Número Oficial de WhatsApp
- **Situação Atual:** O campo `whatsappNumber` permanece vazio (`""`) em `src/config/businessConfig.ts`. O formulário permite que o visitante prepare e copie o texto da consulta, exibindo o status `"Atendimento por WhatsApp em breve"`.
- **Ação:** Assim que o número de WhatsApp comercial oficial for definido pelo cliente, preencha no arquivo `src/config/businessConfig.ts`:
  ```typescript
  whatsappNumber: "5511999999999", // Apenas dígitos com DDI e DDD
  ```
- **Resultado:** O botão *"Enviar consulta pelo WhatsApp"* será habilitado automaticamente para abrir o link `https://wa.me/...`.

---

## 2. Confirmação sobre Atendimento Presencial ou Retirada
- **Situação Atual:** O endereço societário em São Caetano do Sul está configurado como cadastral, orientando: *"Endereço cadastral. Consulte a equipe antes de se deslocar para atendimento ou retirada."*
- **Ação:** Confirmar com a administração se haverá balcão de atendimento presencial ou retirada de motores nesse ou em outro endereço comercial.

---

## 3. Confirmação das Condições Gerais de Fornecimento
- **Situação Atual:** O site informa honestamente que *"A condição e os detalhes do motor serão informados na proposta"*, sem alegar estoque antecipado de novas, usadas ou retificadas.
- **Ação:** Definir os termos padrão das propostas (prazos de garantia oferecidos pela empresa, formas de pagamento aceitas e prazos de transporte por região).

---

## 4. Liberação para Motores de Busca (Indexação)
- **Situação Atual:** O site mantém a tag de rascunho `<meta name="robots" content="noindex, nofollow" />` no arquivo `index.html`.
- **Ação:** Quando o WhatsApp comercial for ativado e o domínio definitivo estiver apontado, alterar a tag para `index, follow`.

---

## 5. Resumo Cadastral Configurado
- **Razão Social:** RCR AUTO SHOP LTDA
- **CNPJ:** 69.493.842/0001-29
- **Nome de Apresentação:** RCR AUTO SHOP
- **Endereço Cadastral:** Rua Heloisa Pamplona, 720, apto 71, Edifício Positano, Fundação, São Caetano do Sul - SP, CEP 09520-310
