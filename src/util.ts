export const isMobilish = () => window.matchMedia('(max-width: 800px)').matches;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
