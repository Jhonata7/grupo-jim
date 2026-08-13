import logo from "../assets/grupo-jim-logopng.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div className="footer-company">
          <img
            src={logo}
            alt="Grupo JIM - Saúde e Segurança do Trabalho"
            className="footer-logo"
          />

          <p>
            Saúde e Segurança do Trabalho com foco em prevenção,
            responsabilidade e resultado.
          </p>
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
        </div>

        <div className="footer-column">
          <h4>Atendimento</h4>

          <span>
            WhatsApp: em breve
          </span>

          <span>
            E-mail: em breve
          </span>

          <span>
            Endereço: em breve
          </span>
        </div>

      </div>

      <div className="container footer-bottom">
        <span>
          © {currentYear} Grupo JIM. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}