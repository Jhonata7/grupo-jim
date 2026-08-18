import {
  useEffect,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85",

    title:
      "Segurança presente onde o trabalho acontece",

    description:
      "Acompanhamento técnico e prevenção diretamente nas operações.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1600&q=85",

    title:
      "Engenharia e prevenção",

    description:
      "Conhecimento técnico aplicado à proteção de pessoas e empresas.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",

    title:
      "Gestão de riscos",

    description:
      "Identificação, avaliação e controle dos riscos presentes nas operações.",
  },
];

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((currentSlide) =>
      currentSlide === slides.length - 1
        ? 0
        : currentSlide + 1
    );
  }

  function previousSlide() {
    setCurrent((currentSlide) =>
      currentSlide === 0
        ? slides.length - 1
        : currentSlide - 1
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((currentSlide) =>
        currentSlide === slides.length - 1
          ? 0
          : currentSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="galeria"
      className="section gallery"
    >
      <div className="container">

        <div className="section-heading gallery-heading">

          <span className="section-label">
            Nossa atuação
          </span>

          <h2>
            Segurança presente em cada etapa da operação.
          </h2>

          <p>
            Conhecimento técnico, prevenção e
            acompanhamento para proporcionar ambientes
            de trabalho cada vez mais seguros.
          </p>

        </div>

        <div
          className="carousel"
          aria-label="Galeria de atuação do Grupo JIM"
        >

          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={
                index === current
                  ? "carousel-slide carousel-slide-active"
                  : "carousel-slide"
              }
              aria-hidden={index !== current}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading={
                  index === 0
                    ? "eager"
                    : "lazy"
                }
              />

              <div className="carousel-overlay" />

              <div className="carousel-content">

                <h3>
                  {slide.title}
                </h3>

                <p>
                  {slide.description}
                </p>

              </div>
            </div>
          ))}

          <button
            type="button"
            className="carousel-button carousel-left"
            onClick={previousSlide}
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={26} />
          </button>

          <button
            type="button"
            className="carousel-button carousel-right"
            onClick={nextSlide}
            aria-label="Próxima imagem"
          >
            <ChevronRight size={26} />
          </button>

          <div
            className="carousel-dots"
            aria-label="Selecionar imagem da galeria"
          >
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.title}
                onClick={() => setCurrent(index)}
                className={
                  index === current
                    ? "carousel-dot carousel-dot-active"
                    : "carousel-dot"
                }
                aria-label={`Ir para slide ${index + 1}`}
                aria-current={
                  index === current
                    ? "true"
                    : undefined
                }
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}