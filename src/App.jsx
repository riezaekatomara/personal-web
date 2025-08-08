import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Tentang from "./components/Tentang";
import Tools from "./components/Tools";
import Proyek from "./components/Proyek";
import Kontak from "./components/Kontak";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <PreLoader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <div>
          <Navbar />
          <HeroSection />
          <Tentang />
          <Tools />
          <Proyek />
          <Kontak />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
