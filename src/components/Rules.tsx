import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ShieldCheck, Info, Leaf, Heart } from "lucide-react";

export function Rules() {
  return (
    <section className="py-24 bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-4xl text-foreground mb-4">Safety & Guidelines</h2>
          <p className="text-lg max-w-2xl">
            To keep our animals happy and our visitors safe, please follow these simple rules during your visit to Meadowheart.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full bg-card rounded-2xl shadow-sm border border-border px-6 py-4">
          <AccordionItem value="item-1" className="border-b-border">
            <AccordionTrigger className="text-lg font-display text-foreground hover:text-primary">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-accent" />
                Interacting with Animals
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed pl-8">
              Please always approach animals slowly and quietly. Do not chase or shout. Pet gently on their backs, avoiding heads and mouths. If an animal walks away, please let them go—they might need a break!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b-border">
            <AccordionTrigger className="text-lg font-display text-foreground hover:text-primary">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-primary" />
                Feeding Rules
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed pl-8">
              Only feed animals the food provided in our feed bags. Outside food (especially bread, chips, or crackers) can make them very sick. Flat palms when feeding to keep your fingers safe!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b-border">
            <AccordionTrigger className="text-lg font-display text-foreground hover:text-primary">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-secondary-foreground" />
                Supervision Requirements
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed pl-8">
              Children under 12 must be accompanied by an adult at all times. For the safety of both children and animals, please do not lift children over fences or place them on animals (except designated pony rides).
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-none">
            <AccordionTrigger className="text-lg font-display text-foreground hover:text-primary">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-muted-foreground" />
                Sanitization & Hygiene
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed pl-8">
              Hand washing stations are located at every exit of animal zones. Please wash hands thoroughly with soap and water after petting animals and before eating.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default Rules;
