import ContentCard from './ContentCard';
import SkeletonCard from './SkeletonCard';

export default function ContentGrid({ content, loading, emptyMessage = "No content found." }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 w-full">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (!content || content.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-stone-500">
        <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <p className="text-lg font-medium text-stone-400">{emptyMessage}</p>
        <p className="text-sm text-stone-500 mt-2">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 w-full">
      {content.map((item, index) => (
        <ContentCard key={item.id} content={item} index={index} />
      ))}
    </div>
  );
}
