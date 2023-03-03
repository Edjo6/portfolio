export default function Header() {
  return (
    <header>
      <nav className="text-center bg-slate-400 max-h-fit p-5">
        <div className="flex flex-row justify-center p-5 gap-5">
          <button className="bg-white p-2 hover:bg-slate-300 hover:scale-105 rounded-full shadow-2xl">
            Resumé
          </button>
          <button className="bg-white p-2 hover:bg-slate-300 hover:scale-105 rounded-full shadow-2xl">
            About me
          </button>
        </div>
      </nav>
    </header>
  );
}
