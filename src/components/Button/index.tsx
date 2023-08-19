import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "small-secondary" | "danger";
  children: React.ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
  let bgColor = "";
  let textColor = "";
  let padding = "";
  let border = "";
  switch (variant) {
    case "primary":
      bgColor = "bg-white";
      textColor = "gray/700";
      padding = "py-2 px-4";
      border = "border border-gray/300";
      break;
    case "secondary":
      bgColor = "bg-primary/700";
      textColor = "text-white";
      padding = "py-2 px-4";
      border = "border border-primary/600";
      break;
    case "small-secondary":
      bgColor = "bg-primary/50";
      textColor = "text-primary/700";
      padding = "py-2 px-4";
      break;
    case "danger":
      bgColor = "bg-red-500";
      textColor = "text-white";
      padding = "py-2 px-4";
      break;
    default:
      bgColor = "bg-white";
      textColor = "gray/700";
      padding = "py-2 px-4";
      border = "border border-gray/300";
  }

  const buttonClasses = `rounded ${border} h-10 font-semibold border-solid border-1 p-2 ${bgColor} ${textColor} ${padding}`;

  return <button className={buttonClasses}>{children}</button>;
}