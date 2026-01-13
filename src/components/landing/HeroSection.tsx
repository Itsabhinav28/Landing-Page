import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Globe, Accessibility } from "lucide-react";
import { motion } from "framer-motion";
import splashScreen from "@/assets/Splash screen.jpg";
import smartGlassesImage from "@/assets/smart-glasses-removebg-preview.png";

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
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4 animate-fade-up stagger-2 text-balance">
              AI-powered navigation and smart assistance for people with disabilities — indoors and outdoors.
            </p>
            <p className="text-sm text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 mb-6 animate-fade-up stagger-2">
              Designed for real-world accessibility — combining AI navigation, smart wearables, and community-verified data.
            </p>
            
            {/* Micro-tags */}
            <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start mb-8 animate-fade-up stagger-2">
              <span className="text-xs px-3 py-1 bg-card/60 backdrop-blur-sm border border-border/30 rounded-full text-muted-foreground">AI-Assisted Navigation</span>
              <span className="text-xs px-3 py-1 bg-card/60 backdrop-blur-sm border border-border/30 rounded-full text-muted-foreground">Smart Glasses Compatible</span>
              <span className="text-xs px-3 py-1 bg-card/60 backdrop-blur-sm border border-border/30 rounded-full text-muted-foreground">Indoor & Outdoor Support</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-up stagger-3">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto"
                asChild
              >
                <a 
                  href="https://1drv.ms/v/c/6DA338F03C89AD64/IQAn0KQCaVuUSLm2fsKHNse9AXSmzx5unSC2qEtaESADfKU?e=ZDP956" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </a>
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
                <div className="phone-screen aspect-[9/19] overflow-hidden">
                  <img 
                    src={splashScreen} 
                    alt="AccessWay Splash Screen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Smart Glasses - Purely Transparent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: [0, -5, 5, 0],
                  y: [0, -15, 0],
                  x: [0, -8, 8, 0]
                }}
                transition={{ 
                  opacity: { duration: 1, delay: 0.5 },
                  scale: { duration: 0.8, delay: 0.5 },
                  rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
                className="absolute -bottom-8 right-16 lg:-bottom-32 lg:right-8 w-[432px] h-[432px] lg:w-[480px] lg:h-[480px] z-30 pointer-events-none"
              >
                {/* Glowing orb effect behind glasses */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/40 via-sage-light/30 to-accent/20 rounded-full blur-2xl -z-10"
                />
                
                {/* Purely transparent glasses image */}
                <div className="relative w-full h-full">
                  <img 
                    src={smartGlassesImage} 
                    alt="AccessWay Smart Glasses" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  
                  {/* Floating particles around glasses */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                      style={{
                        top: `${20 + (i % 3) * 30}%`,
                        left: `${15 + (i % 2) * 70}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        x: [0, 10, 0],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                {/* Connecting line to phone - curved line from bottom-right glasses to phone */}
                <motion.svg
                  className="absolute top-1/2 -left-12 lg:-left-16 w-16 lg:w-20 h-0.5 z-0"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  style={{ transform: 'rotate(-45deg)', transformOrigin: 'right center' }}
                >
                  <motion.path
                    d="M 0 0 Q -20 -20 -40 0"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4 4"
                    opacity="0.3"
                    animate={{
                      strokeDashoffset: [0, -8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.svg>
              </motion.div>
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
