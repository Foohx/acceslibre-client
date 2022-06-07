export function hello(firstName: string): string {
  return `Hello ${firstName}!`;
}

export * from "./types";
export * from "./methods";

(async () => {
  // debug
})();
