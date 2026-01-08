import { Eye, Ear, Accessibility, MessageCircle, Brain, UserRound } from "lucide-react";
import { motion } from "framer-motion";

const personas = [
  {
    icon: Eye,
    title: "Visual Impairment",
    benefit: "Audio + haptic navigation",
    description: "Audio guidance, obstacle detection, vibration alerts",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Ear,
    title: "Hearing Impairment",
    benefit: "Visual + vibration alerts",
    description: "Visual alerts, vibration patterns for warnings",
    gradient: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Accessibility,
    title: "Mobility",
    benefit: "Ramp & elevator routing",
    description: "Ramp and elevator routing, accessible entrance detection",
    gradient: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    benefit: "Text-to-speech assistance",
    description: "Text-to-speech assistance, gesture communication",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Brain,
    title: "Neurodivergent",
    benefit: "Comfort mode & minimal alerts",
    description: "Comfort mode, minimal alerts, social connection support",
    gradient: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: UserRound,
    title: "Senior Support",
    benefit: "Fall detection & caregiver alerts",
    description: "Fall detection, simplified navigation, caregiver alerts",
    gradient: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const PersonasSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Built for Everyone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Personalized for <span className="text-primary">every need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            AccessWay adapts to individual accessibility requirements, providing tailored assistance for diverse needs.
          </p>
        </motion.div>

        {/* Personas Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {personas.map((persona) => (
            <motion.div
              key={persona.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/30 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon container with gradient */}
              <div className={`relative w-16 h-16 rounded-2xl ${persona.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                <persona.icon className="w-8 h-8 text-foreground group-hover:text-white relative z-10 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 relative">{persona.title}</h3>
              <p className="text-primary font-semibold text-sm mb-3 relative">{persona.benefit}</p>
              <p className="text-muted-foreground text-sm leading-relaxed relative">{persona.description}</p>
              
              {/* Decorative corner accent */}
              <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${persona.gradient} opacity-10 rounded-full blur-xl`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PersonasSection;
