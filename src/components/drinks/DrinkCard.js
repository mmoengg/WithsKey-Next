import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from "react";

// 화면 너비에 따라 한 줄에 표시할 아이템 수를 결정하는 함수
function getItemsPerRow(width) {
    if (width < 768) return 1;
    if (width < 1024) return 3;
    return 5;
}

export default function DrinkCard({ idx, total, id, image, name, tags, level  }) {
    const [itemsPerRow, setItemsPerRow] = useState(0);

    useEffect(() => {
        setItemsPerRow(getItemsPerRow(window.innerWidth));
        function handleResize() {
            setItemsPerRow(getItemsPerRow(window.innerWidth));
        }

        window.addEventListener("resize", handleResize);
        // 컴포넌트 언마운트 시 이벤트 제거
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 마지막 줄의 시작 인덱스 계산
    const lastRowStart = total - (total % itemsPerRow === 0 ? itemsPerRow : total % itemsPerRow);
    const isLastRow = idx >= lastRowStart;
    const isFirstRow = idx < itemsPerRow;

    return (
        <li className={`w-full md:w-1/3 lg:w-1/5 text-surface
            border-b-base border-r-base nth-child-5:border-0 
            ${isFirstRow ? "border-t-base" : ''}
            ${isLastRow ? "last-row" : ""}
        `}>
            <Link
                href={`/drinks/${id}`}
                className={`relative w-full min-h-[380px] px-6 py-12 fcx flex-col justify-between cursor-pointer 
              
                `}
            >
                {/* 이미지 */}
                <Image
                    src={image || "/assets/images/whisky-blended.jpg"}
                    alt={name}
                    width={200}
                    height={200}
                    className="object-contain mb-4 flex-1"
                />
                {/* 이름 */}
                <h3 className="mb-4 text-surface text-3xl font-light font-eulyoo">{name}</h3>
                {/* 레벨/설명 */}
                <span className="text-sm font-light">{level}</span>
            </Link>
        </li>
    );
}
