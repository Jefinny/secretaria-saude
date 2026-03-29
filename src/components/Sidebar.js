"use client";
import React, { useState } from "react";
import Link from "next/link"; // ✅ usar Link do Next.js
import styles from "./sidebar.module.css";

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [open, setOpen] = useState(false);

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    return (
        <>
            {/* Botão hamburguer */}
            <button className={styles.hamburger} onClick={() => setOpen(!open)}>
                ☰
            </button>

            {/* Overlay */}
            {open && <div className={styles.overlay} onClick={() => setOpen(false)}></div>}

            {/* Sidebar */}
            <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
                <button className={styles.closeBtn} onClick={() => setOpen(false)}>×</button>
                <nav>
                    <ul>
                        <li>
                            <Link href="/" className={styles.menuLink}>Página Inicial</Link>
                        </li>

                        <li>
                            <button 
                                onClick={() => toggleMenu("servicos")} 
                                className={`${styles.menuBtn} ${activeMenu === "servicos" ? styles.active : ""}`}>
                                Serviços de Saúde <span className={styles.arrow}></span>
                            </button>
                            {activeMenu === "servicos" && (
                                <ul className={styles.submenu}>
                                    <li><Link href="/servicos/atendimento-domiciliar">Atendimento Domiciliar</Link></li>
                                    <li><Link href="/servicos/farmacia-municipal">Farmácia Municipal</Link></li>
                                    <li><Link href="/servicos/laboratorio-municipal">Laboratório Municipal</Link></li>
                                    <li><Link href="/servicos/pace">Doação de sangue</Link></li>
                                    <li><Link href="/servicos/vacina">Vacina</Link></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button 
                                onClick={() => toggleMenu("vigilancia")} 
                                className={`${styles.menuBtn} ${activeMenu === "vigilancia" ? styles.active : ""}`}>
                                Vigilância em Saúde <span className={styles.arrow}></span>
                            </button>
                            {activeMenu === "vigilancia" && (
                                <ul className={styles.submenu}>
                                    <li><Link href="/vigilancia/ccz">CCZ</Link></li>
                                    <li><Link href="/vigilancia/vigilancia-sanitaria">Vigilância Sanitária</Link></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button 
                                onClick={() => toggleMenu("digital")} 
                                className={`${styles.menuBtn} ${activeMenu === "digital" ? styles.active : ""}`}>
                                Saúde Digital <span className={styles.arrow}></span>
                            </button>
                            {activeMenu === "digital" && (
                                <ul className={styles.submenu}>
                                    <li><Link href="/digital/app-saude-digital">App Saúde Digital</Link></li>
                                    <li><Link href="/digital/app-meu-sus">App Meu SUS Digital</Link></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button 
                                onClick={() => toggleMenu("contatos")} 
                                className={`${styles.menuBtn} ${activeMenu === "contatos" ? styles.active : ""}`}>
                                Contatos <span className={styles.arrow}></span>
                            </button>
                            {activeMenu === "contatos" && (
                                <ul className={styles.submenu}>
                                    <li><Link href="/contatos/contatos">Contatos</Link></li>
                                    <li><Link href="/contatos/ouvidoria">Ouvidoria</Link></li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link href="/transparencia" className={styles.menuLink}>Transparência</Link>
                        </li>

                        <li>
                            <Link href="/fluxos-assistenciais" className={styles.menuLink}>Fluxos Assistenciais</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}
