import Image from "next/image";
import { useState } from "react";

interface InputProps {
  type?: "date" | "text" | "number" | "email" | "password";
  onChange: (newValue: string) => void;
  placeholder: string;
  value?: string;
  name?: string;
  id?: string;
  error?: string;
  icon: string;
  validateInput?: string;
}
export default function Input({
  type,
  onChange,
  placeholder,
  name,
  id,
  error,
  value,
  icon,
  validateInput,
}: InputProps) {
  const formatInputValue = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length > 0) {
      let formattedValue = numericValue.substr(0, 2);
      if (numericValue.length > 2) {
        formattedValue += "/" + numericValue.substr(2, 2);
      }
      if (numericValue.length > 4) {
        formattedValue += "/" + numericValue.substr(4, 4);
      }
      return formattedValue;
    }

    return "";
  };

  const handleInputChange = (event: {
    target: { value: string; type: string };
  }) => {
    const { value } = event.target;

    if (validateInput === "date") {
      const formattedValue = formatInputValue(value);
      onChange(formattedValue);
    }else {
      onChange(value);
    }
  };

  return (
    <div className="flex gap-4 pt-2 pb-2 pr-4 pl-4 items-center border transition duration-300 ease-in-out h-11 w-full rounded-lg basis-1/1 focus-within:border-gray/900">
      {icon && <Image className="" src={icon} alt="calendar" />}
      <input
        id={id}
        name={name}
        onChange={handleInputChange}
        type={type}
        value={value}
        className="text-base font-medium border-0 outline-none focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
