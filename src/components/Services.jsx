import {
  GraduationCap,
  Settings,
  ShieldCheck,
  FileSearch,
  TriangleAlert,
  Accessibility,
  Flame,
  BadgeCheck,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Treinamentos SST",
    description:
      "Treinamentos de Saúde e Segurança do Trabalho nas modalidades EAD e presencial.",
  },
  {
    icon: Settings,
    title: "Gestão Wehandle",
    description:
      "Gestão integrada de documentos, processos e informações relacionadas à Saúde e Segurança do Trabalho.",
  },
  {
    icon: ShieldCheck,
    title: "PGR",
    description:
      "Programa de Gerenciamento de Riscos para identificação, avaliação e controle dos riscos ocupacionais.",
  },
  {
    icon: FileSearch,
    title: "LTCAT",
    description:
      "Laudo Técnico das Condições Ambientais do Trabalho para avaliação da exposição dos colaboradores.",
  },
  {
    icon: TriangleAlert,
    title: "Laudos de Insalubridade e Periculosidade",
    description:
      "Avaliação técnica das condições de trabalho e dos agentes que podem caracterizar insalubridade ou periculosidade.",
  },
  {
    icon: Accessibility,
    title: "Análise Ergonômica do Trabalho",
    description:
      "Avaliação das condições ergonômicas para promover segurança, conforto e eficiência nas atividades profissionais.",
  },
  {
    icon: Flame,
    title: "AVCB",
    description:
      "Assessoria para obtenção do Auto de Vistoria do Corpo de Bombeiros e adequação das medidas de segurança.",
  },
  {
    icon: BadgeCheck,
    title: "ART",
    description:
      "Anotação de Responsabilidade Técnica para formalização e comprovação dos serviços profissionais realizados.",
  },
  {
    icon: ClipboardList,
    title: "APR",
    description:
      "Análise Preliminar de Risco para identificação de perigos e definição de medidas preventivas antes das atividades.",
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
            Serviços da JIM SST
          </span>

          <h2>
            Soluções completas em Saúde e Segurança do Trabalho.
          </h2>

          <p>
            Serviços técnicos especializados para prevenção de riscos,
            conformidade, proteção dos colaboradores e segurança das
            operações.
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

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}