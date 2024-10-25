import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url('/images/main/bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        imageRendering: "auto",
      }}
      className="lg:h-screen-90"
    >
      <div className="w-full max-w-[1440px] px-2 mx-auto flex max-slg:flex-col пфз-8 items-center justify-between">
        <div className="flex-1 border h-full"></div>
        <div className="relative flex-1 w-full border border-black h-full">
          <div className="w-full h-full">
            <Image
              src={"/images/main/Mask group.png"}
              fill
              quality={100}
              className="object-cover w-full h-full"
              alt="Main Banner Photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
