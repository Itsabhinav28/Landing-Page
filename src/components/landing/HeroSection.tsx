import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Globe, Accessibility } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-20 md:pt-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sage-light/30 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12 lg:py-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 mb-6 shadow-soft animate-fade-up">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Microsoft Imagine Cup 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-up stagger-1">
              Accessibility in{" "}
              <span className="text-primary">Motion.</span>
              <br />
              Everywhere You Go.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up stagger-2 text-balance">
              AI-powered navigation and smart assistance for people with disabilities — indoors and outdoors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Explore the Product
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-up stagger-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Accessibility className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">WCAG Compliant</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">AI for Accessibility</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in stagger-2">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center animate-float shadow-card">
                <Accessibility className="w-10 h-10 text-primary" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Globe className="w-8 h-8 text-accent-foreground" />
              </div>

              {/* Phone Mockup */}
              <div className="phone-mockup w-[280px] sm:w-[320px] shadow-elevated">
                <div className="phone-screen aspect-[9/19] bg-sage-light flex flex-col items-center justify-center p-8">
                  {/* App Logo */}
                  <div className="w-28 h-28 bg-card rounded-3xl shadow-card flex items-center justify-center mb-6">
                    <div className="relative">
                      <Globe className="w-14 h-14 text-primary" strokeWidth={1.5} />
                      <Accessibility className="w-7 h-7 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">AccessWay</h2>
                  <p className="text-muted-foreground text-lg">Accessibility in_</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
