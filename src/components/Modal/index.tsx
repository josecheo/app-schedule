import Button from "@/components/Button";
import Image from "next/image";
import close from "../../../public/close.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  type?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  type,
}: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-10 flex justify-center items-center w-full bg-gray/overlay ${
        isOpen ? "" : "hidden"
      }`}
    >
      {type === "success" ? (
        <div className="flex flex-col bg-white rounded-lg shadow-md w-[400px] h-[472px] ">
          <div className="flex justify-end p-6 items-center h-4">
            <Image
              className="hover:cursor-pointer"
              src={close}
              width={12}
              height={12}
              alt="arrowRight"
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      ) : (
        <div className="flex flex-col bg-white rounded-lg shadow-md w-720 h-672 ">
          <div className="flex justify-between p-6 items-center border-b border-solid border-gray/200 h-18">
            <h1 className="text-xl font-semibold">{title}</h1>
            <Button variant="primary" handleClick={onClose}>
              <div className="flex items-center justify-center gap-4">
                <Image className="" src={close} alt="arrowRight" />
                <p className="text-xs font-medium	">Cerrar</p>
              </div>
            </Button>
          </div>
          {children}
        </div>
      )}
    </div>
  );
}
