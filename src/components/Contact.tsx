import { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, we'll just show a success message
    // Later, this can be connected to Supabase when the integration is set up
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm ${formData.name}. ${formData.message || 'I would like to know more about your sarees.'}`;
    const phoneNumber = "919876543210";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our sarees or need styling advice? 
            We're here to help you find the perfect handloom piece.
          </p>
          <div className="elegant-divider">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">Instant support and quick orders</p>
                  <button 
                    onClick={() => {
                      const message = "Hi! I'd like to know more about your saree collection.";
                      const phoneNumber = "919876543210";
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="text-green-600 hover:text-green-700 font-medium mt-1"
                  >
                    +91 98765 43210
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">For detailed inquiries</p>
                  <a 
                    href="mailto:hello@zyanisarees.com" 
                    className="text-primary hover:text-accent font-medium mt-1"
                  >
                    hello@zyanisarees.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">Call us for personal assistance</p>
                  <a 
                    href="tel:+919876543210" 
                    className="text-primary hover:text-accent font-medium mt-1"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    Chanderi, Madhya Pradesh<br />
                    India - 473446
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-playfair font-semibold text-foreground mb-2">
                Why Choose WhatsApp?
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Instant order confirmation</li>
                <li>• Real-time updates on your purchase</li>
                <li>• Easy image sharing for custom requests</li>
                <li>• Personal styling consultation</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <div className="bg-card rounded-xl shadow-[var(--shadow-card)] p-8">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="btn-luxury flex-1"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppContact}
                    className="btn-outline-luxury flex-1 bg-green-50 border-green-500 text-green-700 hover:bg-green-500 hover:text-white"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;