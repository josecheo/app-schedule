"use client";
import Button from "@/components/Button";
import HandleDoctor from "@/components/HandleDoctor";
import DatePickerComponent from "@/components/DatePickerComponent";

export default function Scheduler() {
  return (
    <div className="flex flex-col w-full mt-8 min-h-48 rounded-lg border border-solid border-gray/200 shadow-sm">
      <div className="flex flex-wrap gap-3 justify-between  p-4 border-b border-solid border-gray/200">
        <div className="flex gap-2 items-center">
          <Button variant="primary" handleClick={() => {}}>
            Hoy
          </Button>
          <div className="w-px h-6 bg-gray/200" />
          <DatePickerComponent />
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-base font-medium "> Agenda del médico:</p>
          <HandleDoctor />
          {/* <Button variant="primary" handleClick={() => {}}>Cambiar</Button> */}
        </div>
      </div>

      <div className="flex flex-col items-center p-5 justify-center w-full h-full">
        <h3 className="text-base font-semibold	 text-gray/900">
          No se encontraron registros
        </h3>
        <p className=" text-sm font-normal text-gray/600 max-w-xs text-center mt-1">
          El médico seleccionado no tiene ninguna cita el día de hoy.
        </p>
      </div>
    </div>
  );
}
