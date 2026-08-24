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
            JIM SST • Atendimento na Zona Oeste de São Paulo
          </span>
        </div>

        <h1>
          Treinamentos e soluções em SST
          <span> para empresas na Zona Oeste de SP.</span>
        </h1>

        <p className="hero-description">
          Saúde e Segurança do Trabalho com responsabilidade técnica,
          prevenção de riscos e atendimento personalizado na Lapa,
          Jaguaré, Vila Leopoldina, Barra Funda e região.
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
              Treinamentos SST presenciais e EAD
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
