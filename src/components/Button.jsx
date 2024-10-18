export function Button({ children }) {
  return (
    <button className="bg-transparent rounded-md border-2 border-blue-400 w-40 p-2 text-blue-400 text-base font-medium tracking-wider hover:bg-blue-500 hover:text-gray-200 hover:ease-in duration-300 md:p-3 md:text-lg md:font-semibold">
      {children}
    </button>
  );
}
