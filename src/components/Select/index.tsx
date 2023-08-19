export default function Select() {
  return (
    <div>
      <select
        id="select"
        className="bg-gray/50 border border-gray/300text-gray/900 text-base font-normal rounded-lg
          focus:ring-gray/200 focus:border-gray/200 block p-2 h-11 w-full"
      >
        <option selected>Nombre</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
}
