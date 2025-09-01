import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppButtonProps {
 
  message?: string;
  size?: number;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export default function WhatsBtn({
  
  message = "",
  size = 52,
  position = "bottom-right",
}: FloatingWhatsAppButtonProps) {
  const positions: Record<string, string> = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  const url = `https://wa.me/0097248877222?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-50 ${positions[position]} flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={size * 0.5} />
    </motion.a>
  );
}
