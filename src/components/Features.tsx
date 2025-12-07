import { Users, Lightbulb, Handshake, Rocket } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community First",
    description: "Join a diverse network of founders, developers, designers, and investors all working together.",
  },
  {
    icon: Lightbulb,
    title: "Share Ideas",
    description: "Present your projects, get feedback, and learn from others building in the Barcelona ecosystem.",
  },
  {
    icon: Handshake,
    title: "Find Co-founders",
    description: "Connect with talented individuals looking to join exciting ventures and build something amazing.",
  },
  {
    icon: Rocket,
    title: "Grow Together",
    description: "Access resources, mentorship, and opportunities to accelerate your startup journey.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Join Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Better together
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe in the power of community. When builders come together, 
            amazing things happen.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl glass-card-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
