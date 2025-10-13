"use client";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import placeholder from "../../assets/logo.jpg";
import { FaPlay } from "react-icons/fa";
import { getEmbedUrl } from "@/lib/utils";
const VideoModal = ({ thumbnail, path, url }: { thumbnail?: string; path: string, url?: string }) => {
   

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:opacity-90 transition">
                    {/* صورة الفيديو */}
                    <img
                        src={thumbnail || placeholder}
                        alt="Video Thumbnail"
                        loading="lazy"
                        className={`absolute inset-0 w-full h-full bg-white  ${!thumbnail && 'object-contain p-5 bg-accent'} transition-transform duration-300 group-hover:scale-105`}
                    />

                    <div className="absolute top-3 right-3 rounded-full p-2 animate-pulse z-2 ">
                        <FaPlay className="text-white size-6" />
                    </div>


                </div>
            </DialogTrigger>
            <DialogContent className="  max-w-[900px]  p-0 overflow-hidden rounded-2xl">
                <div className="relative   bg-black">
                    <iframe
                        src={getEmbedUrl(path) || url}
                        allow="autoplay"
                        className="w-full h-[500px] rounded-xl shadow-md"
                    ></iframe>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default VideoModal