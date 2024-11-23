import Image from "next/image";
import GridBackground from "./components/GridBackground";
import CopyButton from "./components/CopyButton";
import DownloadButton from "./components/DownloadButton";
import HighlightedButton from "./components/HighlightedButton";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="z-0">
        <GridBackground />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="flex items-start gap-8">

          {/* Image Section */}
          <div className="p-[2px] bg-white rounded-lg pointer-events-auto">
            <div className="w-[300px] h-[500px] overflow-hidden rounded-lg bg-neutral-800">
              <Image
                src="/images/profile.png"
                alt="Profile Image"
                width={100}
                height={300}
                quality={100}
                unoptimized
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-white select-none">
            <h1 className="text-6xl font-bold leading-tight">
            <span className="opacity-35">Hey, </span>I&#39;m Kylle,<br />
              <span className="opacity-35">A </span>Full-Stack Developer.
            </h1>
            <p className="text-md mt-4 opacity-35">
              21 y/o • Male • Philippines
            </p>
            <p className="text-xl mt-4">
              Software developer delivering functional and modern apps.<br />
              Automates with Python to simplify workflow.
            </p>

            <div className="pointer-events-auto mt-10 flex flex-row gap-4">
              <CopyButton
              textValue={"K-Developer@zofky.com"}/>

              <DownloadButton
              textValue={"Download CV"}/>

              <HighlightedButton
              textValue={"Available For Work"}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
