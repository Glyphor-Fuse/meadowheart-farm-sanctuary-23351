import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-farm.png"
          alt="Happy family at Meadowheart Farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-4 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-foreground font-medium text-sm mb-4 tracking-wider uppercase">
            Open Daily 9am - 5pm
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground drop-shadow-lg leading-tight">
            Meadowheart <br />
            <span className="text-accent/90 italic text-4xl md:text-6xl lg:text-7xl block mt-2">Farm & Sanctuary</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-foreground/90 max-w-2xl mx-auto font-light drop-shadow-md leading-relaxed"
        >
          Reconnect with nature, meet our gentle animals, and create timeless family memories in the heart of the valley.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-lg px-8 py-6 rounded-xl shadow-xl transition-transform hover:scale-105">
            Book Your Visit
          </Button>
          <Button size="lg" variant="outline" className="bg-background/10 hover:bg-background/20 text-foreground border-border/40 backdrop-blur-md font-display text-lg px-8 py-6 rounded-xl transition-transform hover:scale-105">
            View Daily Schedule
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/70"
      >
        <span className="text-sm tracking-widest uppercase mb-2 block text-center">Explore</span>
        <div className="w-[1px] h-12 bg-background/50 mx-auto"></div>
      </motion.div>
    </section>
  );
}

export default Hero;
