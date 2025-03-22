import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-red-500/20 rounded-full">
            <Rocket className="h-16 w-16 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Страница не найдена</h2>
        
        <p className="text-gray-300 mb-8">
          Кажется, мы потеряли связь с этой страницей. Возможно, она находится в другой галактике или не существует вовсе.
        </p>
        
        <Button asChild size="lg" className="group">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;