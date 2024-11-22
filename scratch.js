import Image from "next/image";
import GridBackground from "./components/GridBackground";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="z-0">
        <GridBackground />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="flex items-start h-full gap-8 bg-red-600">
          {/* Image Section */}
          <div className="p-[2px] bg-white rounded-lg pointer-events-auto">
            <div className="w-[300px] h-[500px] overflow-hidden rounded-lg bg-neutral-800">
              <Image
                src="/images/filter_profile.jpg"
                alt="Profile Image"
                width={100}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-white select-none">
            <h1 className="text-6xl font-bold leading-tight">
              <span className="opacity-45">Hey, </span>I'm Kylle,<br />
              <span className="opacity-45">A </span>Full-Stack Developer.
            </h1>
            <p className="text-lg mt-4 text-gray-300">
              Software developer delivering functional and modern apps.<br />
              Automates with Python to simplify workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
