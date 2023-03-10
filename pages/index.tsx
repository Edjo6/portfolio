import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextSection from "@/components/TextSection";

export default function Home() {
  return (
    <>
    
      <Header />

        <main className="bg-gray-400 p-5">
          <h1 className="text-6xl text-center">Hello World</h1>
          <TextSection text="Bajs" />
        </main>
      <Footer />
    </>
  );
}
