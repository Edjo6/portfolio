import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-dark via-primary to-dark flex flex-col justify-center items-center text-center p-10">
        <div className="bg-light p-10 flex flex-col items-center rounded-2xl shadow-2xl border-2 border-slate-300">
          <div className="flex items-center">
            <img
              src="edwin.jpg"
              alt="vercel.svg"
              className="w-28 h-30 mr-8 rounded-full shadow-2xl border-2 border-dark"
            />

            <h1 className="text-5xl font-bold text-transparent bg-gradient-to-t from-dark to-primary bg-clip-text">
              EDWIN JOHANSSON
            </h1>
          </div>
        </div>

        <div className="p-12">
          <h2 className="text-2xl text-dark font-bold p-3 rounded-full border-4 border-primary shadow-2xl">
            A PASSIONATE DEVELOPER!
          </h2>
        </div>

        <div className="p-10 w-100 bg-light rounded-2xl shadow-2xl">
          <p className="text-gray-700">
            A newly <span className="text-blue-500"> passionate </span>{" "}
            developer is someone who has recently discovered a love for
            programming and is eager to learn and create new things. They are
            enthusiastic about tackling challenging projects and enjoy
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

      <Footer />
    </>
  );
}
