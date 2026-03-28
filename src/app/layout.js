import React from "react";
import Header from "../components/Header";
import "../styles/layout.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="layout">
          <Header />

          <div className="layout-body">
            <main className="layout-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
