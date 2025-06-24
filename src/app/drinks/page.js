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
import Link from "next/link";

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
            <div className="relative w-[calc(100%-130px)] h-[110px] mb-8">
               <button type="button" className="custom-prev absolute top-1/2 -left-16 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center z-10 hover:bg-yellow-300 transition cursor-pointer">
                <span className="material-icons">{'<'}</span>
                </button>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={8}
                    slidesPerGroup={2}
                    speed={800}
                    style={{
                        "--swiper-navigation-color": "#1E0201",
                    }}
                    // navigation
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev'
                    }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="w-full h-full"
                >
                    {tags.map((tag, idx) => (
                        <SwiperSlide key={idx}
                                     className="cursor-pointern">
                            <Link key={idx} href={`/tags/${tag.id}`} className="w-full h-full p-3 border-[1px] rounded-full  flex items-center justify-center hover:bg-yellow-300 transition">
                                {tag.name}
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button type="button" className="custom-next absolute top-1/2 -right-16 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center z-10 hover:bg-yellow-300 transition cursor-pointer">
                    <span className="material-icons">{'>'}</span>
                </button>
            </div>
            <div className="w-full h-full flex justify-between items-center gap-6 mb-8">
                <input placeholder="검색어를 입력해 주세요" />
                <button type="button" className="min-w-10 h-full rounded-md text-white bg-[#1E0201] px-[24px] py-[18px] text-nowrap cursor-pointer">검색</button>
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