import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {

  return (
    <>
      <Header />

      <section className="bg-slate-300 flex flex-col justify-center items-center text-center p-10">
        <div className="bg-slate-200 p-10 flex flex-col items-center rounded-2xl shadow-2xl">
          <div className="flex items-center">

            <img
              src="avatar.svg"
              alt="vercel.svg"
              className="w-28 h-28 mr-4 opacity-80"
            />

            <h1 className="text-4xl text-gray-700">Edwin Johansson</h1>
          </div>
        </div>

        <div className="p-10">
          <h2 className="text-gray-700">
            A Passionate newly graduated developer!
          </h2>
        </div>

        <div className="p-10 w-3/5 bg-slate-200 rounded-2xl shadow-2xl">
          <p className="text-gray-700">
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

      <Footer />
    </>
  );
}
