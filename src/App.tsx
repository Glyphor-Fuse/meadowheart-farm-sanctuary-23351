import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Animals } from "@/components/Animals";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Rules } from "@/components/Rules";
import { Footer } from "@/components/Footer";
import { useScroll, useSpring, motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const queryClient = new QueryClient();

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-50 origin-left"
          style={{ scaleX }}
        />

        {/* Navbar (Simple Overlay) */}
        <nav className="absolute top-0 w-full z-40 p-6 flex justify-between items-center text-white/90">
          <div className="font-display text-2xl drop-shadow-md tracking-wide">Meadowheart</div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium drop-shadow-sm uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">Animals</a>
            <a href="#" className="hover:text-accent transition-colors">Map</a>
            <a href="#" className="hover:text-accent transition-colors">Events</a>
            <a href="#" className="hover:text-accent transition-colors">FAQ</a>
          </div>

          <button 
            className="md:hidden text-white drop-shadow-md z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 text-2xl font-display text-white">
               <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Animals</a>
               <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Map</a>
               <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
               <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Book Visit</a>
            </div>
          )}
        </nav>

        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-secondary selection:text-secondary-foreground">
          <Hero />
          <InteractiveMap />
          <Animals />
          <Pricing />
          <Reviews />
          <Rules />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
