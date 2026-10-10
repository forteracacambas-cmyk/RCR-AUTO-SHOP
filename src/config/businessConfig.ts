/**
 * Configurações da RCR AUTO SHOP LTDA
 */

export interface BusinessConfig {
  razaoSocial: string;
  cnpj: string;
  nomeExibicao: string;
  enderecoCadastral: {
    logradouro: string;
    numero: string;
    complemento: string;
    edificio: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    textoCompleto: string;
    avisoDeslocamento: string;
  };
  whatsappNumber: string; // DDI + DDD + número
}

export const businessConfig: BusinessConfig = {
  razaoSocial: "RCR AUTO SHOP LTDA",
  cnpj: "69.493.842/0001-29",
  nomeExibicao: "RCR AUTO SHOP",
  enderecoCadastral: {
    logradouro: "Rua Heloisa Pamplona",
    numero: "720",
    complemento: "apto 71",
    edificio: "Edifício Positano",
    bairro: "Fundação",
    cidade: "São Caetano do Sul",
    estado: "SP",
    cep: "09520-310",
    textoCompleto: "Rua Heloisa Pamplona, 720, apto 71, Edifício Positano, Fundação, São Caetano do Sul - SP, CEP 09520-310",
    avisoDeslocamento: "Endereço cadastral. Consulte a equipe antes de se deslocar para atendimento ou retirada.",
  },
  whatsappNumber: "554791858962", // Número confirmado pelo cliente
};
