export function Button({ children }) {
  return (
    <button className="bg-transparent rounded-md border-2 border-blue-400 w-40 p-3 text-blue-400 text-lg font-semibold tracking-wider hover:bg-blue-500 hover:text-gray-200 hover:ease-in duration-300">
      {children}
    </button>
  );
}
