export function ListWrapper({ children }) {
  return (
    <div className="w-full flex flex-col items-center text-white">
      <ul className="list-none">{children}</ul>
    </div>
  );
}
