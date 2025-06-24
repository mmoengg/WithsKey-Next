'use client';

import tags from "@/data/tagList";
import DRINKS_LIST from "@/data/drinksList.js";
import DrinkCard from "@/components/drinks/DrinkCard";

// import { useEffect, useState } from "react";
import { Navigation, Pagination } from 'swiper/modules';
// import { supabase } from '@/utils/supabaseClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




export default function  Drinks() {
    // const [tags, setTags] = useState([]);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     // 컴포넌트가 처음 마운트될 때 한 번만 실행
    //     const fetchTags = async () => {
    //         const { data, error } = await supabase.from('tags').select('*');
    //         if (error) setError(error.message);
    //         else setTags(data);
    //     };
    //     fetchTags();
    // }, []);
    //
    //
    // useEffect(() => {
    //     console.log('tags', tags);
    // }, [tags]);
    //
    // if (error) return <div>에러: {error}</div>;

    return (
      <section className="w-full h-full min-h-screen flex flex-col items-center justify-start bg-gray-200">
        <div className="w-full max-w-[1280px] h-full mt-[60px] py-[40px] px-4 flex flex-col items-center justify-start">
            <div className="w-full h-[130px] mb-8">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={8}
                        slidesPerGroup={2}
                        speed={800}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="w-full h-full"
                    >
                        {tags.map((tag, idx) => (
                            <SwiperSlide
                                key={idx}
                                className="p-3 border-[1px] rounded-full text-center !flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition"
                            >
                                {tag.name}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <input />
            </div>
            <div>
                <button className="min-w-10">검색</button>
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