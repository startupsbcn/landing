const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="font-heading text-2xl font-medium mb-6">
            Startups BCN
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-background/70">
            <a href="#" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Events
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Community
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Divider */}
          <div className="w-24 h-px bg-background/20 mb-8" />
          
          {/* Made with love */}
          <p className="text-background/60 text-sm">
            made with ❤️ from Barcelona
          </p>
          
          {/* Copyright */}
          <p className="text-background/40 text-xs mt-4">
            © {new Date().getFullYear()} Startups BCN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
