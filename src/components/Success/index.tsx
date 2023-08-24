import { AppointmentData } from "@/utils/type/interface";
import Image from "next/image";
import susscess from "../../../public/succes.svg";
import Button from "@/components/Button";
import { converDate, getHourByDate,formatDate } from "@/utils/constants";

type SuccessProps = {
  summary: AppointmentData | null;
  onClose: () => void;
  closeModalBack: (value: boolean) => void;
  clearState: () => void;
};

export default function Success({
  summary,
  onClose,
  closeModalBack,
  clearState,
}: SuccessProps) {
  const handleClose = () => {
    closeModalBack(false);
    clearState();
  };


  return (
    summary && (
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col w-full items-center">
          <Image src={susscess} alt="suscess" />
          <h1 className="text-lg font-semibold mt-1">Se agendó la cita</h1>
        </div>

        <div className="flex flex-col w-full h-full">
          {/* Paciente */}
          <div className="flex flex-col w-full px-6 py-2.5">
            <h3 className="font-medium text-base">Paciente:</h3>
            <p className="font-normal text-sm"> {summary.patient.name}</p>
          </div>
          {/* Medico */}
          <div className="flex flex-col w-full px-6 py-2.5">
            <h3 className="font-medium text-base">Médico:</h3>
            <p className="font-normal text-sm"> {summary.doctor.name}</p>
          </div>
          {/* Fecha y hora */}
          <div className="flex flex-col w-full px-6 py-2.5">
            <h3 className="font-medium text-base">
              {formatDate(summary.start, "date")}
            </h3>
            <p className="font-normal text-sm">
              {formatDate(summary.start, "hour")}
              </p>
          </div>
          {/* Tipo de Cita */}
          <div className="flex flex-col w-full px-6 py-2.5">
            <h3 className="font-medium text-base">Tipo de Cita</h3>
            <p className="font-normal text-sm"> {summary.serviceType}</p>
          </div>
        </div>

        <div className="p-3">
          <Button variant="secondary" handleClick={handleClose} wFull>
            Cerrar
          </Button>
        </div>
      </div>
    )
  );
}
