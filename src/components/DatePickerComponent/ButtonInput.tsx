import React, { forwardRef, Ref } from "react";
import { format } from "date-fns";
import Image from "next/image";
import calendar from "../../../public/calendar.svg";
interface ButtonInputProps {
  value: Date | null;
  onClick: () => void;
  ref: Ref<HTMLButtonElement>; // Cambia RefObject por Ref
}

const ButtonInput: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonInputProps
> = ({ value, onClick }, ref) => (
  <div className="flex gap-2 w-full text-sm font-semibold text-gray/700 bg-white border border-gray/300 rounded-lg shadow-sm form-input focus:border-gray/700 focus:outline-none focus:ring-1 focus:ring-gray/700">
    <Image src={calendar} alt="calendar" />
    <button onClick={onClick} ref={ref} type="button" className="">
      {format(new Date(value || ""), "dd MMMM yyyy")}
    </button>
  </div>
);

ButtonInput.displayName = "ButtonInput";

export default forwardRef(ButtonInput);
