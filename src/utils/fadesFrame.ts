import { Variants } from "framer-motion";

export const fadeUpDelay = (d = 0.3): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: d },
  },
});

export const fadeUpY = ({
  y = 100,
  delay = 0.3,
}: {
  y?: number;
  delay?: number;
} = {}): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

export const fadeX = ({
  x = 100,
  delay = 0.3,
}: {
  x?: number;
  delay?: number;
} = {}): Variants => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

export const fadeOpacity = (delay = 0.3): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});
