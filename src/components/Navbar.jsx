import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Orbit } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    } else {
      navigate(`/`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-800/60 bg-stone-950/70 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-gradient-to-tr from-lime-700 to-slate-400 p-1.5 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-lime-700/20">
            <Orbit className="text-stone-100" size={20} />
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
            StreamHub
          </span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <form onSubmit={handleSearch} className="relative w-full group">
            <input 
              type="text" 
              placeholder="Search content, creators, or topics..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-stone-900/50 border border-stone-700/50 rounded-full py-2.5 pl-11 pr-4 text-sm text-stone-200 focus:outline-none focus:border-lime-700/50 focus:ring-1 focus:ring-lime-700/50 transition-all placeholder:text-stone-500 group-hover:bg-stone-900"
            />
            <Search className="absolute left-4 top-1/2 -transtone-y-1/2 text-stone-500 group-focus-within:text-lime-600 transition-colors" size={18} />
          </form>
        </div>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="hidden md:flex items-center justify-center bg-stone-100 text-stone-950 px-5 py-2 rounded-full text-sm font-bold hover:bg-lime-50 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Sign In
          </button>
          
          <button 
            className="md:hidden text-stone-300 hover:text-stone-100 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-900/95 backdrop-blur-xl p-4 animate-in slide-in-from-top-2">
          <form onSubmit={handleSearch} className="relative mb-4">
            <input 
              type="text" 
              placeholder="Search..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded-lg py-3 pl-11 pr-4 text-sm text-stone-200 focus:outline-none focus:border-lime-700"
            />
            <Search className="absolute left-4 top-1/2 -transtone-y-1/2 text-stone-500" size={18} />
          </form>
          <button className="w-full bg-gradient-to-r from-lime-700 to-slate-400 text-stone-100 px-4 py-3 rounded-lg text-sm font-bold shadow-lg shadow-lime-700/25">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
