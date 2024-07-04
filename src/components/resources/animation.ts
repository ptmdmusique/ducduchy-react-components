import { Variant, Variants } from "framer-motion";

export const headlessTransitionData = {
  fadeInOut: {
    enter: "transition-opacity duration-75",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity duration-150",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  fadeAndSlide: {
    enter: "transition duration-75 transform",
    enterFrom: "opacity-0 translate-y-full",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition duration-150 transform",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-full",
  },
};

export const modalVariantMap = {
  overlay: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  modal: {
    hidden: { y: "-100px", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
} as const satisfies Record<"modal" | "overlay", Variants>;

interface Center {
  x: number | string;
  y: number | string;
}

interface ModalIntuitiveAnimationProps {
  center?: Center;
  initialSize?: string | number;
  finalSize?: string | number;
}

const getPxText = (val: number | string) =>
  typeof val === "number" ? `${val}px` : val;
const getCircleClipPath = (center: Center, size: string | number) =>
  `circle(${getPxText(size)} at ${getPxText(center.x)} ${getPxText(center.y)})`;

export const getModalIntuitiveAnimation = ({
  center = { x: "50vw", y: "50vh" },
  finalSize = "100%",
  initialSize = "0%",
}: ModalIntuitiveAnimationProps): {
  hidden: Variant;
  visible: Variant;
} => ({
  hidden: {
    clipPath: getCircleClipPath(center, initialSize),
    opacity: 0.5,
    transition: { duration: 0.3 },
  },
  visible: {
    clipPath: getCircleClipPath(center, finalSize),
    opacity: 1,
    transition: { duration: 0.3 },
  },
});
