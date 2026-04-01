"use client";

import React, { useState } from "react";
import "../../../../styles/calendarioVacinal.css";
import calendario from "../../../../data/calendario.json";

export default function Page() {
  const [selecionado, setSelecionado] = useState("Gestante");
  const [expandidos, setExpandidos] = useState([]); // vários abertos

  const grupos = calendario.grupos;
  const cards = calendario.cards;

  const toggleCard = (id) => {
    if (expandidos.includes(id)) {
      // se já está aberto, fecha
      setExpandidos(expandidos.filter((c) => c !== id));
    } else {
      // se não está aberto, adiciona
      setExpandidos([...expandidos, id]);
    }
  };

  return (
    <div className="CalendarioVacinal">
      <p>Calendário Nacional de Vacinação...</p>

      {/* Linha do tempo */}
      <div className="linha-tempo">
        <div className="faixa"></div>
        {grupos.map((grupo) => (
          <div
            key={grupo.nome}
            className="grupo"
            onClick={() => { setSelecionado(grupo.nome); setExpandidos([]); }}
          >
            <div className={`circulo ${selecionado === grupo.nome ? "ativo" : ""}`}>
              <img src={grupo.imagem} alt={grupo.nome} />
              <span className="titulo">{grupo.nome}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="cards">
        {cards[selecionado].map((card) => (
          <div
            key={card.id}
            className={`CardCalendario ${expandidos.includes(card.id) ? "expandido" : ""}`}
          >
            <div
              className="card-titulo"
              onClick={() => toggleCard(card.id)}
            >
              <span>{card.idade}</span>
              <span className="seta">{expandidos.includes(card.id) ? "▼" : "▶"}</span>
            </div>

            {expandidos.includes(card.id) && (
              <div className="card-conteudo">
                {card.detalhes}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
