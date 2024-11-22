"use client";

import Image from "next/image";

const ImageFrame = () => {
  return (
    <div className="relative w-[300px] h-[400px] rounded-xl overflow-hidden border border-gray-700">
      <Image
        src="/images/profile.jpg"
        alt="portfolio"
        width={300}
        height={400}
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
  );
};

export default ImageFrame;
