import Header from "@/components/Header";
import Footer from "@/components/Footer";

function About() {
  return (
    <>
    <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">About</h1>
        </main>
      </div>
    <Footer />
    </>
  );
}

export default About;
