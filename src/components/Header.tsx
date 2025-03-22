import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold text-white">Восток</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Главная
            </Link>
            <Link to="/#history" className="text-gray-300 hover:text-white transition-colors">
              История
            </Link>
            <Link to="/#missions" className="text-gray-300 hover:text-white transition-colors">
              Миссии
            </Link>
            <Link to="/#cosmonauts" className="text-gray-300 hover:text-white transition-colors">
              Космонавты
            </Link>
          </nav>
          
          <Button variant="outline" className="text-white border-red-500 hover:bg-red-500/20">
            Узнать больше
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;