import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const whatsappNumber = "5515981280465";

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const whatsappMessage = `
Olá, Fabio! Gostaria de solicitar atendimento da JIM SST.

*Nome:* ${name}
*Empresa:* ${company || "Não informado"}
*E-mail:* ${email}
*Telefone/WhatsApp:* ${phone}

*Necessidade:*
${message}
    `.trim();

    const whatsappLink =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      whatsappLink,
      "_blank",
      "noopener,noreferrer"
    );

    form.reset();
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
            Conte um pouco sobre a necessidade da sua
            empresa. A JIM SST analisará o cenário e
            orientará você sobre as soluções mais adequadas.
          </p>

          <div className="contact-highlight">
            <div className="contact-highlight-icon">
              <MessageCircle size={26} />
            </div>

            <div>
              <strong>
                Atendimento com Fabio Delgado
              </strong>

              <span>
                WhatsApp: (15) 98128-0465
                <br />
                fabio.delgado@jimsst.com.br
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
              name="name"
              placeholder="Seu nome"
              autoComplete="name"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Empresa"
              autoComplete="organization"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            autoComplete="email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Telefone ou WhatsApp"
            autoComplete="tel"
            required
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Conte um pouco sobre a sua necessidade..."
            required
          />

          <button
            type="submit"
            className="contact-button"
          >
            Solicitar atendimento pelo WhatsApp

            <ArrowRight size={19} />
          </button>
        </form>
      </div>
    </section>
  );
}