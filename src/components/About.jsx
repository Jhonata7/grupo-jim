import {
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="empresa"
      className="section about"
    >
      <div className="container about-grid">
        <div className="about-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
            alt="Profissionais em treinamento de segurança do trabalho na Zona Oeste de São Paulo"
            className="about-image"
          />

          <div className="about-floating-card">
            <div className="about-floating-icon">
              <ShieldCheck size={30} />
            </div>

            <div>
              <strong>
                Segurança em primeiro lugar
              </strong>

              <span>
                Protegendo pessoas e operações
              </span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">
            Sobre a JIM SST
          </span>

          <h2>
            Segurança ocupacional para empresas na
            Zona Oeste de São Paulo.
          </h2>

          <p>
            A JIM SST oferece treinamentos e soluções técnicas em Saúde
            e Segurança do Trabalho para empresas que buscam proteger
            colaboradores, reduzir riscos e manter suas operações em
            conformidade.
          </p>

          <p>
            O atendimento contempla empresas na Lapa, Jaguaré,
            Vila Leopoldina, Barra Funda, Jaguara e demais bairros da
            Zona Oeste, com análise personalizada das necessidades de
            cada operação.
          </p>

          <div className="about-points">
            <div>
              <CheckCircle2 size={20} />
              Treinamentos SST
            </div>

            <div>
              <CheckCircle2 size={20} />
              Prevenção de riscos
            </div>

            <div>
              <CheckCircle2 size={20} />
              Conformidade ocupacional
            </div>

            <div>
              <CheckCircle2 size={20} />
              Atendimento especializado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
