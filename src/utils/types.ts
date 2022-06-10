import { ComponentType } from "react";

export type OmitStrict<T, K extends keyof T> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export type KeysOfUnion<T> = T extends T ? keyof T : never;

export type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;
