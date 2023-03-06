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
      <nav className="flex flex-row justify-center bg-dark max-h-fit p-5">

        <div className="p-5 gap-5">
          <button className="bg-light text-orangina font-bold p-2 hover:bg-primary hover:scale-105 rounded-full shadow-2xl" onClick={handleHomeClick}>
            HOME
          </button>
        </div>

        <div className="p-5 gap-5">
          <button className="bg-light text-orangina font-bold  p-2 hover:bg-primary hover:scale-105 rounded-full shadow-2xl">
            RESUMÈ
          </button>
        </div>

        <div className="p-5 gap-5">
          <button className="bg-light text-orangina  font-bold p-2 hover:bg-primary hover:scale-105 rounded-full shadow-2xl" onClick={handleAboutClick}>
            ABOUT ME
          </button>
        </div>

      </nav>

    </header>
  );
}
