import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FilterBar from '../components/FilterBar';
import ContentGrid from '../components/ContentGrid';
import { useContent } from '../hooks/useContent';

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  const [activeCategory, setActiveCategory] = useState("All");
  const { content, loading, searchContent, filterByCategory } = useContent();
  const [displayContent, setDisplayContent] = useState([]);

  useEffect(() => {
    if (query) {
      setDisplayContent(searchContent(query));
      setActiveCategory("All"); // Reset category when searching
    } else {
      setDisplayContent(filterByCategory(activeCategory));
    }
  }, [query, activeCategory, content]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 pb-10"
    >
      {!query && <Hero />}
      
      <div id="content-feed" className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
          <h2 className="text-2xl font-bold text-stone-100 tracking-tight">
            {query ? `Search results for "${query}"` : 'Recommended for You'}
          </h2>
          {!query && (
            <FilterBar 
              activeCategory={activeCategory} 
              setActiveCategory={setActiveCategory} 
            />
          )}
        </div>
        
        <ContentGrid content={displayContent} loading={loading} />
      </div>
    </motion.div>
  );
}
