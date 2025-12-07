import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://www.barcelonavibes.com/wp-content/uploads/2022/06/panoramic-1.jpg')",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/90 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              by builders for builders
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="animate-fade-up-delay-1 font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-white text-shadow-hero mb-6 tracking-tight">
            Startups BCN
          </h1>
          
          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect, collaborate, and grow with innovators, founders, and builders. 
            Join a thriving network and connect with fellow builders in Barcelona.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-up-delay-3">
            <Button variant="hero" size="xl" className="group">
              Join the community
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
