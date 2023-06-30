import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full bg-gray-100 text-black px-4">
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Aboutme />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
