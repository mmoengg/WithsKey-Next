import Image from 'next/image';
import Link from "next/link";

export default function DrinkCard({ idx, total, id, image, name, tags, level  }) {
    // 5의 배수(5, 10, 15, ...)는 오른쪽 border를 빼기 위함
    const itemsPerRow = 5; // 한 줄에 몇 개의 아이템이 있는지
    const isMultipleOfFive = (idx + 1) % itemsPerRow === 0;

    const lastRowCount = total % itemsPerRow === 0 ? itemsPerRow : total % itemsPerRow;
    const lastRowStart = total - lastRowCount;

    return (
        <li className="w-1/5 text-surface">
            <Link
                href={`/drinks/${id}`}
                className={`relative w-full min-h-[380px] px-6 py-12 fcx flex-col justify-between cursor-pointer 
                    ${idx < 5 ? "border-t-base" : ''}
                    ${idx < lastRowStart ? "border-b-base" : ''}
                    ${isMultipleOfFive ? "" : 'border-r-base'} 
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
