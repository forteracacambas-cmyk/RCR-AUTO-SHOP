import React from 'react';
import { ShieldCheck, Lock, Server, ExternalLink } from 'lucide-react';
import { PageRoute } from '../types';

interface PrivacyPageProps {
  onNavigate?: (route: PageRoute) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-[#12151A] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-orange-400 uppercase mb-3">
              Privacidade
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Como tratamos as informações ao navegar no site e ao utilizar o formulário de consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-10 text-neutral-700 leading-relaxed text-sm sm:text-base">
          
          {/* Resumo */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
            <div className="flex items-center gap-2 text-neutral-900 font-bold text-base mb-2">
              <ShieldCheck className="w-5 h-5 text-orange-600" />
              <span>Compromisso com a Privacidade</span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              A <strong>RCR AUTO SHOP LTDA</strong> respeita a privacidade de seus visitantes e atua de acordo com as diretrizes da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
            </p>
          </div>

          {/* 1. Dados do Formulário */}
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-orange-600" />
              <span>1. Dados do Formulário de Consulta</span>
            </h2>
            <p>
              Os dados técnicos inseridos no formulário (marca, modelo, ano de fabricação, motorização e observações) são processados no próprio navegador do usuário para gerar o texto da consulta.
            </p>
            <p className="mt-2">
              Esses dados não são gravados em banco de dados do site. A mensagem é preparada localmente para que o visitante possa copiá-la ou enviá-la pelo WhatsApp quando o canal estiver disponível.
            </p>
          </div>

          {/* 2. Logs Técnicos de Hospedagem */}
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-orange-600" />
              <span>2. Registros Técnicos de Acesso e Hospedagem</span>
            </h2>
            <p>
              Como em qualquer serviço na web, os servidores de hospedagem e infraestrutura de rede podem registrar automaticamente informações técnicas de conexão, como endereço IP, data e hora da solicitação, tipo de navegador e páginas acessadas, com a finalidade exclusiva de segurança da infraestrutura, prevenção contra abusos e diagnóstico de estabilidade.
            </p>
            <p className="mt-2">
              Não utilizamos cookies de publicidade, remarketing ou rastreamento de comportamento para fins comerciais nesta versão do site.
            </p>
          </div>

          {/* 3. Atendimento por WhatsApp */}
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-orange-600" />
              <span>3. Comunicação via WhatsApp</span>
            </h2>
            <p>
              O envio da consulta pelo WhatsApp ocorre apenas quando você clica voluntariamente no botão correspondente. O aplicativo WhatsApp é gerido pela Meta Platforms, Inc. e possui termos de uso e política de privacidade próprios.
            </p>
          </div>

          {/* 4. Controlador dos Dados */}
          <div className="pt-6 border-t border-neutral-200 text-xs sm:text-sm text-neutral-600">
            <span className="font-semibold text-neutral-900 block mb-1">Identificação da Empresa:</span>
            RCR AUTO SHOP LTDA · CNPJ 69.493.842/0001-29 · Rua Heloisa Pamplona, 720, apto 71, Edifício Positano, Fundação, São Caetano do Sul - SP, CEP 09520-310.
          </div>

        </div>

      </section>
    </div>
  );
};
