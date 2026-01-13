import { Construction, MapPinOff, Route, Navigation, Volume2, Users } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Construction,
    title: "Broken Elevators",
    description: "No real-time updates on elevator status",
    gradient: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Route,
    title: "Closed Ramps",
    description: "Temporary closures with no alternatives",
    gradient: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: MapPinOff,
    title: "Inaccessible Routes",
    description: "Navigation apps ignore accessibility needs",
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: Navigation,
    title: "No Indoor Navigation",
    description: "Lost in malls, airports, and metros",
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Volume2,
    title: "Sensory Overload",
    description: "Crowded spaces without guidance",
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Dependency on Others",
    description: "Forced to rely on strangers for help",
    gradient: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  },
};

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-destructive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-destructive font-semibold text-sm uppercase tracking-wider mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Navigation today is built for{" "}
            <span className="relative inline-block">
              <span className="text-destructive">speed</span>
              <motion.span 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute left-0 top-1/2 w-full h-1 bg-destructive/60 origin-left"
              />
            </span>
            {" "}— not for accessibility.
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            1.3 billion people worldwide face barriers every day that most navigation apps simply ignore.
          </p>
          <p className="text-sm text-muted-foreground/80 italic">
            Most mainstream navigation tools prioritize speed and distance rather than accessibility-specific constraints.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-destructive/30 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl ${problem.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                <problem.icon className="w-7 h-7 text-destructive group-hover:text-white relative z-10 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 relative">{problem.title}</h3>
              <p className="text-muted-foreground relative">{problem.description}</p>
              
              {/* Corner accent */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${problem.gradient} opacity-10 rounded-full blur-xl`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
