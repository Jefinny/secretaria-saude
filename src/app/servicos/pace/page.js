"use client";

import React, { useEffect } from "react";
import "../../../styles/doacao.css"; // ajuste o caminho conforme sua estrutura

export default function Page() {
  // 🔝 Sempre voltar ao topo ao carregar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="doacao">
      {/* Banner */}
      <div className="banner">
        <img
          src="/img/banner-paginas/pace.jpg"
          alt="Doação de Sangue e Medula Óssea"
        />
      </div>

      {/* Conteúdo */}
      <div className="conteudo">
        <h2>Doação de Sangue e Medula Óssea</h2>
        <p>
          A doação de sangue e de medula óssea é um gesto de solidariedade que
          pode transformar e salvar vidas. Muitas pessoas enfrentam doenças
          graves e dependem de transfusões ou de um transplante de medula para
          sobreviver. Um simples ato de generosidade pode fazer toda a diferença
          para quem está lutando por um futuro.
        </p>
        <p>
          O processo de doação é seguro, rápido e pode trazer esperança para
          aqueles que dependem dessa ajuda. Se você tem entre 18 e 35 anos (para
          doação de medula) ou entre 16 e 69 anos (para doação de sangue,
          seguindo os critérios de saúde), pode se tornar um doador e fazer
          parte dessa corrente de cuidado e solidariedade.
        </p>

        <h3>Doação de Sangue</h3>
        <ul>
          <li>Levar documento oficial com foto</li>
          <li>Estar em boas condições de saúde</li>
          <li>
            Ter entre 16 e 69 anos (menores de 18 anos necessitam de autorização
            dos responsáveis)
          </li>
          <li>Pesar mais de 50 kg</li>
          <li>Não estar em jejum</li>
          <li>Evitar alimentos gordurosos nas 3 horas antes da doação</li>
        </ul>

        <h3>Doação de Medula Óssea</h3>
        <p>
          Toda quarta-feira, das 7h30 às 15h, no Posto Avançado de Coleta
          Externa (PACE), Rua Dr. Ivan Américo, R. Menotti Porcaro, s/n – Centro,
          Muriaé (antigo Viva a Vida, próximo ao Hospital São Paulo).
        </p>
        <p>
          Pessoas entre 18 e 35 anos podem se cadastrar como doadoras de medula
          óssea, desde que estejam em boa saúde e não apresentem doenças
          infecciosas ou hematológicas.
        </p>

        <h4>Como funciona</h4>
        <p>
          O cadastro para doação de medula óssea é simples e rápido. No local de
          coleta, é retirada uma pequena amostra de sangue (cerca de 5 ml) para
          identificar as características genéticas do doador. Essas informações
          entram em um banco de dados nacional e são comparadas com as de
          pacientes que precisam de transplante. Caso haja compatibilidade, o
          doador é contatado para dar continuidade ao processo.
        </p>
        <p>É necessário apresentar um documento oficial com foto.</p>
      </div>
    </section>
  );
}
