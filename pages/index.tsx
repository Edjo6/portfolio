import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <nav className="bg-slate-500 max-h-fit p-10">
        <ul className="flex justify-center">
          <li className="inline-block m-4">
            <div className="bg-white rounded-full p-2">
              <AiFillFacebook size={40} />
            </div>
          </li>

          <li className="inline-block m-4">
            <div className="bg-white rounded-full p-2">
              <AiFillInstagram size={40} />
            </div>
          </li>

          <li className="inline-block m-4">
            <div className="bg-white rounded-full p-2">
              <AiFillLinkedin size={40} />
            </div>
          </li>

          <li className="inline-block m-4">
            <div className="bg-white rounded-full p-2">
              <AiFillGithub size={40} />
            </div>
          </li>

        </ul>
      </nav>

      <section className="flex flex-col justify-center text-center">
        <div className="p-10">
          <h1 className="text-4xl">Edwin Johansson</h1>
        </div>

        <div className="p-10">
          <h2>A Passionate newly graduated developer!</h2>
        </div>

        <div className="p-10">
          <p>
            A newly passionate developer is someone who has recently discovered
            a love for programming and is eager to learn and create new things.
            They are enthusiastic about tackling challenging projects and enjoy
            problem-solving. This individual is constantly seeking new ways to
            improve their skills and is always on the lookout for opportunities
            to expand their knowledge. They are excited to collaborate with
            others and share their ideas and expertise. A passionate developer
            is not discouraged by setbacks and sees them as learning
            opportunities. With their dedication and drive, a newly passionate
            developer has the potential to make significant contributions to the
            field of technology.
          </p>
        </div>
      </section>
    </main>
  );
}
