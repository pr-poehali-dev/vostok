import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarClock, FileText, Rocket } from "lucide-react";

const HistorySection = () => {
  return (
    <section id="history" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">История программы</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Программа «Восток» — первая советская пилотируемая космическая программа, в рамках которой были созданы и запущены первые в мире космические корабли.
          </p>
          <Separator className="my-6 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-red-100 rounded-full">
                  <CalendarClock className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Начало программы</h3>
              <p className="text-gray-600">
                Программа «Восток» была начата в 1958 году под руководством Сергея Павловича Королёва. Изначально проект назывался «Объект ОД-2». После успешного запуска первого искусственного спутника Земли в 1957 году, Советский Союз сосредоточился на отправке человека в космос.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-red-100 rounded-full">
                  <FileText className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Разработка корабля</h3>
              <p className="text-gray-600">
                Космический корабль «Восток» представлял собой сферический спускаемый аппарат диаметром 2,3 метра и приборный отсек. Сферическая форма спускаемого аппарата была выбрана из-за ее аэродинамической стабильности при возвращении на Землю. Масса корабля составляла 4,73 тонны.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-red-100 rounded-full">
                  <Rocket className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Исторический полёт</h3>
              <p className="text-gray-600">
                12 апреля 1961 года космический корабль «Восток-1» с Юрием Гагариным на борту совершил первый в истории человечества пилотируемый космический полёт. Корабль выполнил один виток вокруг Земли за 108 минут, что стало настоящим триумфом советской космонавтики и науки.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;