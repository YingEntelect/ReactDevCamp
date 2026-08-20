export type ChevronButtonProps = {
  title: string;
  subtitle: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- deliberately permissive to accept any callback shape
  onClick: (...args: any[]) => any;
};
