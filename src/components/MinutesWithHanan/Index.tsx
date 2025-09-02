"use client";
import SectionHeader from "../SectionHeader";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlay } from "react-icons/fa";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import { useEffect, useState } from "react";

const SuccessStory = ({ thumbnail, videoUrl }: { thumbnail: string; videoUrl: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:opacity-90 transition">
          <img
            src={thumbnail}
            alt="Success Story"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 rounded-full p-2 animate-pulse ">
            <FaPlay className="text-white size-6" />
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className=" md:max-w-md  p-0 overflow-hidden rounded-2xl   w-[90%]  max-h-[90%] ">
        <div className="relative w-full  h-[90vh] bg-black">
          <video
            src={videoUrl}
            controls
            autoPlay
            className="absolute inset-0 w-full h-full object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function MinutesWithHanan() {
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
  const videos = [
    {
      thumbnail:
        "https://res.cloudinary.com/dok9ldarj/video/upload/so_3/v1756825228/%D8%AD%D9%86%D8%A7%D9%86_%D8%B9%D9%82%D9%84_vddndv.jpg",
      videoUrl:
        "https://res.cloudinary.com/dok9ldarj/video/upload/v1756825228/%D8%AD%D9%86%D8%A7%D9%86_%D8%B9%D9%82%D9%84_vddndv.mp4",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/dok9ldarj/video/upload/so_3/v1756825120/%D8%AD%D9%86%D8%A7%D9%86_%D8%B9%D9%82%D9%84_-_%D8%AF%D9%8A%D9%88%D9%86_bwlfpt.jpg",
      videoUrl:
        "https://res.cloudinary.com/dok9ldarj/video/upload/v1756825120/%D8%AD%D9%86%D8%A7%D9%86_%D8%B9%D9%82%D9%84_-_%D8%AF%D9%8A%D9%88%D9%86_bwlfpt.mp4",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/dok9ldarj/video/upload/so_3/v1756824914/IMG_4947_vypnia.jpg",
      videoUrl:
        "https://res.cloudinary.com/dok9ldarj/video/upload/v1756824914/IMG_4947_vypnia.mp4",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/dok9ldarj/video/upload/so_3/v1756824922/%D8%AD%D9%86%D8%A7%D9%86_%D8%B9%D9%82%D9%84_-_%D9%86%D9%81%D9%82%D8%A9_%D9%86%D9%87%D8%A7%D8%A6%D9%8A_qnupa8.jpg",
      videoUrl:
        "https://res.cloudinary.com/dok9ldarj/video/upload/v1756824922/%D8%AD%D9%86%D8%A7%D9%86_%D8%B9%D9%82%D9%84_-_%D9%86%D9%81%D9%82%D8%A9_%D9%86%D9%87%D8%A7%D8%A6%D9%8A_qnupa8.mp4",
    },
  ];

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
            {videos.map((v, i) => (
              <CarouselItem className="basis-1/3 md:basis-1/5 lg:basis-1/6"
              >
                <div className="" key={i} >
                  <SuccessStory {...v} />
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
