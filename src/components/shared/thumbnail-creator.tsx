"use client";
import { useRef, useState, useEffect } from "react";

const ThumbnailCreator = ({ path }: { path: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnail, setThumbnail] = useState<string>("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      // نحدد وقت معين ناخد منه اللقطة
      video.currentTime = 1; // 1 ثانية مثلاً
    };

    const handleSeeked = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
      setThumbnail(canvas.toDataURL("image/png"));
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("seeked", handleSeeked);

    return () => {
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [path]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-800 animate-pulse" />
      )}

      {/* الفيديو مستخدم فقط لاستخراج اللقطة */}
      <video ref={videoRef} src={path} style={{ display: "none" }} />
    </div>
  );
};

export default ThumbnailCreator;
