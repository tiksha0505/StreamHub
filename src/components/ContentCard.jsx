import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useContent } from '../hooks/useContent';

export default function ContentCard({ content, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { getCreator } = useContent();
  const creator = getCreator(content.creatorId);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative flex flex-col gap-3 w-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 border border-stone-800/50">
        <img 
          src={content.thumbnail} 
          alt={content.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-stone-200 text-xs px-1.5 py-0.5 rounded font-medium backdrop-blur-md border border-white/10 z-10">
          {content.duration}
        </div>

        {/* AI Insight Overlay (Novelty) */}
        <AnimatePresence>
          {isHovered && content.aiInsight && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-md p-4 flex flex-col justify-end z-20"
            >
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="bg-lime-700/10 border border-lime-700/30 rounded-lg p-3 shadow-2xl"
              >
                <div className="flex items-center gap-1.5 mb-1.5 text-lime-600">
                  <Sparkles size={14} className="animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">AI Insight</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed font-medium">
                  {content.aiInsight}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="absolute top-1/2 left-1/2 -transtone-x-1/2 -transtone-y-1/2 w-14 h-14 bg-stone-100/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-stone-100/20 transition-colors"
              >
                 <Play className="text-stone-100 fill-white ml-1" size={24} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Details */}
      <div className="flex gap-3 mt-1 px-1">
        <Link to={`/creator/${creator?.id}`} className="shrink-0 z-30 relative" onClick={(e) => e.stopPropagation()}>
          <img 
            src={creator?.avatar} 
            alt={creator?.name}
            className="w-10 h-10 rounded-full object-cover border border-stone-700 hover:border-lime-700 transition-colors shadow-lg"
          />
        </Link>
        <div className="flex flex-col overflow-hidden">
          <h3 className="text-[15px] font-semibold text-stone-100 leading-tight line-clamp-2 group-hover:text-lime-600 transition-colors">
            {content.title}
          </h3>
          <Link to={`/creator/${creator?.id}`} className="text-sm text-stone-400 hover:text-stone-300 mt-1 truncate transition-colors z-30 relative w-max" onClick={(e) => e.stopPropagation()}>
            {creator?.name}
          </Link>
          <div className="flex items-center text-xs text-stone-500 mt-1 font-medium">
            <span>{content.views} views</span>
            <span className="mx-1.5 text-stone-700">•</span>
            <span>{content.category}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
