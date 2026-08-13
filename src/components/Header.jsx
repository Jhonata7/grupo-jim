import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import logo from "../assets/grupo-jim-logopng.png";

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
        >
          <img
            src={logo}
            alt="Grupo JIM Saúde e Segurança do Trabalho"
            className="logo"
          />
        </a>

        <nav
          className={`nav ${
            menuOpen ? "nav-open" : ""
          }`}
        >
          <a
            href="#inicio"
            onClick={closeMenu}
          >
            Início
          </a>

          <a
            href="#empresa"
            onClick={closeMenu}
          >
            Quem Somos
          </a>

          <a
            href="#servicos"
            onClick={closeMenu}
          >
            Serviços
          </a>

          <a
            href="#galeria"
            onClick={closeMenu}
          >
            Atuação
          </a>

          <a
            href="#contato"
            onClick={closeMenu}
          >
            Contato
          </a>

          <a
            href="#contato"
            className="header-cta"
            onClick={closeMenu}
          >
            Solicitar atendimento

            <ArrowRight size={17} />
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