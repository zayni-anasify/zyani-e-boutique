import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes Chanderi sarees special?",
      answer: "Chanderi sarees are renowned for their lightweight, sheer texture and distinctive handwoven patterns. They're crafted using traditional techniques that create a unique blend of cotton and silk, making them comfortable yet elegant. The intricate zari work and traditional motifs reflect centuries of artistic heritage."
    },
    {
      question: "How do I care for my handloom saree?",
      answer: "Handloom sarees require gentle care. We recommend dry cleaning for silk blends and hand washing in cold water for pure cotton varieties. Always air dry in shade, iron on low heat, and store in cotton bags with neem leaves to prevent insects. Avoid direct sunlight and harsh chemicals."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 7-day return policy for unused sarees in original condition with tags intact. Exchanges are available for size or color variations within 15 days. Custom or specially altered pieces cannot be returned. Please contact us via WhatsApp for return initiation."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship within India only. For international customers, we're exploring partnerships with global shipping services. Please reach out to us via WhatsApp, and we'll try to accommodate special requests on a case-by-case basis."
    },
    {
      question: "How can I track my order?",
      answer: "All orders are processed via WhatsApp, and we provide regular updates including order confirmation, dispatch notification with tracking details, and delivery confirmation. You'll receive tracking information within 24 hours of dispatch."
    },
    {
      question: "Are the colors shown online accurate?",
      answer: "We strive to show the most accurate colors possible, but slight variations may occur due to screen settings and lighting. Since these are handloom products, minor color variations are natural and add to their unique character. For specific color concerns, feel free to contact us."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our handloom sarees, 
            ordering process, and care instructions.
          </p>
          <div className="elegant-divider">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="scroll-reveal mb-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-lg shadow-[var(--shadow-soft)] overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-300"
                >
                  <h3 className="font-playfair font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp size={20} className="text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <button 
            onClick={() => {
              const message = "Hi! I have a question about your sarees. Could you please help me?";
              const phoneNumber = "919876543210";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="btn-luxury"
          >
            Contact us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;