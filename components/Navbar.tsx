import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex flex-row gap-14 p-4">
        <li className="text-gray-200 hover:scale-110 transition-all duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="text-gray-200 hover:scale-110 transition-all duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="text-gray-200 hover:scale-110 transition-all duration-300">
          <Link href="/resume">Resumé</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
