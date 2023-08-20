"use client";
import { useState } from "react";
import Image from "next/image";
import doctorimg from "../../../public/medico.jpg";
import Button from "@/components/Button";
import open from "../../../public/open.svg";
import ListToSearch from "@/components/ListToSearch";
import Modal from "@/components/Modal";
import { Medic } from "@/utils/type/interface";
import Select from "@/components/Select";
import Input from "@/components/Input";
import { PATIENT_LIST } from "@/utils/constants";
import no_user_img from "../../../public/no_user_img.png";

const listOfMedics = [
  {
    name: "Antonio Armas",
    specialty: "Cardiólogo",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
  {
    name: "Antonio Armas",
    specialty: "Medico General",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
  {
    name: "Amadeo Perez",
    specialty: "Oncólogo",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
  {
    name: "Bristin Watsonz",
    specialty: "Cirujano",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
  {
    name: "Cameron Williamson",
    specialty: "Cardiólogo",
    image: "",
    typeDocument: "DNI",
    document: "12345678",
  },
];

const DEFATUL_MEDIC = {
  name: "",
  specialty: "",
  image: "",
  typeDocument: "",
  document: "",
};

export default function HandlePatient() {
  const [isSelectPatient, setIsSelectPatient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorSelected, setDoctorSelected] = useState<Medic>(DEFATUL_MEDIC);
  const [patient, setPatient] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectDoctor = (medic: Medic) => {
    setIsSelectPatient(true);
    setIsModalOpen(false);
    setDoctorSelected(medic);
  };

  const handlePatientChange = (newValue: string) => {
    setPatient(newValue);
  };

  return (
    <>
      <p className="text-sm font-medium text-gray/700">Paciente</p>
      {isSelectPatient ? (
        <div className="flex gap-2 items-center">
          <div className="flex pt-2  pb-2 pr-4 pl-4 gap-2 items-center w-full border border-solid border-gray/200 h-[72px] rounded-lg">
            <div className="relative overflow-hidden rounded-full w-6 h-6 object-cover hover:cursor-pointer">
              <Image src={doctorSelected.image || no_user_img} alt="doctor" />
            </div>
            <div className="flex flex-col">
              <p className="text-base font-medium">{doctorSelected.name}</p>
              <p className="text-sm font-normal">
                {doctorSelected.typeDocument} {doctorSelected.document}
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            handleClick={() => setIsSelectPatient(false)}
          >
            Cambiar
          </Button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center gap-3 flex-row">
            <div className="basis-1/2">
              <Select listOptions={PATIENT_LIST} />
            </div>
            <Input
              placeholder=""
              value={patient}
              onChange={handlePatientChange}
              icon={""}
              type="text"
            />
            <div className="basis-1/4">
              <Button variant="primary" handleClick={openModal}>
                Buscar
              </Button>
            </div>
          </div>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Selecciona un paciente"
      >
        <ListToSearch
          type="patient"
          listOfMedics={listOfMedics}
          handleSelectDoctor={handleSelectDoctor}
        />
      </Modal>
    </>
  );
}
