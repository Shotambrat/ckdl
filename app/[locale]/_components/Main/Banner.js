import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <section
      style={{
        backgroundImage: `url('/images/main/bg.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        imageRendering: "auto",
      }}
      className="slg:h-screen-90 flex max-slg:flex-col"
    >
      <div className="w-full max-w-[1440px] px-2 mx-auto flex max-slg:flex-col items-center max-slg:pb-8 justify-between">
        <div className="flex-1 h-full flex flex-col justify-center slg:gap-12 py-8">
          <div>
            <h1 className="text-5xl w-full max-w-[600px] max-mdx:text-4xl font-bold text-[#FB6A68]">Сдавайте более 1000 анализов в вашей семейной поликлинике</h1>
            <p className="text-[#989898]">Близко, точно и доступно</p>
          </div>
          <button className="self-start px-12 py-3 text-white font-semibold bg-[#FB6A68] rounded-full max-mdx:px-4">
            Поиск ближайщей поликлиники
          </button>
        </div>
        <div className="relative flex-1 w-full h-full max-slg:w-full max-slg:min-h-[300px]">
          <Image
            src={"/images/main/Mask group.png"}
            fill
            quality={100}
            className="object-contain"
            alt="Main Banner Photo"
          />
        </div>
      </div>
    </section>
  );
}