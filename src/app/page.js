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
        <div className="flex items-start gap-5">

          {/* Image Section */}
          <div className="p-[2px] bg-white rounded-lg pointer-events-autu">
            <div className="w-[300px] h-[450px] overflow-hidden rounded-lg bg-neutral-800">
              <Image
                src="/images/profile.png"
                alt="Profile Image"
                width={100}
                height={300}
                quality={100}
                unoptimized
                priority={true}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-white select-none bg-blue-300">
            <h1 className="text-6xl font-bold leading-tight bg-red-200">
            <span className="opacity-35">Hey, </span>I&#39;m Kylle,<br />
              <span className="opacity-35">A </span>Full-Stack Developer.
            </h1>
            <p className="text-md mt-4 opacity-35">
              21 y/o • Male • Philippines
            </p>
            <p className="text-xl mt-4 leading-tight">
              Software developer delivering functional and modern apps.<br />
              Automates with Python to simplify workflow.
            </p>

            {/* Buttons Section */}
            <div className="pointer-events-auto mt-7 flex flex-row gap-4">
              <CopyButton textValue={"K-Developer@zofky.com"}/>

              <DownloadButton textValue={"Download CV"}/>

              <HighlightedButton textValue={"Available For Work"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
