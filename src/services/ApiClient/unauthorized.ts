export type UnauthorizedHandler = () => void;

let handler: UnauthorizedHandler | null = null;
let alreadyHandling = false;

export const setUnauthorizedHandler = (
  next: UnauthorizedHandler | null,
): void => {
  handler = next;
};

export const notifyUnauthorized = (): void => {
  if (alreadyHandling) return;

  alreadyHandling = true;
  handler?.();
};

export const resetUnauthorizedGuard = (): void => {
  alreadyHandling = false;
};
