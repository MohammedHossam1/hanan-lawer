"use client";
import SectionHeader from "../SectionHeader";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlay } from "react-icons/fa";

const SuccessStory = ({ thumbnail, videoUrl }: { thumbnail: string; videoUrl: string }) => {
  return (
    <Dialog>
      {/* الصورة كبوابة لفتح الفيديو */}
      <DialogTrigger asChild>
        <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:opacity-90 transition">
          <img
            src={thumbnail}
            alt="Success Story"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 rounded-full p-2 animate-pulse ">
            <FaPlay className="text-white size-6"/>
          </div>
        </div>
      </DialogTrigger>

      {/* المحتوى (الفيديو) */}
      <DialogContent className="max-w-sm md:max-w-md w-full p-0 overflow-hidden rounded-2xl">
        <div className="relative w-full aspect-[9/16] h-[90vh] bg-black">
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

export default function SuccessStories() {
  const { t } = useTranslation();
  const videos = [
    {
      thumbnail:
        "https://res.cloudinary.com/dok9ldarj/video/upload/so_3/v1756394344/WhatsApp_Video_2025-08-28_at_15.56.04_2c7ca5da_knvkuh.jpg",
      videoUrl:
        "https://res.cloudinary.com/dok9ldarj/video/upload/v1756394344/WhatsApp_Video_2025-08-28_at_15.56.04_2c7ca5da_knvkuh.mp4",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/dok9ldarj/video/upload/so_3/v1756394650/WhatsApp_Video_2025-08-28_at_15.54.45_a1abb4b7_bszlnn.jpg",
      videoUrl:
        "https://res.cloudinary.com/dok9ldarj/video/upload/v1756394650/WhatsApp_Video_2025-08-28_at_15.54.45_a1abb4b7_bszlnn.mp4",
    },
  ];

  const sectionHeader = {
    subtitle: t("successStories.sectionHeader.subtitle"),
    title: t("successStories.sectionHeader.title"),
    description: t("successStories.sectionHeader.description"),
  };

  return (
    <section className="container mx-auto px-4 lg:px-8">
      {/* Section Header */}
      <SectionHeader
        title={sectionHeader.title}
        subTitle={sectionHeader.subtitle}
        desc={sectionHeader.description}
      />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {videos.map((v, i) => (
          <SuccessStory key={i} {...v} />
        ))}
      </div>
    </section>
  );
}
