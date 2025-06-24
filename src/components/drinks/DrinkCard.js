import Image from 'next/image';
import Link from "next/link";

export default function DrinkCard({ id, image, name, tags, level  }) {
    console.log('id', id);
    return (
        <li className="min-w-[calc(100%/4-25px)]">
            <Link href={`/drinks/${id}`} className="w-full p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center relative min-h-[380px]">
                {/* 찜(하트) 아이콘 */}
                <button className="absolute top-4 left-4 text-xl cursor-pointer">❤️</button>
                {/* 태그 */}
                <div className="absolute top-4 right-4 flex gap-2">
                    {tags.map((tag) => (
                        <button key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs cursor-pointer">{tag}</button>
                    ))}
                </div>
                {/* 이미지 */}
                <Image
                    src="/assets/images/whisky-blended.jpg"
                    alt="Blended"
                    width={200}
                    height={200}
                    className="object-contain mb-4" // Tailwind 등 스타일
                />
                {/* 이름 */}
                <h3 className="text-lg font-bold text-center mb-2">{name}</h3>
                {/* 레벨/설명 */}
                <span className="text-gray-500 text-sm">{level}</span>
            </Link>
        </li>
    );
}
