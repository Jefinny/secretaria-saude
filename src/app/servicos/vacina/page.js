"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../../../styles/vacina.css";

export default function Page() {
  const assuntos = {
    antirrabica: `A vacina antirrábica é usada para prevenir a raiva...
    Passo a passo:
    - UBS Safira e UBS São Francisco, de segunda a sexta, 8h às 16h30;
    - Hospital São Paulo e UPA nos fins de semana e feriados.
    
    Requisitos:
    - Pedido médico, CPF, Cartão SUS, Cartão de vacina.`,

    caderneta: `Vacinas conforme calendário nacional de vacinação.
    Passo a passo:
    - Ir até a UBS mais próxima.
    
    Requisitos:
    - CPF, Cartão SUS, Cartão de vacina.`,

    covid: `Vacinação contra Covid-19 disponível para grupos prioritários na Central de Vacinação.
    Passo a passo:
    - Comparecer à Central de Vacinação, Av. Maestro Sansão, 236, de segunda a sexta, 8h às 16h30.
    
    Requisitos:
    - Documento com foto, CPF ou Cartão SUS, Cartão de vacina, comprovante de grupo prioritário.`,

    dengue: `Vacina contra dengue disponível para crianças e adolescentes de 10 a 14 anos.
    Passo a passo:
    - Comparecer à UBS de referência, das 8h às 16h30.
    
    Requisitos:
    - Idade entre 10 e 14 anos, caderneta de vacinação, CPF, Cartão SUS.
    
    Atenção:
    - Não indicada para menores de 4 anos, maiores de 60, gestantes, lactantes ou imunocomprometidos.`
  };

  const [ativo, setAtivo] = useState("antirrabica");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="OpcoesVacina">
      {/* Banner */}
      <div className="banner">
        <img src="/img/bannerPaginas/vacina.jpg" alt="Vacinação em Muriaé" />
      </div>

      {/* Texto introdutório */}
      <p>
        A vacinação é uma das estratégias mais eficazes para proteger a saúde da população e
        promover uma sociedade mais segura e saudável.
      </p>

      {/* Conjunto de botões */}
      <div className="conjuntoBotoes">
        <div className="botoes">
          <button onClick={() => setAtivo("antirrabica")} className={ativo === "antirrabica" ? "ativo" : ""}>Vacina Antirrábica</button>
          <button onClick={() => setAtivo("caderneta")} className={ativo === "caderneta" ? "ativo" : ""}>Caderneta</button>
          <button onClick={() => setAtivo("covid")} className={ativo === "covid" ? "ativo" : ""}>Covid</button>
          <button onClick={() => setAtivo("dengue")} className={ativo === "dengue" ? "ativo" : ""}>Dengue</button>

          {/* ✅ Botão que leva para a página correta */}
          <Link href="/servicos/vacina/calendario-vacinal">
            <button>Calendário Vacinal</button>
          </Link>
        </div>
      </div>

      {/* Conteúdo dinâmico */}
      <div key={ativo} className="conteudo">
        <div style={{ whiteSpace: "pre-line" }}>{assuntos[ativo]}</div>
      </div>
    </section>
  );
}
