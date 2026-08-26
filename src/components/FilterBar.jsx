import { cn } from '../lib/utils';

const categories = ["All", "Technology", "Design", "Film", "Gaming", "Music", "Education"];

export default function FilterBar({ activeCategory, setActiveCategory }) {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex items-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ease-out",
              activeCategory === category 
                ? "bg-stone-100 text-stone-950 shadow-[0_0_15px_rgba(255,255,255,0.2)] scale-105" 
                : "bg-stone-800/50 text-stone-300 hover:bg-stone-700/80 hover:text-stone-100 border border-stone-700/50"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
