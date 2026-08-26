import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreatorProfile from './pages/CreatorProfile';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 selection:bg-lime-700/30 relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 40, -40, 0], 
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-lime-700/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 50, 0], 
            y: [0, 50, -50, 0],
            scale: [1, 0.85, 1.15, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-slate-400/10 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>

      <div className="z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 relative pt-4">
           <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/creator/:id" element={<CreatorProfile />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
