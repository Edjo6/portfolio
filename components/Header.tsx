import { useRouter } from "next/router";

export default function Header() {

  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleAboutClick = () => {
    router.push("/about");
  };


  return (
    <header>
      <nav className="flex flex-row justify-center bg-slate-400 max-h-fit p-5">

        <div className="p-5 gap-5">
          <button className="bg-white p-2 hover:bg-slate-300 hover:scale-105 rounded-full shadow-2xl" onClick={handleHomeClick}>
            Home
          </button>
        </div>

        <div className="p-5 gap-5">
          <button className="bg-white p-2 hover:bg-slate-300 hover:scale-105 rounded-full shadow-2xl">
            Resumé
          </button>
        </div>

        <div className="p-5 gap-5">
          <button className="bg-white p-2 hover:bg-slate-300 hover:scale-105 rounded-full shadow-2xl" onClick={handleAboutClick}>
            About me
          </button>
        </div>

      </nav>

    </header>
  );
}
