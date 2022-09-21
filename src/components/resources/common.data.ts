export const statusTypeList = [
  "success",
  "danger",
  "warning",
  "info",
  "neutral",
] as const;
export type StatusType = typeof statusTypeList[number];

export const colorTypeList = [
  "primary",
  "secondary",
  ...statusTypeList,
] as const;
export type ColorType = typeof colorTypeList[number];

export const COMPONENT_PREFIX = "dd"; // Duc-Duchy :)

export const ROOT_ID = "root";

export type BorderType = "fill" | "outline" | "plain";
