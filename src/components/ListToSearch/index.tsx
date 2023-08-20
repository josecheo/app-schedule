import Input from "@/components/Input";
import search from "../../../public/search.svg";
import Image from "next/image";
import { Medic } from "@/utils/type/interface";
import no_user_img from "../../../public/no_user_img.png";

type ListToSearchProps = {
  listOfMedics: Medic[];
  handleSelectDoctor: (e: any) => void;
  type: "medic" | "patient";
};

interface GroupedMedics {
  [letter: string]: Medic[];
}

export default function ListToSearch({
  listOfMedics,
  handleSelectDoctor,
  type,
}: ListToSearchProps) {
  const groupedMedics = listOfMedics.reduce(
    (groups: GroupedMedics, medic: Medic) => {
      const firstLetter = medic.name.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(medic);
      return groups;
    },
    {}
  );

  return (
    <div className="flex flex-col mt-4 h-[570px]">
      {type === "medic" && (
        <div className="p-6">
          <Input
            placeholder="Buscar..."
            value={""}
            onChange={() => {}}
            icon={search}
          />
        </div>
      )}
      <div className="flex flex-col overflow-y-auto">
        {Object.keys(groupedMedics).map((letter) => (
          <div key={letter}>
            <div className="flex w-full bg-gray/50 h-10 items-center p-6 border-b border-t border-solid border-gray/200">
              <h2 className="text-xs font-medium">{letter}</h2>
            </div>
            <ul>
              {groupedMedics[letter].map((medic, index) => (
                <li
                  key={index}
                  className="flex items-center h-72"
                  onClick={() => handleSelectDoctor(medic)}
                >
                  <div className="flex w-full items-center gap-4 h-72 hover:bg-gray/10 cursor-pointer p-6 border-b border-solid border-gray/200 ">
                    <div className="relative overflow-hidden rounded-full w-10 h-10 object-cover">
                      <Image src={medic.image || no_user_img} alt="doctor" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{medic.name}</span>
                      <span className="text-sm font-normal text-gray/500">
                        {medic.specialty}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
