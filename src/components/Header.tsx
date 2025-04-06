import { Rocket } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for fixed header height
      const headerHeight = 64; // Height of the header (h-16 = 4rem = ~64px)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Rocket className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold text-white">Восток</span>
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection("history")}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              История
            </button>
            <button 
              onClick={() => scrollToSection("missions")}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Миссии
            </button>
            <button 
              onClick={() => scrollToSection("cosmonauts")}
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Космонавты
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;