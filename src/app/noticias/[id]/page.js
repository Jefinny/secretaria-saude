"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import noticiasData from "../../../data/noticias.json";
import "../../../styles/noticiasDetalhes.css";

export default function NoticiasDetalhes() {
  const params = useParams();
  const noticia = noticiasData.find((n) => n.id.toString() === params.id);

  if (!noticia) return <p>Notícia não encontrada</p>;

  return (
    <article className="noticia-detalhe">
      <img src={noticia.imagem} alt={noticia.titulo} className="noticia-banner" />
      <h2>{noticia.titulo}</h2>
      <span className="noticia-data">
        {new Date(noticia.data_publicacao).toLocaleDateString("pt-BR")}
      </span>
      <p>{noticia.conteudo}</p>
      <Link href="/noticias" className="voltar">
        ← Voltar para Notícias
      </Link>
    </article>
  );
}
