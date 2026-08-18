import {
  PlayCircle,
  ShieldCheck,
} from "lucide-react";

export default function VideoSection() {
  return (
    <section
      id="video"
      className="section video-section"
    >
      <div className="container">
        <div className="section-heading video-heading">
          <span className="section-label">
            Conheça a JIM SST
          </span>

          <h2>
            Segurança do Trabalho com experiência e responsabilidade.
          </h2>

          <p>
            Conheça um pouco mais sobre a atuação da
            JIM SST e o compromisso com a proteção de
            pessoas, empresas e operações.
          </p>
        </div>

        <div className="video-wrapper">
          <div className="video-information">
            <div className="video-information-icon">
              <ShieldCheck size={30} />
            </div>

            <div>
              <span>Responsabilidade técnica</span>

              <strong>
                Experiência e prevenção
              </strong>

              <small>
                Segurança aplicada a cada operação
              </small>
            </div>
          </div>

          <div className="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/GKd5-o2HclE"
              title="Apresentação da JIM SST"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="video-caption">
            <PlayCircle size={22} />

            <span>
              Assista ao vídeo e conheça nossa atuação.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
