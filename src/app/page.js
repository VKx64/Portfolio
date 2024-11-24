import GridBackground from "./components/GridBackground";
import HighlightedButton from "./components/HighlightedButton";
import ImageFrame from "./components/ImageFrame";
import CustomButton from "./components/CustomButton";
import MainSection from "./pages/MainSection";

export default function Home() {
  return (
    
    // Main Div
    <div className="relative w-full h-screen">

      <div className="absolute inset-0 z-0">
        <GridBackground />
      </div>

      <section className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <MainSection />
      </section>
    
    </div>
  );
}
