import Image from "next/image";
import imgJose from "../../../public/IMG_9946.jpg";

export default function UserDropdown() {
  return (
    <div className="relative overflow-hidden rounded-full w-12 h-12 object-cover hover:cursor-pointer">
      <Image src={imgJose} alt="user" />
    </div>
  );
}
