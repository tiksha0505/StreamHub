import { Orbit } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-stone-800/60 bg-stone-950 py-12 mt-20 relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <Orbit size={18} className="text-lime-600" />
          <span className="text-lg font-bold text-stone-300">StreamHub</span>
        </div>
        <p className="text-sm text-stone-500 text-center md:text-left font-medium">
          © {new Date().getFullYear()} StreamHub.
        </p>
        <div className="flex gap-4 text-sm font-semibold text-stone-500">
          <span className="hover:text-stone-300 cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-stone-300 cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </footer>
  );
}
