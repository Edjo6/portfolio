import { FaUntappd } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Footer() {

  return (
    <footer className="bg-gradient-to-b from-dark to-primary p-5 text-center gap-5">

      <h1 className="text-xl text-orangina mb-2">SOCIALS</h1>

        <ul className="flex justify-center gap-5">
          <li className="inline-block">
            <div className="bg-light text-dark hover:bg-primary hover:scale-110 hover:outline outline-slate-500 rounded-full p-3 shadow-2xl">
              <FaUntappd size={40} />
            </div>
          </li>

          <li className="inline-block">
            <div className="bg-light text-dark hover:bg-primary hover:scale-110 hover:outline outline-slate-500 rounded-full p-3 shadow-2xl">
              <AiFillInstagram size={40} />
            </div>
          </li>

          <li className="inline-block">
            <div className="bg-light text-dark hover:bg-primary hover:scale-110 hover:outline outline-slate-500 rounded-full p-3 shadow-2xl">
              <AiFillLinkedin size={40} />
            </div>
          </li>

          <li className="inline-block">
            <div className="bg-light text-dark hover:bg-primary hover:scale-110 hover:outline outline-slate-500 rounded-full p-3 shadow-2xl">
              <AiFillGithub size={40} />
            </div>
          </li>
          <li>
            <div className="bg-light text-dark hover:bg-primary hover:scale-110 hover:outline outline-slate-500 rounded-full p-3 shadow-2xl">
              <AiFillMail size={40} />
            </div>
          
          </li>
        </ul>


      <div className="m-3 gap-2">
        <p className="text-sm">© 2023 Edwin Johansson</p>
        <p className="text-sm text-gray-200">Made with Next.js</p>
      </div>
    </footer>
  );
}
