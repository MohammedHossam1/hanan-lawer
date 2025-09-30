"use client";
import { IVideo } from "@/types/Index";
import { useTranslation } from "react-i18next";
import SectionHeader from "../SectionHeader";
import VideoModal from "./VideoModal";



export default function SuccessStories({data}:{data:IVideo[]}) {
  const { t } = useTranslation();

  const sectionHeader = {
    subtitle: t("successStories.sectionHeader.subtitle"),
    title: t("successStories.sectionHeader.title"),
    description: t("successStories.sectionHeader.description"),
  };

  return (
    <section className="container mx-auto px-4 lg:px-8 pt-10">
      {/* Section Header */}
      <SectionHeader
        title={sectionHeader.title}
        subTitle={sectionHeader.subtitle}
        desc={sectionHeader.description}
      />

      <div className="flex items-center justify-center gap-5">
        {data?.map((v, i) => (
          <div className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"  key={i} >
            <VideoModal {...v} />
          </div>
        ))}
      </div>

    </section>
  );
}
