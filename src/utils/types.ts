export type OmitStrict<T, K extends keyof T> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export type KeysOfUnion<T> = T extends T ? keyof T : never;
