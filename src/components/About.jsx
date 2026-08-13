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
            alt="Equipe de segurança do trabalho"
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
                Protegendo pessoas e empresas
              </span>

            </div>

          </div>

        </div>

        <div className="about-content">

          <span className="section-label">
            Sobre o Grupo JIM
          </span>

          <h2>
            Experiência e compromisso com a
            segurança ocupacional.
          </h2>

          <p>
            O Grupo JIM atua na área de Saúde e
            Segurança do Trabalho, oferecendo
            soluções técnicas para empresas que
            desejam proteger seus colaboradores e
            cumprir as exigências legais.
          </p>

          <p>
            Nosso objetivo é reduzir riscos,
            prevenir acidentes e promover um
            ambiente de trabalho mais seguro e
            produtivo.
          </p>

          <div className="about-points">

            <div>
              <CheckCircle2 size={20} />
              Atendimento especializado
            </div>

            <div>
              <CheckCircle2 size={20} />
              Prevenção de riscos
            </div>

            <div>
              <CheckCircle2 size={20} />
              Consultoria técnica
            </div>

            <div>
              <CheckCircle2 size={20} />
              Segurança ocupacional
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}