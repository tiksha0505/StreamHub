import { cn } from "../lib/utils";

export default function SkeletonCard({ className }) {
  return (
    <div className={cn("flex flex-col gap-3 w-full animate-pulse", className)}>
      {/* Thumbnail placeholder */}
      <div className="w-full aspect-video bg-stone-800 rounded-xl"></div>
      
      {/* Details placeholder */}
      <div className="flex gap-3 mt-2">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-stone-800 shrink-0"></div>
        
        {/* Text lines placeholder */}
        <div className="flex flex-col gap-2 w-full pt-1">
          <div className="h-4 w-11/12 bg-stone-800 rounded"></div>
          <div className="h-3 w-3/4 bg-stone-800 rounded"></div>
        </div>
      </div>
    </div>
  );
}
