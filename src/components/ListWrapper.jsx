export function ListWrapper({ children }) {
  return (
    <div className="w-full flex flex-col items-center text-white md:flex-col">
      <ul className="list-none">{children}</ul>
    </div>
  );
}
