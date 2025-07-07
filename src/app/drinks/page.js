'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import tags from "@/data/tagList";
import DRINKS_LIST from "@/data/drinksList.js";
import DrinkCard from "@/components/drinks/DrinkCard";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import { supabase } from '@/utils/supabaseClient';
import Link from "next/link";

// 화면 너비에 따라 한 줄에 표시할 아이템 수를 결정하는 함수
function getItemsPerRow(width) {
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
}

export default function  Drinks() {
    const [itemsPerRow, setItemsPerRow] = useState(0);

    useEffect(() => {
        function handleResize() {
            setItemsPerRow(getItemsPerRow(window.innerWidth));
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        // 컴포넌트 언마운트 시 이벤트 제거
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 태그 출력 개수
    const tagsToShow = itemsPerRow === 1 ? 3 : itemsPerRow === 2 ? 6 : 12;

    ///// supabase로부터 태그 데이터 가져오기
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
        <section className="w-full h-full min-h-screen flex flex-col">
            {/* 태그 리스트 */}
            <div className="w-full h-[55px] border-b-base flex items-center justify-start pl-[67px]">
                <div className="relative w-[calc(100%-(67px*2))] h-full">
                    <button type="button" className="custom-prev absolute top-1/2 -left-[66px] -translate-y-1/2 w-[67px] h-full border-r-base z-10 hover:bg-primary transition duration-200 cursor-pointer">
                        <span className="material-icons">{'<'}</span>
                    </button>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={tagsToShow}
                        slidesPerGroup={2}
                        speed={800}
                        style={{
                            "--swiper-navigation-color": "#1E0201",
                        }}
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
                            <SwiperSlide key={idx} className="cursor-pointer">
                                <Link key={idx} href={`/tags/${tag.id}`} className="w-full h-full p-3 border-l-base text-sm text-surface font-eulyoo fcc text-center hover:bg-primary transition duration-200">
                                    #{tag.name}
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button type="button" className="custom-next border-l-base absolute top-1/2 -right-[67px] -translate-y-1/2 w-[67px] h-full z-10 hover:bg-primary transition duration-200 cursor-pointer">
                        <span className="material-icons">{'>'}</span>
                    </button>
                    <button type="button" className="border-l-base absolute top-1/2 -right-[134px] -translate-y-1/2 w-[67px] h-full z-10 hover:bg-primary transition duration-200 cursor-pointer">
                        <span className="material-icons">{'O'}</span>
                    </button>
                </div>
                {/*<div className="w-full h-full flex justify-between items-center gap-6 mb-8">*/}
                {/*    <input placeholder="검색어를 입력해 주세요" />*/}
                {/*    <button type="button" className="min-w-10 h-full rounded-md text-white bg-[#1E0201] px-[32px] py-[18px] text-nowrap cursor-pointer">검색</button>*/}
                {/*</div>*/}
            </div>

            <h3 className="pl-3 pt-[150px] text-surface font-eulyoo text-4xl text-left mb-10 font-light tracking-tighter leading-12">
                다양한 위스키를<br/>
                만나 보세요
            </h3>
            <ul className="w-full flex flex-wrap">
                {DRINKS_LIST.map((drink, idx) => (
                    <DrinkCard
                        key={drink.id}
                        idx={idx}
                        total={DRINKS_LIST.length}
                        id={drink.id}
                        image={drink.image}
                        name={drink.name}
                        tags={drink.tags}
                        level={drink.level}
                    />
                ))}
            </ul>
        </section>
  )
}