import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatName = (name: string) => {
  return name
    .trim()
    .split(/\s+/)
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
    .join(" ");
};

export const getBgColor = (permission: string) => {
  switch (permission) {
    case "write":
      return "bg-blue-200 text-blue-800";
    case "delete":
      return "bg-red-200 text-red-800";
    default:
      return "bg-green-200 text-green-800";
  }
};
