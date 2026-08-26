import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden my-6 md:my-8 group shadow-2xl shadow-lime-900/20">
      {/* Background Plate */}
      <div className="absolute inset-0 bg-stone-900 overflow-hidden">
         {/* Tech Grid Overlay for dynamism */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
         {/* Decorative glowing orbs to match the new palette vibe */}
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute top-0 right-0 w-96 h-96 bg-lime-700/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 transition-all duration-1000 group-hover:bg-lime-700/30 group-hover:scale-110 origin-bottom-left"
         />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 origin-top-right"
         />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:w-2/3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-lime-700/20 text-lime-500 text-xs font-bold uppercase tracking-wider rounded-full border border-lime-700/30 backdrop-blur-sm">
              Featured Content
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-100 leading-tight mb-4 drop-shadow-lg tracking-tight">
            Discover the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-slate-300">Generative AI</span>
          </h1>
          <p className="text-stone-300 text-base md:text-lg max-w-2xl mb-8 font-medium drop-shadow-md">
            Explore cutting-edge tutorials, cinematic techniques, and design patterns from top creators around the world.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 bg-stone-100 text-stone-950 px-6 py-3 rounded-full font-bold hover:bg-lime-50 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Play fill="currentColor" size={18} />
              Start Watching
            </button>
            <button className="flex items-center gap-2 bg-stone-800/50 text-stone-100 px-6 py-3 rounded-full font-bold hover:bg-stone-700/80 backdrop-blur-md border border-stone-600/50 hover:border-stone-500 transition-all">
              Browse Categories
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
