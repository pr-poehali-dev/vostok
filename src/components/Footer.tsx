import { Rocket, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Rocket className="h-6 w-6 text-red-500 mr-2" />
              <span className="text-xl font-bold text-white">Восток</span>
            </div>
            <p className="text-sm mb-4">
              Программа «Восток» — советская космическая программа, в рамках которой был осуществлён первый в мире полёт человека в космос.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="/#history" className="hover:text-white transition-colors">История</a></li>
              <li><a href="/#missions" className="hover:text-white transition-colors">Миссии</a></li>
              <li><a href="/#cosmonauts" className="hover:text-white transition-colors">Космонавты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <span>Музей космонавтики, Москва, Россия</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-2" />
                <span>+7 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-2" />
                <span>info@vostok-program.ru</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 bg-gray-700" />
        
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Программа Восток. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;