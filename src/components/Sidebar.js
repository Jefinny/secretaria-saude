"use client"; // <-- adiciona isso na primeira linha

import React, { useState } from "react";
import "../styles/sidebar.css";

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [open, setOpen] = useState(false);
    const toggleMenu = (menuName) => {setActiveMenu(activeMenu === menuName ? null : menuName);
  };
  
  return (
    <>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <aside className={`sidebar ${open ? "open" : ""}`}>
            <button className="close-btn" onClick={() => setOpen(false)}>×</button>
            <nav>
                <ul>
                    <li>
                        <a href="/" className="menu-link">Página Inicial</a>
                    </li>

                    <li>
                        <button onClick={() => toggleMenu("servicos")} className={`menu-btn ${activeMenu === "servicos" ? "active open" : ""}`}>
                            Serviços de Saúde
                        </button>
                        {activeMenu === "servicos" && (
                            <ul className="submenu">
                                <li><a href="/servicos/atendimento-domiciliar">Atendimento Domiciliar</a></li>
                                <li><a href="/servicos/farmacia-municipal">Farmácia Municipal</a></li>
                                <li><a href="/servicos/laboratorio-municipal">Laboratório Municipal</a></li>
                                <li><a href="/servicos/pace">PACE</a></li>
                                <li><a href="/servicos/vacina">Vacina</a></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button onClick={() => toggleMenu("vigilancia")} className={`menu-btn ${activeMenu === "vigilancia" ? "active open" : ""}`}>
                            Vigilância em Saúde
                        </button>
                        {activeMenu === "vigilancia" && (
                            <ul className="submenu">
                                <li><a href="/vigilancia/ccz">CCZ</a></li>
                                <li><a href="/vigilancia/vigilancia-sanitaria">Vigilância Sanitária</a></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button onClick={() => toggleMenu("digital")} className={`menu-btn ${activeMenu === "digital" ? "active open" : ""}`}>
                            Saúde Digital
                        </button>
                        {activeMenu === "digital" && (
                            <ul className="submenu">
                                <li><a href="/digital/app-saude-digital">App Saúde Digital</a></li>
                                <li><a href="/digital/app-meu-sus">App Meu SUS Digital</a></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <button onClick={() => toggleMenu("contatos")} className={`menu-btn ${activeMenu === "contatos" ? "active open" : ""}`}>
                            Contatos
                        </button>
                        {activeMenu === "contatos" && (
                            <ul className="submenu">
                                <li><a href="/contatos/contatos">Contatos</a></li>
                                <li><a href="/contatos/ouvidoria">Ouvidoria</a></li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <a href="/transparencia" className="menu-link">Transparência</a>
                    </li>

                    <li>
                        <a href="/fluxos-assistenciais" className="menu-link">Fluxos Assistenciais</a>
                    </li>
                </ul>
            </nav>
      </aside>
    </>
  );
}
