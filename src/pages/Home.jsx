import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import VideoSection from "../components/VideoSection";
import PhotoCarousel from "../components/PhotoCarousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Services />

        <About />

        <VideoSection />

        <PhotoCarousel />

        <Contact />
      </main>

      <Footer />
    </>
  );
}