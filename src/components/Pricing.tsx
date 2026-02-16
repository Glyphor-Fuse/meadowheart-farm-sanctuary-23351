import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">Admissions</h2>
          <p className="text-muted-foreground text-lg">
            Your ticket purchase supports the care and feeding of our sanctuary animals. 
            Children under 2 enter free!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Child Ticket */}
          <Card className="border-border bg-card/50 shadow-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-primary">Little Farmers</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold text-foreground">$12</span>
                <span className="text-muted-foreground"> / child</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Ages 2 - 12</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {["Full Farm Access", "1 Bag of Animal Feed", "Pony Ride (+$5)", "Sensory Garden Access"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="rounded-full bg-primary/10 p-1 text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">Select Ticket</Button>
            </CardFooter>
          </Card>

          {/* Family Pass - Highlighted */}
          <Card className="border-accent ring-2 ring-accent bg-background shadow-xl relative scale-105 z-10">
            <div className="absolute top-0 right-0 bg-accent text-foreground text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Best Value
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-display text-accent">Family Herd</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold text-foreground">$45</span>
                <span className="text-muted-foreground"> / family</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">2 Adults + 2 Children</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {["Priority Entry", "3 Bags of Animal Feed", "Free Pony Rides (x2)", "Picnic Blanket Rental", "Take-home Polaroid"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground font-medium">
                    <div className="rounded-full bg-accent/20 p-1 text-accent">
                      <Check className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-foreground">Get Family Pass</Button>
            </CardFooter>
          </Card>

          {/* Adult Ticket */}
          <Card className="border-border bg-card/50 shadow-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-primary">Grown Ups</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold text-foreground">$18</span>
                <span className="text-muted-foreground"> / adult</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Ages 13+</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {["Full Farm Access", "Guided History Tour", "Tea/Coffee Voucher", "Relaxation Zones", "Gift Shop Discount"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="rounded-full bg-primary/10 p-1 text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">Select Ticket</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
