import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-center bg-dark max-h-fit p-5">

        <div className="p-5 gap-5">
          <Link href="/" className="bg-light text-orangina font-bold p-2 hover:bg-primary hover:scale-105 rounded-full shadow-2xl">
            HOME
          </Link>
        </div>

        <div className="p-5 gap-5">
          <Link href="/resume" className="bg-light text-orangina font-bold  p-2 hover:bg-primary hover:scale-105 rounded-full shadow-2xl">
            RESUMÈ
          </Link>
        </div>

        <div className="p-5 gap-5">
          <Link href="/about" className="bg-light text-orangina  font-bold p-2 hover:bg-primary hover:scale-105 rounded-full shadow-2xl">
            ABOUT ME
          </Link>
        </div>

      </nav>

    </header>
  );
}
