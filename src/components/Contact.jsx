import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Mensagem enviada com sucesso!"
    );
  }

  return (
    <section
      id="contato"
      className="section contact"
    >
      <div className="container contact-wrapper">

        <div className="contact-content">

          <span className="section-label">
            Entre em contato
          </span>

          <h2>
            Vamos tornar sua empresa ainda mais segura?
          </h2>

          <p>
            Conte um pouco sobre a sua necessidade.
            Nossa equipe analisará o cenário e
            entrará em contato.
          </p>

          <div className="contact-highlight">

            <div className="contact-highlight-icon">
              <MessageCircle size={26} />
            </div>

            <div>

              <strong>
                Atendimento personalizado
              </strong>

              <span>
                Fale diretamente com nossa equipe.
              </span>

            </div>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <input
              type="text"
              placeholder="Seu nome"
              required
            />

            <input
              type="text"
              placeholder="Empresa"
            />

          </div>

          <input
            type="email"
            placeholder="Seu e-mail"
            required
          />

          <input
            type="tel"
            placeholder="Telefone ou WhatsApp"
            required
          />

          <textarea
            rows={6}
            placeholder="Conte um pouco sobre a sua necessidade..."
            required
          />

          <button
            type="submit"
            className="contact-button"
          >
            Solicitar atendimento

            <ArrowRight size={19} />
          </button>

        </form>

      </div>

    </section>
  );
}