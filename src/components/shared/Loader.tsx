"use client";

import { motion } from "framer-motion";
import loaderImg from "@/assets/logo.jpg";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100dvh-64px)] w-screen bg-background">
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-full border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
        <img
          src={loaderImg}
          alt="Loader"
          className="w-20 h-20 z-10 m-auto top-0 bottom-0 left-0 right-0 absolute rounded-full"
        />
      </div>
    </div>
  );
};

export default Loader;
