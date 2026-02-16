import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const animals = [
  { id: 1, name: "Barnaby", species: "Pygmy Goat", image: "/images/goat.png", description: "Loves alfalfa and ear scratches." },
  { id: 2, name: "Heather", species: "Highland Cow", image: "/images/cow.png", description: "Our gentle giant matriarch." },
  { id: 3, name: "Pip & Squeak", species: "Ducklings", image: "/images/ducks.png", description: "Always swimming together in the pond." },
  { id: 4, name: "Archimedes", species: "Barn Owl", image: "/images/owl.png", description: "Watches over the barn from the rafters." },
];

export function Animals() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl mb-4 text-foreground">Meet Our Residents</h2>
            <p className="text-muted-foreground text-lg">
              Every animal at Meadowheart has a name and a story. We treat them as family, and we invite you to do the same.
            </p>
          </div>
          <button className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-2 underline-offset-4">
            View All Residents →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animals.map((animal, index) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-md group cursor-pointer bg-card h-full">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6 text-foreground translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-accent text-sm font-bold uppercase tracking-wider mb-1 block">{animal.species}</span>
                    <h3 className="text-3xl font-display mb-2">{animal.name}</h3>
                    <p className="text-foreground/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                      {animal.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Animals;
