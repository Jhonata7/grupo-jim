import logo from "../assets/grupo-jim-logo-branco.png";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappNumber = "5515981280465";

  const whatsappMessage =
    "Olá, Fabio! Gostaria de falar com a JIM SST.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-company">
          <a href="#inicio" className="footer-brand" aria-label="Voltar ao início">
            <img
              src={logo}
              alt="JIM SST - Saúde e Segurança do Trabalho"
              className="footer-logo"
            />
          </a>

          <p>
            Saúde e Segurança do Trabalho com foco em
            prevenção, responsabilidade técnica e resultados.
          </p>

          <div className="footer-credentials">
            <span><ShieldCheck size={16} /> CNPJ 39.938.812/0001-18</span>
            <span><ShieldCheck size={16} /> Eng. Fabio Delgado • CREA-SP 5070742480</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Navegação</h4>

          <a href="#inicio">
            Início
          </a>

          <a href="#empresa">
            Quem Somos
          </a>

          <a href="#servicos">
            Serviços
          </a>

          <a href="#galeria">
            Nossa atuação
          </a>

          <a href="#contato">
            Contato
          </a>
        </div>

        <div className="footer-column">
          <h4>Atendimento</h4>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: (15) 98128-0465
          </a>

          <a href="mailto:fabio.delgado@jimsst.com.br">
            fabio.delgado@jimsst.com.br
          </a>

        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {currentYear} JIM SST. Todos os direitos reservados.
        </span>
        <span>Saúde, segurança e prevenção em cada operação.</span>
      </div>
    </footer>
  );
}
