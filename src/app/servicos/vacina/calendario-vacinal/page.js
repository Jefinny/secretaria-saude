"use client";

import React, { useState } from "react";
import "../../../../styles/calendarioVacinal.css";

export default function Page() {
  const [selecionado, setSelecionado] = useState("Gestante");
  const [expandido, setExpandido] = useState(null);

  const grupos = [
    { nome: "Gestante", imagem: "/img/grupos/gestante.jpg" },
    { nome: "Criança", imagem: "/img/grupos/crianca.jpg" },
    { nome: "Adolescente", imagem: "/img/grupos/adolescente.jpg" },
    { nome: "Adulto", imagem: "/img/grupos/adulto.jpg" }
  ];

  const cards = {
    Gestante: [
      {
        idade: "A qualquer tempo no pré-natal",
        detalhes: `
Hepatite B (HB - recombinante) - Iniciar ou completar 3 doses, a qualquer tempo do pré-natal
Doenças evitadas: Proteção contra Hepatite B

Difteria e Tétano (dT) - Iniciar ou completar o esquema de 3 doses com os toxoides de difteria e tétano, a qualquer tempo do pré-natal
Doenças evitadas: Proteção contra difteria e tétano

Onde tomar?
Núcleo de Planejamento Familiar, Rua Coronel Izalino, 154 (próximo ao Hospital São Paulo)

Dia e horário?
Segunda, quinta e sexta-feira, das 12h30 às 16h30

Documentos necessários
Certidão de nascimento ou declaração de nascido vivo.
        `
      }
    ],
    Criança: [
      { idade: "0 a 1 ano", detalhes: "BCG, Hepatite B, Pentavalente, Poliomielite, Rotavírus, Pneumocócica, Meningocócica, Tríplice Viral." },
      { idade: "1 a 4 anos", detalhes: "Reforços de Poliomielite, DTP, Tríplice Viral, Varicela, Hepatite A." }
    ],
    Adolescente: [
      { idade: "10 a 19 anos", detalhes: "HPV, Meningocócica ACWY, reforços de dTpa e Tríplice Viral." }
    ],
    Adulto: [
      { idade: "20 a 59 anos", detalhes: "Influenza anual, reforços de dT, Hepatite B." },
      { idade: "60+", detalhes: "Influenza anual, Pneumocócica, reforços de dT." }
    ]
  };

  return (
    <div className="CalendarioVacinal">
      <p>
        A vacinação é a melhor maneira de proteger contra doenças imunopreveníveis.
        O Calendário Nacional de Vacinação ajuda a descobrir quais vacinas cada pessoa precisa
        e quando aplicá-las.
      </p>

      <div className="linha-tempo">
        <div className="faixa"></div>
        {grupos.map((grupo) => (
          <div key={grupo.nome} className="grupo" onClick={() => { setSelecionado(grupo.nome); setExpandido(null); }}>
            <div className={`circulo ${selecionado === grupo.nome ? "ativo" : ""}`}>
              <img src={grupo.imagem} alt={grupo.nome} />
              <span className="titulo">{grupo.nome}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="cards">
        {cards[selecionado].map((card, index) => (
          <div key={index} className="card">
            <div className="card-titulo" onClick={() => setExpandido(expandido === index ? null : index)}>
              <span>{card.idade}</span>
              <span className="seta">{expandido === index ? "▼" : "▶"}</span>
            </div>
            {expandido === index && <div className="card-conteudo">{card.detalhes}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
