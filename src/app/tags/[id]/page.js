'use client'

import Link from "next/link";
import Image from "next/image";

export default function Tags() {
  const historyBack = () => {
    window.history.back();
  };

   return (
    <section className="w-full h-auto min-h-base">
      <div className="w-full h-[500px] md:h-[220px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full p-4 flex flex-col justify-between border-b-base">
          <button onClick={historyBack} className="w-full text-left font-eulyoo underline">
            Go back to tutorial
          </button>
          <h1 className="text-[65px] font-eulyoo font-light break-keep">
            Tags
          </h1>
        </div>
        <div className="w-full md:w-1/2 h-full md:h-full p-4 md:border-l-[1px] border-b-base">
            <div className="w-full h-full relative">연인
            </div>
        </div>
      </div>
      <div className="w-full min-h-[calc(100dvh-500px-55px-280px)] md:min-h-[calc(100dvh-220px-55px)] flex flex-col md:flex-row">
        <div className="w-full min-h-full p-4 md:w-1/2 flex flex-col ">
          <span className="pb-10">Drinks</span>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href={"/drinks/1"} className="w-full flex justify-between">
                <div className="font-light">- Wild Turkey</div>
              </Link>
            </li>
            <li>
              <Link href={"/drinks/1"} className="w-full flex justify-between">
                <div className="font-light">- Wild Turkey</div>
              </Link>
            </li>
            <li>
              <Link href={"/drinks/1"} className="w-full flex justify-between">
                <div className="font-light">- Wild Turkey</div>
              </Link>
            </li>
            <li>
              <Link href={"/drinks/1"} className="w-full flex justify-between">
                <div className="font-light">- Wild Turkey</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full min-h-full p-4 md:w-1/2 md:border-l-[1px] flex flex-col">
          <span className="pb-10">Boards</span>
          <ul>
            <li>와일드터키 추천 좋네요</li>
          </ul>
        </div>
      </div>
    </section>
   )
}