import Image from "next/image";
import GridBG from "./components/GridBG";
import ImageFrame from "./components/ImageFrame";

export default function Home() {
  return (
    // Background
    

    // Contents
    <div className="bg-red-200 w-screen h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">

      {/* First Section */}
      <section className="bg-red-100 w-screen h-4/5 snap-y snap-mandatory overflow-y-scroll scroll-smooth flex items-center justify-center">
        <div className="bg-blue-200 w-screen h-72 flex flex-row md:w-[45rem] md:h-96 px-5 md:px-0 md:gap-2">

          <div className="bg-blue-300 collapse md:w-1/2 md:visible">
            <ImageFrame/>
          </div>

          <div className="bg-blue-400 w-full flex flex-col gap-3">
            <h1 className="text-3xl font-bold leading-tight text-white">
              <span className="opacity-35">Hey,</span> I&#39;m Kylle,<br />
              <span className="opacity-35">A</span> Full-Stack Developer.
            </h1>
            <p className="text-sm opacity-35 text-white">
              21 y/o • Male • Philippines
            </p>
            <p className="text-sm md:text-md text-white">
              Delivering Functional and Modern Solutions.<br />
              Automates with Python to Simplify Workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-200 w-screen h-4/5 flex items-center justify-center">

      </section>

      <section className="bg-blue-300 w-screen h-4/5 flex items-center justify-center">

      </section>
    </div>
  );
}
