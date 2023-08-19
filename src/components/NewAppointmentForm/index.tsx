import Button from "@/components/Button";
import Image from "next/image";
import open from "../../../public/open.svg";
import Select from "@/components/Select";

export default function NewAppointmentForm() {
  return (
    <div className="flex flex-col w-full p-6 h-full gap-5">
      {/* medico */}
      <div>
        <p className="text-sm font-medium text-gray/700 mb-2">Médico</p>
        <div className=" w-40">
          <Button variant="primary" handleClick={() => {}}>
            <div className="flex gap-2">
              <Image className="" src={open} alt="arrowRight" />
              <p className="font-semibold	text-base">Seleccionar</p>
            </div>
          </Button>
        </div>
      </div>
      {/* Paciente */}
      <div>
        <p className="text-sm font-medium text-gray/700 mb-2">Paciente</p>
        <div className="flex justify-between items-center gap-3 flex-row">
          <div className="basis-1/2">
            <Select />
          </div>
          <div className="flex pt-2 pb-2 pr-4 pl-4 items-center border border-solid border-gray/200 h-11 w-full rounded-lg basis-1/1 ">
            <p className="text-base font-medium"></p>
          </div>
          <div className="basis-1/4">
            <Button variant="primary" handleClick={() => {}}>
              Buscar
            </Button>
          </div>
        </div>
      </div>
      {/* Tipo de atención */}
      <div>
        <p className="text-sm font-medium text-gray/700 mb-2">
          Tipo de atención
        </p>
        <Select />
      </div>
      {/* Fecha y Hora */}
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray/700 mb-2">Fecha</p>
          <div className="flex pt-2 pb-2 pr-4 pl-4 items-center border border-solid border-gray/200 h-11 w-full rounded-lg basis-1/1 ">
            <p className="text-base font-medium"></p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray/700 mb-2">Hora</p>
          <Select />
        </div>
      </div>
    </div>
  );
}
