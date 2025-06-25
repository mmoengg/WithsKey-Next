import Link from "next/link";

export default function ArticleCategoryCard({ activeCategory, idx, id, label, subtitle, image_url, total, itemsPerRow= 3 }) {
    // 마지막 줄의 시작 인덱스 계산
    const lastRowStart =
        total - (total % itemsPerRow === 0 ? itemsPerRow : total % itemsPerRow);
    const isLastRow = idx >= lastRowStart;

    // 3의 배수인지 아닌지
    // 3, 6, 9, ... 등은 마지막 줄에서 오른쪽에 여백이 생기지 않도록 하기 위함
    const isMultipleOfThree = (idx + 1) % itemsPerRow === 0;

    return (
        <li className={`min-w-1/3 min-h-[calc(50dvh-55px)] p-4 flex flex-col ${isMultipleOfThree ? "" : 'border-r-base'} 
            ${!isLastRow ? "border-b-base" : ""}`}>
            <div className="w-full h-full flex justify-between flex-col gap-12">
                <img
                    src={`/${activeCategory}/${id}`}
                    alt={label}
                    className="w-full h-[55%] object-cover bg-gray-100"
                />
                <div className="flex flex-1 flex-col gap-5">
                    <h3 className="text-3xl font-eulyoo">{label}</h3>
                    <p className="text-sm">{subtitle}</p>
                </div>
                <Link href={`/article/${activeCategory}/${id}`}
                    className="w-full h-[44px] mb-10 border border-surface rounded bg-primary text-[14px] hover:bg-background transition fcc cursor-pointer"
                >자세히 보기</Link>
            </div>
        </li>
    );
}