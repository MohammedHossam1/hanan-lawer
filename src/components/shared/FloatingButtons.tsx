import { useGetHomePage } from "@/hooks/fetch-hooks";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

interface FloatingButtonsProps {
  size?: number;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export default function FloatingButtons({
  size = 52,
  position = "bottom-right",
}: FloatingButtonsProps) {
  const positions: Record<string, string> = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };
  const { data } = useGetHomePage("ar");
  const phone = data?.data?.settings.contact.mobile
  const whats = data?.data?.settings.contact.whatsapp
  const whatsappUrl = `https://wa.me/${whats}`;
  const phoneUrl = `tel:${phone}`;

  return (
    <div className={`fixed z-10 flex flex-col gap-3 ${positions[position]}`}>
      {/* Phone Button */}
      <motion.a
        href={phoneUrl}
        className="flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600"
        style={{ width: size, height: size }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPhone size={size * 0.4} className="rotate-90" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
        style={{ width: size, height: size }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={size * 0.5} />
      </motion.a>
    </div>
  );
}
