"use client";

import React, { useState } from "react";
import "../../styles/atendimentoDomiciliar.css";

export default function AtendimentoDomiciliarPage() {
  return (
    <section className="atendimento">
      {/* Banner */}
      <div className="banner">
        <img
          src="/img/atendimento/banner.jpg"
          alt="Serviço de Atendimento Domiciliar"
        />
      </div>

      {/* Conteúdo */}
      <div className="conteudo">
        <h2>
          Serviço de Atendimento Domiciliar (SAD): cuidado em casa para quem mais
          precisa
        </h2>
        <p>
          O Serviço de Atendimento Domiciliar (SAD) destina-se a pessoas acamadas
          ou com dificuldade de mobilidade, de forma temporária ou permanente.
          Nesse modelo de cuidado, a equipe de saúde realiza o atendimento na
          própria casa do paciente, garantindo acompanhamento contínuo e
          humanizado.
        </p>
        <p>
          O serviço oferece suporte para prevenção de doenças, tratamento,
          reabilitação e promoção da saúde, possibilitando que o paciente receba
          cuidados mais intensivos sem precisar se deslocar até uma unidade de
          saúde. O SAD pode atender pessoas de todas as idades que escolherem esse
          tipo de assistência.
        </p>

        <h3>Passo a Passo para Inclusão no SAD</h3>
        <ol>
          <li>
            O familiar ou responsável deve procurar a Unidade Básica de Saúde (UBS)
            onde o paciente já é atendido;
          </li>
          <li>
            Um profissional da equipe preencherá uma ficha de pedido para inclusão
            no Serviço de Atendimento Domiciliar;
          </li>
          <li>
            A ficha será encaminhada à equipe do SAD, que realizará uma avaliação
            para verificar se o paciente atende aos requisitos necessários para
            receber o atendimento domiciliar.
          </li>
        </ol>

        <h3>Requisitos para acessar o serviço</h3>
        <ul>
          <li>Morar em Muriaé;</li>
          <li>Idade a partir de 01 mês de vida;</li>
          <li>
            Ser usuário do SUS (o serviço não atende pacientes com convênio
            particular);
          </li>
          <li>
            Apresentar quadro clínico que justifica a necessidade de atenção à
            saúde em domicílio;
          </li>
          <li>Apresentar CPF, RG e Cartão do SUS;</li>
          <li>Comprovante de residência.</li>
        </ul>

        <h3>Comunicação com o Usuário</h3>
        <p>
          Após o encaminhamento, o Agente Comunitário de Saúde (ACS) entrará em
          contato com a família para informar que a equipe do Serviço de
          Atendimento Domiciliar realizará uma visita de avaliação.
        </p>
        <p>
          Essa etapa é fundamental para verificar se o paciente se enquadra nos
          critérios do serviço.
        </p>
        <p>
          Caso seja admitido, a equipe do SAD elaborará, junto à família, um plano
          de cuidados individualizado, garantindo um acompanhamento adequado às
          necessidades do paciente.
        </p>
      </div>
    </section>
  );
}
