import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("history");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')", 
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Программа <span className="text-red-500">«Восток»</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
          Советская космическая программа, положившая начало эпохе пилотируемых космических полётов и открывшая человечеству путь к звёздам
        </p>
        <Button 
          size="lg" 
          className="bg-red-500 hover:bg-red-600 text-white"
          onClick={scrollToContent}
        >
          Узнать больше
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="h-10 w-10 text-white" onClick={scrollToContent} />
      </div>
    </div>
  );
};

export default Hero;