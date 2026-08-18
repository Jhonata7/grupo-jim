import Home from "./pages/Home";

export default function App() {
  const whatsappNumber = "5515981280465";

  const whatsappMessage =
    "Olá, Fabio! Gostaria de saber mais sobre os serviços da JIM SST.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <Home />

      <a
        className="whatsapp-floating"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a JIM SST pelo WhatsApp"
        title="Fale com a JIM SST pelo WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.28-.14-1.65-.81-1.9-.9-.26-.09-.44-.14-.63.14-.19.28-.72.9-.88 1.09-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.74.35-.26.28-.98.96-.98 2.34s1 2.71 1.14 2.9c.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33Z" />

          <path d="M16.03 3C8.86 3 3.03 8.81 3.03 15.96c0 2.49.71 4.92 2.05 7.01L3 29l6.19-2.04a13.02 13.02 0 0 0 6.83 1.89h.01c7.17 0 13-5.81 13-12.96C29.03 8.81 23.2 3 16.03 3Zm0 23.65h-.01a10.78 10.78 0 0 1-5.5-1.5l-.39-.23-3.67 1.21 1.23-3.57-.25-.41a10.71 10.71 0 0 1-1.65-5.72c0-5.91 4.83-10.72 10.77-10.72 5.93 0 10.76 4.81 10.76 10.72 0 5.91-4.83 10.72-10.76 10.72Z" />
        </svg>
      </a>
    </>
  );
}