export const clamp = (min: number, max: number, actual: number): number =>
  Math.max(min, Math.min(max, actual));
