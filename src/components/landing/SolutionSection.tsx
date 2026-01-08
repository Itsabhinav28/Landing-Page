import { Smartphone, Glasses, Users, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Personalized accessible navigation with AI-powered routing, audio guidance, and haptic feedback.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Glasses,
    title: "Smart Glasses",
    description: "Hands-free obstacle detection, AR waypoints, and bone-conduction audio for seamless guidance.",
    gradient: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Users,
    title: "Community Data",
    description: "Crowdsourced accessibility reports from users keeping route data current and accurate.",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
];

const features = [
  "AI-generated accessible routes for any destination",
  "Real-time obstacle and hazard detection",
  "Multi-modal feedback: audio, haptic, and visual",
  "Community-driven accessibility data"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Meet <span className="text-primary">AccessWay</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              AccessWay helps people move independently, safely, and confidently using AI-powered accessible routing, real-time obstacle detection, and smart assistance.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button variant="hero" size="lg" className="group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Solution Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                className="group bg-card rounded-3xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/30 flex items-start gap-6 relative overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl ${solution.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                  <solution.icon className="w-8 h-8 text-foreground group-hover:text-white relative z-10 transition-colors duration-300" />
                </div>
                
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
                
                {/* Arrow indicator */}
                <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-6 top-1/2 -translate-y-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
