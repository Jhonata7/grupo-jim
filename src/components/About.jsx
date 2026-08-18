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
            alt="Profissionais atuando em ambiente de trabalho com foco em segurança ocupacional"
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
            Segurança ocupacional com responsabilidade,
            prevenção e eficiência.
          </h2>

          <p>
            A JIM SST atua na área de Saúde e Segurança
            do Trabalho, oferecendo soluções técnicas para
            empresas que buscam proteger seus colaboradores,
            reduzir riscos e manter suas operações em
            conformidade.
          </p>

          <p>
            Com uma abordagem preventiva e personalizada,
            a empresa avalia as necessidades de cada operação
            e contribui para uma cultura de segurança mais
            sólida, eficiente e presente no dia a dia.
          </p>

          <div className="about-points">
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
              Proteção aos colaboradores
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
