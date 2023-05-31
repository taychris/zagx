import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const main = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};

export const child = {
  hidden: {
    y: "160%",
    skewY: "6deg",
  },
  show: {
    y: "0%",
    skewY: "0deg",
    transition: {
      duration: 1.2,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};
