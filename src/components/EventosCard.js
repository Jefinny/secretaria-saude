"use client";

import React from "react";
import Link from "next/link";
import "../styles/eventos.css";

export default function EventosCard({ evento }) {
  return (
    <Link href={`/eventos/${evento.id}`} className="eventCard">
      <img src={evento.imgSrc} alt={evento.titulo} className="evento-banner" />
      <div className="evento-info">
        <span className="evento-data">
          {new Date(evento.data).toLocaleDateString("pt-BR")}
        </span>
        <h3>{evento.titulo}</h3>
        <p>{evento.resumo}</p>
      </div>
    </Link>
  );
}
