"use client";
import Image from "next/image";
import { navegationItems } from "../../utils/navegation-items.jsx";
import { useRouter } from "next/navigation";

export default function Navegation() {
  const router = useRouter();

  return navegationItems.map((item) => (
    <div
      onClick={() => router.push(item.to)}
      key={item.id}
      className="bg-slate-800 w-12 h-12 rounded-md flex items-center justify-center hover:cursor-pointer"
    >
      <Image src={item.ico} alt="calendar" width={24} height={24} />
    </div>
  ));
}
