const CATEGORIES = [
    { key: 'tutorial', label: 'Tutorial' },
    { key: 'blended', label: 'Blended' },
    { key: 'bourbon', label: 'Bourbon' },
    { key: 'single', label: 'Single Malt' },
];

export default function ArticleCategoryTabs({ activeCategory, onCategoryClick }) {
    return (
        <ul className="w-full h-[55px] border-b-base flex">
            {CATEGORIES.map((cat, idx) => (
                <li
                    key={cat.key}
                    className={`w-1/5 h-full px-4 fcx cursor-pointer
                                ${idx !== 0 ? 'border-l-base' : ''}
                                ${activeCategory === cat.key ? 'bg-primary w-2/5' : ''}
                              `}
                    onClick={() => onCategoryClick(cat.key)}
                >
                    {cat.label}
                </li>
            ))}
        </ul>
    );
}
