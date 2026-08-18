import { useState } from "react";
import {
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/grupo-jim-logo-preto.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header-container">
        <a
          href="#inicio"
          className="logo-link"
          onClick={closeMenu}
          aria-label="Ir para o início"
        >
          <img
            src={logo}
            alt="JIM SST - Saúde e Segurança do Trabalho"
            className="logo"
          />
        </a>

        <nav
          id="menu-principal"
          className={`nav ${
            menuOpen ? "nav-open" : ""
          }`}
          aria-label="Navegação principal"
        >
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>

          <a href="#empresa" onClick={closeMenu}>
            Quem Somos
          </a>

          <a href="#servicos" onClick={closeMenu}>
            Serviços
          </a>

          <a href="#galeria" onClick={closeMenu}>
            Atuação
          </a>

          <a href="#contato" onClick={closeMenu}>
            Contato
          </a>

        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label={
            menuOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={menuOpen}
          aria-controls="menu-principal"
        >
          {menuOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>
      </div>
    </header>
  );
}
