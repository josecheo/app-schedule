import Image from "next/image";
import doctorimg from "../../../public/medico.jpg";
export default function HandleDoctor() {
  return (
    <div className="flex pt-2  pb-2 pr-4 pl-4 gap-2 items-center w-72 border border-solid border-gray/200 h-11 rounded-lg">
      <div className="relative overflow-hidden rounded-full w-6 h-6 object-cover hover:cursor-pointer">
        <Image src={doctorimg} alt="doctor" />
      </div>
      <p className="text-base font-medium">Juan Martin</p>
    </div>
  );
}
