"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // show after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 border border-white rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 transition"
    >
      <ChevronUp size={24} />
    </button>
  ) : null;
};

export default ScrollToTopBtn;
