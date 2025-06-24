'use client';

import TAG_LIST from "@/data/tagList";
import DRINKS_LIST from "@/data/drinksList.js";
import DrinkCard from "@/components/drinks/DrinkCard";

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Drinks() {


  return (
      <section className="w-full h-full min-h-screen flex flex-col items-center justify-start bg-gray-200">
        <div className="w-full max-w-[1280px] h-full mt-[60px] py-[60px] px-4 flex flex-col items-center justify-start">
            <div className="w-full flex gap-6">
                <div className="w-[calc(100%-60px)]">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={10}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {TAG_LIST.map((tag, idx) => (
                            <SwiperSlide key={idx}>{tag.name}</SwiperSlide>
                        ))}
                    </Swiper>
                    <input />
                </div>
                <div>
                    <button className="min-w-10">검색</button>
                </div>
            </div>
            <ul className="w-full flex flex-wrap justify-center gap-8">
                {DRINKS_LIST.map((drink) => (
                    <DrinkCard
                        key={drink.id}
                        image={drink.image}
                        name={drink.name}
                        tags={drink.tags}
                        level={drink.level}
                    />
                ))}
            </ul>
        </div>
      </section>
  )
}