"use client";
import React, { useState, useEffect, forwardRef } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import ButtonInput from "./ButtonInput";
import Image from "next/image";
import arrowRight from "../../../public/arrow-right.svg";
import arrowLeft from "../../../public/arrow-left.svg";

export default function DatePickerComponent({ handleDateChange, currentDate }) {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex gap-4 justify-between items-center">
      <Image
        className="hover:cursor-pointer"
        src={arrowRight}
        alt="arrowRight"
      />
      <div className="relative">
        <DatePicker
          selected={currentDate}
          onChange={(date) => {
            handleDateChange(date);
            // setStartDate(date);
          }}
          selectsStart
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          popperClassName="react-datepicker-left"
          customInput={<ButtonInput />}
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-lg text-gray-700">
                {format(date, "MMMM yyyy")}
              </span>

              <div className="space-x-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  type="button"
                  className={`
                            ${
                              prevMonthButtonDisabled &&
                              "cursor-not-allowed opacity-50"
                            }
                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                        `}
                >
                  <Image
                    src={arrowRight}
                    className="hover:cursor-pointer"
                    alt="arrowRight"
                  />
                </button>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  type="button"
                  className={`
                            ${
                              nextMonthButtonDisabled &&
                              "cursor-not-allowed opacity-50"
                            }
                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                        `}
                >
                  <Image
                    src={arrowLeft}
                    className="hover:cursor-pointer"
                    alt="arrowLeft"
                  />
                </button>
              </div>
            </div>
          )}
        />
      </div>
      <Image className="hover:cursor-pointer" src={arrowLeft} alt="arrowLeft" />
    </div>
  );
}
