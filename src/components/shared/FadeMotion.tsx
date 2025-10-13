import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    duration?: number;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}

const FadeMotion = ({
    children,
    duration = 1,
    delay = 0,
    direction = "none",
    className = "",
}: FadeInProps) => {
    const directions = {
        up: { y: 30 },
        down: { y: -30 },
        left: { x: 30 },
        right: { x: -30 },
        none: {},
    };

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration, delay, ease: "easeOut" }}
            viewport={{ amount: 0.4, once: true }}
        >
            {children}
        </motion.div>
    );
};

export default FadeMotion;
