import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
  // ✅ Universal embed generator
  export const getEmbedUrl = (videoUrl: string) => {
    if (!videoUrl) return "";

    // 🎬 YouTube (supports both normal & short URLs)
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
        const videoId =
            videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)?.[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
    }

    // 💾 Google Drive
    if (videoUrl.includes("drive.google.com")) {
        const id = videoUrl.match(/[-\w]{25,}/)?.[0];
        return id ? `https://drive.google.com/file/d/${id}/preview` : videoUrl;
    }

    // 🎥 Vimeo
    if (videoUrl.includes("vimeo.com")) {
        const id = videoUrl.match(/vimeo\.com\/(\d+)/)?.[1];
        return id ? `https://player.vimeo.com/video/${id}` : videoUrl;
    }

    // 🖼️ Dropbox
    if (videoUrl.includes("dropbox.com")) {
        return videoUrl.replace("?dl=0", "?raw=1");
    }

    // 🗂️ Direct MP4 links
    if (videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm")) {
        return videoUrl;
    }

    // Default fallback
    return videoUrl;
};