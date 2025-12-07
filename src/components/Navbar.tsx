import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { joinForm } from "@/lib/tally";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="mt-4 mx-auto max-w-5xl">
          <div className="glass-card rounded-2xl px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="/" className="font-heading text-xl font-medium text-white">
                Startups BCN
              </a>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  Events
                </a>
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                  Community
                </a>
                <Button 
                  variant="glass" 
                  size="sm"
                  {...joinForm}
                >
                  Join us
                </Button>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            
            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/10">
                <div className="flex flex-col gap-4">
                  <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                    About
                  </a>
                  <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                    Events
                  </a>
                  <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                    Community
                  </a>
                  <Button 
                    variant="glass" 
                    size="sm" 
                    className="w-full"
                    {...joinForm}
                  >
                    Join us
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
