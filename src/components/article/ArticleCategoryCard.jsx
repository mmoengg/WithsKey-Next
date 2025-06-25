import Link from "next/link";

export default function ArticleCategoryCard({ image, alt, title, description, href }) {
    return (
        <li className="min-w-1/3  p-4 flex flex-col border border-[var(--border-base)] border-t-transparent border-l-transparent">
            <Link href={href} className="w-full flex flex-col items-center gap-4">
                <img src={image} alt={alt} className="w-20 h-20 mb-4 rounded-full object-cover" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="h-10 text-gray-700 text-center mb-4 text-sm">
                    {description}
                </p>
                <div className="mt-auto px-4 py-2 rounded bg-yellow-900 text-white hover:bg-yellow-700 transition">
                    자세히 보기
                </div>
            </Link>
        </li>
    );
}