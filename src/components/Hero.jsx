import {
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import heroImage from "../assets/hero-sst.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(5, 27, 43, 0.96) 0%,
            rgba(7, 48, 72, 0.86) 42%,
            rgba(8, 65, 82, 0.42) 100%
          ),
          url(${heroImage})
        `,
      }}
    >
      <div className="container hero-content">
        <div className="hero-badge">
          <ShieldCheck size={18} />

          <span>
            JIM SST • Saúde e Segurança do Trabalho
          </span>
        </div>

        <h1>
          Segurança que protege
          <span> pessoas, empresas e resultados.</span>
        </h1>

        <p className="hero-description">
          Soluções especializadas em Saúde e Segurança
          do Trabalho, com responsabilidade técnica,
          prevenção de riscos e atendimento personalizado.
        </p>

        <div className="hero-buttons">
          <a
            href="#servicos"
            className="button-primary"
          >
            Conhecer serviços
          </a>
        </div>

        <div className="hero-features">
          <div>
            <CheckCircle2 size={18} />

            <span>
              Gestão e prevenção de riscos
            </span>
          </div>

          <div>
            <CheckCircle2 size={18} />

            <span>
              Atendimento técnico especializado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
