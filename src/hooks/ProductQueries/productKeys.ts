export const productKeys = {
  all: ["products"] as const,
  detail: (id: number) => ["product", id] as const,
};
