import {
  ShieldCheck,
  ClipboardCheck,
  FileText,
  HardHat,
  HeartPulse,
  Users,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Segurança do Trabalho",
    description:
      "Gestão preventiva de riscos para proporcionar ambientes de trabalho mais seguros e eficientes.",
  },
  {
    icon: ClipboardCheck,
    title: "Gestão Ocupacional",
    description:
      "Planejamento e acompanhamento das ações relacionadas à saúde e segurança dos colaboradores.",
  },
  {
    icon: FileText,
    title: "Laudos e Documentações",
    description:
      "Elaboração e organização de documentos técnicos relacionados à segurança ocupacional.",
  },
  {
    icon: HardHat,
    title: "Treinamentos",
    description:
      "Capacitação de trabalhadores para prevenção de acidentes e adoção de boas práticas.",
  },
  {
    icon: HeartPulse,
    title: "Saúde Ocupacional",
    description:
      "Soluções direcionadas à preservação da saúde e qualidade de vida dos trabalhadores.",
  },
  {
    icon: Users,
    title: "Consultoria Especializada",
    description:
      "Suporte técnico personalizado para empresas de diferentes segmentos e portes.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="section services"
    >
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            Nossas soluções
          </span>

          <h2>
            Segurança do trabalho muito além de uma obrigação.
          </h2>

          <p>
            Soluções técnicas para ajudar empresas
            a prevenir riscos, proteger trabalhadores
            e construir ambientes mais seguros.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.title}
              >
                <div className="service-icon">
                  <Icon size={28} />
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <a href="#contato">
                  Saiba mais

                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}