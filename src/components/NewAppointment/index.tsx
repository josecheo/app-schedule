import Button from "@/components/Button";
import NewAppointmentForm from "@/components/NewAppointmentForm";

export default function NewAppointment({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col justify-between w-full border border-solid border-gray/200 shadow-sm basis-1/2">
      <div>
        <div className="w-full h-2 bg-primary/700" />
        <div className=" h-20 p-6 border-b border-solid border-gray/200">
          <h1 className="text-lg font-semibold">Nueva cita</h1>
        </div>
      </div>
      <NewAppointmentForm />
      <div>
        <div className=" flex justify-between h-20 p-6 border-t border-solid border-gray/200">
          <Button variant="danger" handleClick={onClose}>
            Cancelar
          </Button>
          <Button variant="secondary" handleClick={onClose}>
            Confirmar
          </Button>
        </div>
      </div>
      {/* <Button variant="primary" handleClick={onClose}>
        Cancelar Cita
      </Button> */}
    </div>
  );
}
