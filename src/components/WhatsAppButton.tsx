import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/4915222001551?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20IT-Dienstleistungen.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontakt per WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
