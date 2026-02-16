import { motion } from "framer-motion";
import { Home, Info, MapPin, Star, User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const hotspots = [
  { id: 1, x: 20, y: 30, label: "Goat Pen", icon: <User className="w-4 h-4" />, description: "Meet our friendly pygmy goats! Feeding times: 10am & 2pm." },
  { id: 2, x: 50, y: 50, label: "The Big Barn", icon: <Home className="w-4 h-4" />, description: "Historic barn with pony grooming stations." },
  { id: 3, x: 75, y: 40, label: "Duck Pond", icon: <Info className="w-4 h-4" />, description: "Quiet zone. Please do not feed bread to the ducks." },
  { id: 4, x: 35, y: 70, label: "Picnic Area", icon: <Star className="w-4 h-4" />, description: "Tables available first-come, first-served." },
  { id: 5, x: 80, y: 20, label: "Highland Cows", icon: <User className="w-4 h-4" />, description: "Say hello to Hamish and Heather, our gentle giants." },
];

export function InteractiveMap() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Plan Your Adventure</span>
          <h2 className="text-4xl md:text-5xl text-foreground">Explore the Sanctuary</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hover over the map markers to discover our animal inhabitants and find your way around our 50-acre haven.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-[#EBE9E1] rounded-3xl overflow-hidden shadow-2xl border-4 border-border/50 ring-1 ring-black/5">
          {/* Map Image */}
          <img 
            src="/images/farm-map.png" 
            alt="Interactive Map of Meadowheart Farm" 
            className="w-full h-full object-cover opacity-90 sepia-[.2]"
          />
          
          {/* Overlay Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

          {/* Hotspots */}
          <TooltipProvider delayDuration={0}>
            {hotspots.map((spot) => (
              <Tooltip key={spot.id}>
                <TooltipTrigger asChild>
                  <motion.button
                    className="absolute z-20 group"
                    style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: spot.id * 0.1, type: "spring" }}
                  >
                    <div className="relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/60 opacity-75"></span>
                      <div className="relative inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent text-foreground shadow-lg border-2 border-border transition-colors group-hover:bg-primary">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </div>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent sideOffset={10} className="bg-background/95 backdrop-blur-md p-4 max-w-xs border-primary/20 shadow-xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2 text-primary font-display text-lg">
                      {spot.icon}
                      <span>{spot.label}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{spot.description}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>

          {/* Map Legend/Compass Decorative */}
          <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur px-4 py-4 rounded-lg text-xs font-serif text-primary border border-primary/20 shadow-sm pointer-events-none">
            Meadowheart Guide
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveMap;
