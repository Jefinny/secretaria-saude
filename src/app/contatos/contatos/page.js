"use client";

import React, { useState } from "react";
import contatosData from "../../../data/contatosServicos.json";
import "../../../styles/contatosServicos.css";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Page() {
  const [categoria, setCategoria] = useState("Todos");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const contatosPorPagina = 12;

  const categorias = [
    "Todos",
    "Ponto de Apoio",
    "Policlinica",
    "Saude Mental",
    "UBS",
    "Outros"
  ];

  const contatosFiltrados =
    categoria === "Todos"
      ? contatosData
      : contatosData.filter((c) => c.categoria === categoria);

  const indiceUltimo = paginaAtual * contatosPorPagina;
  const indicePrimeiro = indiceUltimo - contatosPorPagina;
  const contatosPaginados =
    categoria === "Todos"
      ? contatosFiltrados.slice(indicePrimeiro, indiceUltimo)
      : contatosFiltrados;

  const totalPaginas = Math.ceil(contatosFiltrados.length / contatosPorPagina);

  return (
    <div className="ContatosServicos">
      <div className="menuContatos">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`menuContatos-btn ${categoria === cat ? "ativo" : ""}`}
            onClick={() => {
              setCategoria(cat);
              setPaginaAtual(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cardsContatos">
        {contatosPaginados.map((contato, index) => (
          <div key={index} className="cardContatos">
            <h3>{contato.nome}</h3>
            <p><FaPhone /> {contato.telefone}</p>
            <p><FaMapMarkerAlt /> {contato.endereco}</p>
            <p><FaEnvelope /> {contato.email}</p>
          </div>
        ))}
      </div>

      {categoria === "Todos" && totalPaginas > 1 && (
        <div className="paginacao">
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              className={`pagina-btn ${paginaAtual === i + 1 ? "ativo" : ""}`}
              onClick={() => setPaginaAtual(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
