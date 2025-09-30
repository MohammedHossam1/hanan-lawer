"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SectionHeader from "../SectionHeader";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import VideoModal from "../SuccessStories/VideoModal";
import { IVideo } from "@/types/Index";



export default function MinutesWithHanan({ data }: { data: IVideo[] }) {
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
  console.log(data)
  if (!data || data.length < 1) return null
  const sectionHeader = {
    subtitle: t("minutesWithHanan.sectionHeader.subtitle"),
    title: t("minutesWithHanan.sectionHeader.title"),
    description: t("minutesWithHanan.sectionHeader.description"),
  };

  return (
    <section className="container mx-auto px-4 lg:px-8 ">
      {/* Section Header */}
      <SectionHeader
        title={sectionHeader.title}
        subTitle={sectionHeader.subtitle}
        desc={sectionHeader.description}
      />
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: false, direction: "rtl" }}
      >

        <CarouselContent>
          {data?.map((v, i) => (
            <CarouselItem className="basis-1/3 md:basis-1/5 lg:basis-1/6" key={i}
            >
              <div className=""  >
                <VideoModal {...v} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
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
    </section>
  );
}
