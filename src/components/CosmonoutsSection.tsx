import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Medal, Timer } from "lucide-react";

const cosmonauts = [
  {
    id: 1,
    name: "Юрий Гагарин",
    mission: "Восток-1",
    description: "Первый человек в космосе. 12 апреля 1961 года совершил полёт на корабле «Восток-1» продолжительностью 1 час 48 минут.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Yuri_Gagarin_%281961%29_-_Restoration.jpg/300px-Yuri_Gagarin_%281961%29_-_Restoration.jpg",
    initials: "ЮГ",
    achievements: "Герой Советского Союза, обладатель многочисленных наград и званий"
  },
  {
    id: 2,
    name: "Герман Титов",
    mission: "Восток-2",
    description: "Второй советский космонавт, самый молодой космонавт в истории (25 лет). Совершил полёт 6-7 августа 1961 года продолжительностью более 25 часов.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/German_Titov_1962.jpg/300px-German_Titov_1962.jpg",
    initials: "ГТ",
    achievements: "Герой Советского Союза, Лётчик-космонавт СССР"
  },
  {
    id: 3,
    name: "Валентина Терешкова",
    mission: "Восток-6",
    description: "Первая женщина-космонавт на планете. Совершила полёт 16-19 июня 1963 года на корабле «Восток-6» продолжительностью почти 3 суток.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/RIAN_archive_612748_Valentina_Tereshkova.jpg/300px-RIAN_archive_612748_Valentina_Tereshkova.jpg",
    initials: "ВТ",
    achievements: "Герой Советского Союза, Лётчик-космонавт СССР"
  }
];

const CosmonoutsSection = () => {
  return (
    <section id="cosmonauts" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Легендарные космонавты</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Познакомьтесь с героями, которые первыми покорили космическое пространство на кораблях серии «Восток».
          </p>
          <Separator className="my-6 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cosmonauts.map((cosmonaut) => (
            <Card key={cosmonaut.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6 bg-gradient-to-b from-slate-800 to-slate-900 text-white text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-white/20">
                  <AvatarImage src={cosmonaut.imageUrl} alt={cosmonaut.name} />
                  <AvatarFallback className="bg-red-500 text-lg">{cosmonaut.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{cosmonaut.name}</h3>
                <p className="text-gray-300 text-sm">{cosmonaut.mission}</p>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  {cosmonaut.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarDays className="h-4 w-4 mr-2 text-red-500" />
                  <span>Полёт на корабле {cosmonaut.mission}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Timer className="h-4 w-4 mr-2 text-red-500" />
                  <span>Успешное завершение миссии</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Medal className="h-4 w-4 mr-2 text-red-500" />
                  <span>{cosmonaut.achievements}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmonoutsSection;