import clsx from "clsx";
import { JSX } from "react";

type ChipProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // optional
};

export function Chip({ children, className, as: Tag = "p" }: ChipProps) {
  return (
    <Tag
      className={clsx(
        "inline-flex items-center justify-center rounded-r-full rounded-tl-full",
        "bg-linear-to-r from-blue-800 to-pink-900 ring-1 ring-white/10",
        "px-6 py-2 text-sm font-medium tracking-wide text-white",
        className
      )}
    >
      {children}
    </Tag>
  );
}