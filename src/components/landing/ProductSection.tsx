import { Settings2, Map, Volume2, Flag } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Personalize",
    description: "Select your accessibility needs — visual, hearing, mobility, or cognitive support.",
    icon: Settings2,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    step: "02",
    title: "Get Routes",
    description: "AI generates the safest, most accessible path with ramps, elevators, and clear pathways.",
    icon: Map,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    step: "03",
    title: "Navigate",
    description: "Get turn-by-turn guidance with audio, AR overlays, and haptic vibration alerts.",
    icon: Volume2,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    step: "04",
    title: "Contribute",
    description: "Report issues and help keep accessibility data current for the community.",
    icon: Flag,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
};

const ProductSection = () => {
  return (
    <section id="product" className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Accessibility made <span className="text-primary">simple</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to navigate any space independently and confidently.
          </p>
        </motion.div>

        {/* Product Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.step} 
              variants={itemVariants}
              className="group"
            >
              {/* Enhanced Phone Mockup */}
              <div className="relative mb-8">
                {/* Decorative elements */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${step.gradient} rounded-[3rem] blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                
                {/* Floating decorative dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/30 rounded-full animate-pulse" />
                <div className="absolute -bottom-3 -left-1 w-3 h-3 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-charcoal to-charcoal/90 rounded-[2.5rem] p-2 shadow-elevated group-hover:shadow-card transition-all duration-500 group-hover:-translate-y-2">
                  {/* Phone Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-charcoal rounded-full z-10" />
                  
                  {/* Screen Container - Image Placeholder */}
                  <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-sage-light to-cream aspect-[9/18]">
                    {/* Placeholder for app screenshot */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">App Screenshot</p>
                        <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      </div>
                      {/* Decorative grid lines */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-x-0 top-1/4 h-px bg-charcoal" />
                        <div className="absolute inset-x-0 top-2/4 h-px bg-charcoal" />
                        <div className="absolute inset-x-0 top-3/4 h-px bg-charcoal" />
                        <div className="absolute inset-y-0 left-1/4 w-px bg-charcoal" />
                        <div className="absolute inset-y-0 left-2/4 w-px bg-charcoal" />
                        <div className="absolute inset-y-0 left-3/4 w-px bg-charcoal" />
                      </div>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
                </div>
                
                {/* Step Number Badge */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-elevated z-20"
                >
                  <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                </motion.div>
              </div>

              {/* Step Info */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-sage-light flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-card transition-shadow">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
