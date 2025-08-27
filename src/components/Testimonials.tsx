"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { testimonialsItems } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, UserCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "./SectionHeader";

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string; 
  videoUrl?: string; 
}

const Testimonials = () => {
  const { t } = useTranslation();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); 
  const testimonials = testimonialsItems;



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
            {testimonials.map((testimonial, index) => (
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
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-accent text-white"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {testimonial.videoUrl && (
                      <div className="relative group max-lg:w-1/2 " onClick={() => setSelectedVideo(testimonial.videoUrl)}>

                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="cursor-pointer rounded-lg w-full aspect-video object-cover"

                        />
                        <div className=" !flex absolute bg-black/10 group-hover:bg-black/50 transotion-all duration-300 cursor-pointer rounded-lg inset-0 items-center justify-center">
                          {/* play icon */}
                          <div className=" group-hover:opacity-100 opacity-30 transotion-all duration-300 top-10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-12 h-12 text-white"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-x-4 mt-4">
                    <div className="p-1 rounded-full bg-muted flex items-center justify-center">
                      <UserCircle className="size-8 text-muted-foreground" />
                    </div>
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

        {/* Modal للفيديو */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}

            >
              <motion.div
                className="relative w-full max-w-3xl p-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                

              >
                <button

                  className="absolute top-2 right-2 text-white text-2xl"
                  onClick={() => setSelectedVideo(null)}
                >
                  <X />
                </button>
                <div className="aspect-video">
                  <iframe
                    src={selectedVideo}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
