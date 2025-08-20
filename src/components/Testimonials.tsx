"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import SectionHeader from "./SectionHeader";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "رجل أعمال",
      content:
        "حصلت على استشارة قانونية ممتازة ساعدتني في حل قضية معقدة. فريق محترف ومتفهم.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "فاطمة العلي",
      role: "مديرة شركة",
      content:
        "خدمة عملاء رائعة ومتابعة مستمرة. نجحوا في تمثيلي بأفضل شكل ممكن.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "خالد السعد",
      role: "مستثمر",
      content:
        "مكتب محامي موثوق ومحترف. قدموا لي النصح القانوني الصحيح في الوقت المناسب.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "مها عبد الله",
      role: "صاحبة أعمال",
      content:
        "تجربة رائعة مع فريق قانوني محترف يهتم بأدق التفاصيل ويوفر حلول عملية.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop&crop=face",
    },
  ];
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length); // ده بيرجع عدد ال snaps الحقيقي
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);


  return (
    <section className=" bg-background">
      <div className="container mx-auto px-4 lg:px-8">
       <SectionHeader 
        title=" ماذا يقول عملاؤنا عنا"
        subTitle="تقييمات العملاء"
        desc="نفخر بثقة عملائنا وآرائهم الإيجابية حول الخدمات القانونية التي نقدمها "
       />

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false, direction: "rtl" }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 "
              >
                <div className="bg-card rounded-xl p-4 lg:p-8 transition-all duration-300 border border-border h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-accent">
                        <Quote size={24} />
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-accent"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-x-4 mt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
      

          {/* Dots في الموبايل */}
          <div className="flex  justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-muted"
                  }`}
              />
            ))}

          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
