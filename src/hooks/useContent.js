import { useState, useEffect } from 'react';
import contentData from '../data/content.json';
import creatorsData from '../data/creators.json';

export function useContent() {
  const [content, setContent] = useState([]);
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay for skeleton loading demonstration
    const timer = setTimeout(() => {
      setContent(contentData);
      setCreators(creatorsData);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const getCreator = (creatorId) => creators.find(c => c.id === creatorId);
  
  const searchContent = (query) => {
    if (!query) return content;
    
    // Normalize string by removing spaces and special characters for a fuzzy match
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedQuery = normalize(query);

    return content.filter(item => {
      const creator = creators.find(c => c.id === item.creatorId);
      const creatorName = creator ? normalize(creator.name) : '';
      
      return normalize(item.title).includes(normalizedQuery) || 
             normalize(item.category).includes(normalizedQuery) ||
             normalize(item.description).includes(normalizedQuery) ||
             creatorName.includes(normalizedQuery);
    });
  };

  const filterByCategory = (category) => {
    if (!category || category === 'All') return content;
    return content.filter(item => item.category === category);
  }

  const getCreatorContent = (creatorId) => content.filter(item => item.creatorId === creatorId);

  return { content, creators, loading, getCreator, searchContent, filterByCategory, getCreatorContent };
}
