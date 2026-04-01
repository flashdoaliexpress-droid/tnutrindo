import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Results from '../components/Results';
import Education from '../components/Education';
import CtaFinal from '../components/CtaFinal';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <About />
        <Services />
        <Results />
        <Education />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
