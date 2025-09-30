
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ITestimonial } from "@/types/Index";
import { Quote, Star, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";



const Testimonials = ({data}:{data?:ITestimonial[]}) => {
  const { t } = useTranslation();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);



  useEffect(() => {
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
            {data.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-card rounded-xl p-4 lg:p-8 transition-all duration-300 border border-border h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white">
                        <Quote size={24} />
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rate)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-white"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.description}"
                    </p>

             
                  </div>

                  <div className="flex items-center gap-x-4 mt-4">
                    <div className="p-1 rounded-full bg-muted flex items-center justify-center">
                      <UserCircle className="size-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </h4>
                   
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
