import { motion } from 'framer-motion';
import { Users, Activity, Sparkles } from 'lucide-react';

export default function CreatorHeader({ creator }) {
  if (!creator) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full rounded-[2rem] overflow-hidden my-6 md:my-8 bg-stone-900 border border-stone-800 shadow-2xl shadow-black/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-b from-lime-700/10 to-transparent rounded-full blur-[100px]"
        />
      </div>
      
      {/* Centerpiece: Avatar Node */}
      <div className="relative z-10 shrink-0 flex items-center justify-center mt-4 md:mt-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-lime-500/20 rounded-full blur-2xl"
        />
        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-stone-800 bg-stone-950 p-1 md:p-2 shadow-[0_0_40px_rgba(132,204,22,0.15)] overflow-hidden group">
          <img 
            src={creator.avatar} 
            alt={creator.name}
            className="w-full h-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full border border-lime-500/30"></div>
        </div>
        
        {/* Orbiting element */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[120%] h-[120%] rounded-full border border-dashed border-stone-700/50 pointer-events-none"
        >
          <div className="absolute -top-2 left-1/2 w-4 h-4 bg-lime-500 rounded-full shadow-[0_0_10px_rgba(132,204,22,0.8)]"></div>
        </motion.div>
      </div>

      {/* Info & Stats Panels */}
      <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles size={14} /> AI Creator Node
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-stone-100 mb-3 tracking-tight">
          {creator.name}
        </h1>
        <p className="text-stone-400 text-sm md:text-base max-w-xl leading-relaxed mb-8">
          {creator.bio}
        </p>

        {/* Floating Glass Stats */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full">
          <div className="flex items-center gap-3 bg-stone-950/50 backdrop-blur-md border border-stone-800 rounded-2xl p-4 min-w-[150px]">
            <div className="p-2.5 bg-lime-500/10 rounded-lg text-lime-400">
              <Users size={20} />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-stone-100">{creator.subscribers}</span>
              <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Subscribers</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-stone-950/50 backdrop-blur-md border border-stone-800 rounded-2xl p-4 min-w-[150px]">
            <div className="p-2.5 bg-slate-400/10 rounded-lg text-slate-400">
              <Activity size={20} />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-stone-100">Top 1%</span>
              <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">Engagement</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex gap-4 w-full justify-center md:justify-start">
          <button className="flex-1 md:flex-none bg-lime-700 text-stone-50 px-8 py-3 rounded-xl font-bold hover:bg-lime-600 transition-all shadow-[0_0_20px_rgba(132,204,22,0.2)] hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] active:scale-95">
            Connect
          </button>
          <button className="flex-1 md:flex-none bg-stone-800/50 text-stone-200 px-8 py-3 rounded-xl font-bold hover:bg-stone-700/80 border border-stone-700 transition-all active:scale-95">
            Analyze
          </button>
        </div>
      </div>
    </motion.div>
  );
}
