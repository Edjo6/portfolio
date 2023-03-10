import Socials from "./Socials";

function Footer() {
  return (
    <footer className="bg-gray-800 p-5 text-center gap-5">
      <Socials />

      <div className="m-3 gap-2">
        <p className="text-gray-400 text-sm">© 2023 Edwin Johansson</p>
        <p className="text-gray-500 text-sm text-primary">Made with Next.js</p>
      </div>
    </footer>
  );
}

export default Footer;