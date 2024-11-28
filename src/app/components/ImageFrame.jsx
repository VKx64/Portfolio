"use client";

import Image from "next/image";

const ImageFrame = () => {
    return (
        <div className="relative w-full h-full rounded-xl overflow-hidden border-white border-2">
            <Image
            src="/images/profile.png"
            alt="portfolio"
            fill
            priority={true}
            unoptimized
            loading="eager"
            quality={100}
            style={{ objectFit: "cover" }}
            className="rounded-xl"
            />
        </div>
    );
};

export default ImageFrame;