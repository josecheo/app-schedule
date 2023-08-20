import { ListOptions } from "@/utils/type/interface";

type SelectProps = {
  listOptions: ListOptions[];
};

export default function Select({ listOptions }: SelectProps) {
  return (
    <div>
      <select
        id="select"
        className="bg-gray/50 border border-gray/300text-gray/900 text-base font-normal rounded-lg
          focus:ring-gray/200 focus:border-gray/200 block p-2 h-11 w-full"
      >
        {listOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
