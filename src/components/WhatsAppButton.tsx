import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in your saree collection. Can you help me?";
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-btn group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute -top-12 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us!
      </span>
    </button>
  );
};

export default WhatsAppButton;