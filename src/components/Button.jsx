export function Button({ children }) {
  return (
    <button className="bg-transparent rounded-md border-2 border-blue-400 p-3 text-blue-400 text-lg font-semibold">
      {children}
    </button>
  );
}
