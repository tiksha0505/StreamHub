import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CreatorHeader from '../components/CreatorHeader';
import ContentGrid from '../components/ContentGrid';
import { useContent } from '../hooks/useContent';

export default function CreatorProfile() {
  const { id } = useParams();
  const { getCreator, getCreatorContent, loading } = useContent();
  
  const creator = getCreator(id);
  const creatorContent = getCreatorContent(id);

  if (!loading && !creator) {
    return (
      <div className="flex items-center justify-center h-[60vh] text-stone-400">
        <h2 className="text-xl font-medium">Creator not found</h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 pb-10"
    >
      {!loading && <CreatorHeader creator={creator} />}
      
      <div className="flex flex-col gap-6 mt-4">
        <h2 className="text-2xl font-bold text-stone-100 tracking-tight">
          More from <span className="text-lime-600">{creator?.name}</span>
        </h2>
        
        <ContentGrid content={creatorContent} loading={loading} />
      </div>
    </motion.div>
  );
}
