"use client";

import React from "react";
import Link from "next/link";
import "../styles/noticias.css";

export default function NoticiasCard({ noticia }) {
  return (
    <Link href={`/noticias/${noticia.id}`} className="noticia-card">
      <img src={noticia.imagem} alt={noticia.titulo} className="noticia-banner" />
      <div className="noticia-info">
        <span className="noticia-data">
          {new Date(noticia.data_publicacao).toLocaleDateString("pt-BR")}
        </span>
        <h3>{noticia.titulo}</h3>
        <p>{noticia.descricao}</p>
      </div>
    </Link>
  );
}
