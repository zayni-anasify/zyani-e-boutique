import { Instagram, Facebook, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/zyanisarees',
      color: 'hover:text-pink-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/919876543210',
      color: 'hover:text-green-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/zyanisarees',
      color: 'hover:text-blue-500'
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Popular', href: '#popular' },
    { name: 'Cotton Sarees', href: '#cotton' },
    { name: 'About Brand', href: '#about' },
  ];

  const supportLinks = [
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
    { name: 'Size Guide', href: '#' },
    { name: 'Care Instructions', href: '#' },
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
              Zyani Sarees
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Celebrating the timeless art of Chanderi handloom weaving. 
              Each saree tells a story of heritage, craftsmanship, and elegance.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Mail size={16} />
              <span>hello@zyanisarees.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-playfair font-semibold text-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="font-playfair font-semibold text-foreground mb-4">
              Connect With Us
            </h4>
            
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-muted rounded-lg text-muted-foreground transition-colors duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Get updates on new collections
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-border rounded-l-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background text-sm"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg hover:bg-accent transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Zyani Sarees. All rights reserved. Made with ❤️ for tradition.
            </p>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;