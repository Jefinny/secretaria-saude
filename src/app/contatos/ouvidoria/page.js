"use client";

import React, { useEffect } from "react";
import "../../../styles/ouvidoria.css";

export default function Ouvidoria() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="ouvidoria">
      {/* Banner */}
      <div className="banner">
        <img
          src="/img/banner-paginas/ouvidoria.jpg"
          alt="Banner Ouvidoria"
        />
      </div>

      {/* Conteúdo */}
      <div className="conteudo">
        <h2>Ouvidoria da Saúde: canal direto com o cidadão</h2>
        <p>
          A Ouvidoria da Saúde de Muriaé é o espaço destinado a ouvir, registrar
          e encaminhar manifestações da população sobre os serviços de saúde
          oferecidos pelo município. É um canal de diálogo que fortalece a
          transparência e a participação social.
        </p>

        <h3>O que você pode registrar na Ouvidoria?</h3>
        <ul>
          <li>Sugestões para melhoria dos serviços;</li>
          <li>Reclamações sobre atendimentos ou estruturas;</li>
          <li>Elogios a profissionais ou unidades;</li>
          <li>Solicitações de informações;</li>
          <li>Denúncias relacionadas à saúde pública.</li>
        </ul>

        <h3>Como entrar em contato</h3>
        <p>
          Você pode procurar a Ouvidoria presencialmente na Secretaria Municipal
          de Saúde ou utilizar os canais digitais:
        </p>
        <ul>
          <li>Telefone: (32) 1234-5678</li>
          <li>Email: ouvidoria.saude@muriae.mg.gov.br</li>
          <li>Atendimento presencial: Rua Exemplo, 123 - Centro, Muriaé/MG</li>
        </ul>

        <p>
          Todas as manifestações são registradas e analisadas, garantindo
          resposta ao cidadão e encaminhamento às áreas responsáveis.
        </p>
      </div>
    </section>
  );
}
