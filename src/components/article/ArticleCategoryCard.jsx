import Link from "next/link";

export default function ArticleCategoryCard({ image, alt, title, description, href }) {
    return (
        <li className="w-1/2 bg-white rounded-2xl shadow-lg px-12 py-20 flex flex-col items-center hover:scale-105 transition">
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