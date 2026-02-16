import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Mother of 2",
    text: "The most magical afternoon! My kids haven't stopped talking about Barnaby the goat. It felt so authentic compared to commercial zoos.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Ross",
    role: "Local Teacher",
    text: "A true gem in the valley. The educational aspect is fantastic, and the animals are clearly so well loved and cared for.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily & David",
    role: "Weekend Visitors",
    text: "We drove 2 hours to get here and it was worth every minute. The map made it easy to explore, and the picnic area was spotless.",
    rating: 4,
  },
  {
    id: 4,
    name: "Jessica Chen",
    role: "Photographer",
    text: "As a photographer, the lighting and rustic aesthetic are a dream. Also, the Highland cows are absolute models!",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-foreground drop-shadow-md">Kind Words from Visitors</h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-background/10 border-border/20 backdrop-blur-sm text-foreground">
                    <CardContent className="p-6 flex flex-col h-full min-h-[200px] justify-between">
                      <div>
                        <div className="flex gap-1 mb-4 text-accent">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg font-serif italic opacity-90 mb-6">"{review.text}"</p>
                      </div>
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <p className="text-sm opacity-70">{review.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-background/20 hover:bg-background/40 border-transparent text-foreground" />
            <CarouselNext className="bg-background/20 hover:bg-background/40 border-transparent text-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Reviews;
