import { MessageCircle } from 'lucide-react';
import { businessInfo } from '../config/business';

function WhatsAppButton() {
  const message = encodeURIComponent('Hello, I’m interested in renting a car. Please send me more information.');

  return (
    <a
      href={`https://wa.me/${businessInfo.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us"
    >
      <MessageCircle size={22} />
      <span>Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
