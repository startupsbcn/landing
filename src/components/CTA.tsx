import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Element */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to build the future?
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join hundreds of builders, entrepreneurs, and investors who are shaping 
            Barcelona's startup ecosystem. Your next co-founder, investor, or best 
            friend might be just one connection away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" className="group">
              Join the community
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-dark" size="xl">
              Learn more
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-muted-foreground text-sm">
                Builders
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-muted-foreground text-sm">
                Startups
              </div>
            </div>
            <div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                20+
              </div>
              <div className="text-muted-foreground text-sm">
                Events/year
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
