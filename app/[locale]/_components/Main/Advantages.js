import Image from "next/image";

export default function Advantages() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-6">
      <h2 className="text-4xl font-semibold">Преимущества</h2>
      <div className="w-full grid grid-cols-1 mdx:grid-cols-2 slg:grid-cols-6  gap-4">
        <div className="rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 mdx:col-span-2 slg:col-span-3">
          <div className="w-12 h-12">
            <Image
              src="/images/main/ckdl/Vector.svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="Icon for Advantages"
            />
          </div>
          <h4 className="font-medium text-xl max-mdl:text-lg w-full max-w-[350px]">
            Заборные пункты во всех семейных поликлиниках города Ташкента
          </h4>
        </div>
        <div className="rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 slg:col-span-3">
          <div className="w-12 h-12">
            <Image
              src="/images/main/ckdl/Vector (1).svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="Icon for Advantages"
            />
          </div>
          <h4 className="font-medium text-xl max-mdl:text-lg w-full max-w-[350px]">
            Доступные цены
          </h4>
        </div>
        <div className="rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 slg:col-span-2">
          <div className="w-12 h-12">
            <Image
              src="/images/main/ckdl/Vector (2).svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="Icon for Advantages"
            />
          </div>
          <h4 className="font-medium text-xl max-mdl:text-lg w-full max-w-[350px]">
            Большой ассортимент анализов (1000+)
          </h4>
        </div>
        <div className="rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 slg:col-span-2">
          <div className="w-12 h-12">
            <Image
              src="/images/main/ckdl/Vector (3).svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="Icon for Advantages"
            />
          </div>
          <h4 className="font-medium text-xl max-mdl:text-lg w-full max-w-[350px]">
            Высокая точность результатов
          </h4>
        </div>
        <div className="rounded-3xl p-6 flex flex-col bg-[#FFEFEF] gap-6 col-span-1 slg:col-span-2">
          <div className="w-12 h-12">
            <Image
              src="/images/main/ckdl/Group.svg"
              width={100}
              height={100}
              className="w-full h-full"
              alt="Icon for Advantages"
            />
          </div>
          <h4 className="font-medium text-xl max-mdl:text-lg w-full max-w-[350px]">
            Получение результатов онлайн
          </h4>
        </div>
      </div>
    </div>
  );
}
