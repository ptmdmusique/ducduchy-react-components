import { useMedia } from "react-use";

const breakpoint = {
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;

/** Breakpoint list
 * https://tailwindcss.com/docs/responsive-design */
export const useMediaQuery = (mediaType: keyof typeof breakpoint) => {
  return useMedia(breakpoint[mediaType]);
};
