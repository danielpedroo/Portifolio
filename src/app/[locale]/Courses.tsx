
'use client'

import { useTranslations } from "next-intl";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from "framer-motion";

type CloudImage = {
  id: string;
  url: string;
}

export default function Courses() {
  const t = useTranslations('course');

  const [img, setImage] = useState<CloudImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();

        if (res.ok) {
          setImage(data);
        } else {
          console.log("Error fetching images:", data.error || "Unknown error");
        }
      } catch (err) {
        console.log("Request error:", err);
      }
    };

    fetchImages();
  }, []);


  return (
    <section id="curse" className="py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold">{t('course_title')}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          {t('course_intro')}
        </p>
      </div>

      <div className="mt-16 mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Navigation]}
        >
          {img.map((c) => (
            <SwiperSlide key={c.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={c.url}
                  width={500}
                  height={500}
                  alt="Certificado"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

