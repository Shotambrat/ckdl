
import AnalyzeBanner from "@/app/[locale]/_components/analyze/AnalyzeBanner";
import Instuction from "@/app/[locale]/_components/Instuction";

import Filter from "@/app/[locale]/_components/analyze/Filter";
import SearchComp from "../_components/SearchComp";
import { useLocale } from 'next-intl'

export default function HomePage({ params }) {
  const locale = useLocale()
  return (
    <div>
      <AnalyzeBanner />
      
      <Filter params={params} />
      <div className="w-full bg-white py-52 px-[10px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <Instuction locale={locale} />
        </div>
      </div>
    </div>
  );
}
