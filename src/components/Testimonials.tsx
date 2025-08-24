"use client";

import * as React from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import SectionHeader from "./SectionHeader";
import { useTranslation } from "react-i18next";
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const Testimonials = () => {
  const { t } = useTranslation();

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const testimonials = t("testimonials.items", { returnObjects: true }) as Testimonial[];

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="testimonials" className="py-10 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title={t("testimonials.sectionHeader.title")}
          subTitle={t("testimonials.sectionHeader.subTitle")}
          desc={t("testimonials.sectionHeader.desc")}
        />

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false, direction: "rtl" }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-card rounded-xl p-4 lg:p-8 transition-all duration-300 border border-border h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white">
                        <Quote size={24} />
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-white"
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

          {/* Dots for mobile */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                title="Select slide"
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
