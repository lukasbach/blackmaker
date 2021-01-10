export type Falsy = false | undefined | null;
export const removeFalsies = <T>(arr: Array<Falsy | T>): T[] => arr.filter(e => !!e) as T[];
