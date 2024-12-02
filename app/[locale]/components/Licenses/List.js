"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";


export default function List() {

  const [licenses, setLicenses] = useState(null);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const data = await client.fetch(`
          *[_type == 'license' && isActive == true]{
            title,
            description,
            photo{
              asset->{
                url
              }
            }
          }
        `);
        setLicenses(data);
      } catch (error) {
        console.error("Ошибка при загрузке лицензий:", error);
      }
    };
    fetchLicenses();
  }, []);

 

  if (!licenses) return <p>Загрузка...</p>;

  return (
    <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
      {licenses.map((license, i) => (
        <div key={i} className="relative border-4 border-neutral-300">
          <Image
            src={license.photo?.asset?.url || "/placeholder.jpg"}
            width={500}
            height={500}
            alt={`License Image ${i}`}
            style={{border: '5px solid #E4E4E4'}}
            className="w-full h-auto object-cover"
          />
         
        </div>
      ))}
    </div>
  );
}
