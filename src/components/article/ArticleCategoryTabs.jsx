const CATEGORIES = [
    { key: 'tutorial', label: 'Tutorial' },
    { key: 'blended', label: 'Blended' },
    { key: 'bourbon', label: 'Bourbon' },
    { key: 'single', label: 'Single Malt' },
];

export default function ArticleCategoryTabs({ activeCategory, onCategoryClick }) {
    return (
        <ul className="w-full border-b-base flex">
            {CATEGORIES.map((cat, idx) => (
                <li
                    key={cat.key}
                    className={`w-1/4 min-h-[55px] px-4 text-sm font-light font-eulyoo fcx cursor-pointer break-all
                                ${idx !== 0 ? 'border-l-base' : ''}
                                ${activeCategory === cat.key ? 'bg-primary w-2/4' : ''}
                              `}
                    onClick={() => onCategoryClick(cat.key)}
                >
                    {cat.label}
                </li>
            ))}
        </ul>
    );
}
