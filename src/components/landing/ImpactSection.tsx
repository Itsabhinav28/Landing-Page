import { Users, Building2, Globe, TrendingUp, Building, Train, Earth } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "1.3B",
    label: "People with disabilities worldwide",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    value: "80%",
    label: "Of buildings lack proper accessibility",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Globe,
    value: "100+",
    label: "Countries can benefit",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    value: "∞",
    label: "Scalable impact potential",
    gradient: "from-amber-500 to-orange-500",
  },
];

const scalePaths = [
  {
    icon: Building,
    title: "Malls & Airports",
    description: "Indoor navigation for complex spaces",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Train,
    title: "Public Transit",
    description: "Metro stations and bus terminals",
    gradient: "from-rose-400 to-rose-600",
  },
  {
    icon: Earth,
    title: "Smart Cities",
    description: "City-wide accessible infrastructure",
    gradient: "from-emerald-400 to-emerald-600",
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
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
            Global Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-primary">AccessWay</span> Matters
          </h2>
          <p className="text-lg text-muted-foreground">
            Accessibility-first cities and businesses create a more inclusive world for everyone.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-card rounded-3xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/30 text-center relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} bg-opacity-10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-foreground mb-2 relative">{stat.value}</div>
              <p className="text-sm text-muted-foreground relative">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scale Path */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-sage-light via-secondary to-cream rounded-[2rem] p-8 md:p-12 shadow-elevated relative overflow-hidden"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {scalePaths.map((path, index) => (
              <motion.div 
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group text-center"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${path.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <path.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{path.title}</h4>
                <p className="text-muted-foreground text-sm">{path.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
