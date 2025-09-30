"use client";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlay } from "react-icons/fa";
const VideoModal = ({ thumbnail, path }: { thumbnail?: string; path: string }) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative w-full aspect-[9/16] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:opacity-90 transition">
                    {thumbnail ? <img
                        src={thumbnail}
                        alt="Success Story"
                        className="absolute inset-0 w-full h-full object-cover"
                    /> :
                        <video src={path} />
                    }
                    <div className="absolute top-3 right-3 rounded-full p-2 animate-pulse z-2 ">
                        <FaPlay className="text-white size-6" />
                    </div>


                </div>
            </DialogTrigger>
            <DialogContent className="max-w-sm md:max-w-md w-full p-0 overflow-hidden rounded-2xl">
                <div className="relative w-full aspect-[9/16] h-[90vh] bg-black">
                    <video
                        src={path}
                        controls
                        autoPlay
                        className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default VideoModal