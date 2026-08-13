import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(3, 10, 18, 0.96) 0%,
            rgba(3, 10, 18, 0.82) 45%,
            rgba(3, 10, 18, 0.35) 100%
          ),
          url(${heroImage})
        `,
      }}
    >
      <div className="container hero-content">

        <div className="hero-badge">
          <ShieldCheck size={18} />

          <span>
            Grupo JIM • Saúde e Segurança do Trabalho
          </span>
        </div>

        <h1>
          Segurança que protege
          <span> pessoas e empresas.</span>
        </h1>

        <p className="hero-description">
          Soluções em Saúde e Segurança do Trabalho
          para prevenção de riscos, proteção dos
          colaboradores e conformidade da sua empresa.
        </p>

        <div className="hero-buttons">

          <a
            href="#contato"
            className="button-primary"
          >
            Solicitar atendimento
            <ArrowRight size={19} />
          </a>

          <a
            href="#servicos"
            className="button-secondary"
          >
            Conhecer serviços
          </a>

        </div>

        <div className="hero-features">

          <div>
            <CheckCircle2 size={18} />
            <span>Atendimento especializado</span>
          </div>

          <div>
            <CheckCircle2 size={18} />
            <span>Gestão de riscos</span>
          </div>

          <div>
            <CheckCircle2 size={18} />
            <span>Segurança ocupacional</span>
          </div>

        </div>

      </div>
    </section>
  );
}