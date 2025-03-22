import { Separator } from "@/components/ui/separator";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const missions = [
  {
    id: 1,
    name: "Восток-1",
    date: "12 апреля 1961",
    cosmonaut: "Юрий Гагарин",
    duration: "1 час 48 минут",
    orbits: 1,
    status: "Успешно"
  },
  {
    id: 2,
    name: "Восток-2",
    date: "6 августа 1961",
    cosmonaut: "Герман Титов",
    duration: "25 часов 18 минут",
    orbits: 17,
    status: "Успешно"
  },
  {
    id: 3,
    name: "Восток-3",
    date: "11 августа 1962",
    cosmonaut: "Андриян Николаев",
    duration: "94 часа 22 минуты",
    orbits: 64,
    status: "Успешно"
  },
  {
    id: 4,
    name: "Восток-4",
    date: "12 августа 1962",
    cosmonaut: "Павел Попович",
    duration: "70 часов 57 минут",
    orbits: 48,
    status: "Успешно"
  },
  {
    id: 5,
    name: "Восток-5",
    date: "14 июня 1963",
    cosmonaut: "Валерий Быковский",
    duration: "119 часов 6 минут",
    orbits: 81,
    status: "Успешно"
  },
  {
    id: 6,
    name: "Восток-6",
    date: "16 июня 1963",
    cosmonaut: "Валентина Терешкова",
    duration: "70 часов 50 минут",
    orbits: 48,
    status: "Успешно"
  }
];

const MissionsSection = () => {
  return (
    <section id="missions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Полёты кораблей «Восток»</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            В рамках программы «Восток» было выполнено шесть успешных пилотируемых полётов в космос, включая первый полёт человека в космос и первый полёт женщины в космос.
          </p>
          <Separator className="my-6 max-w-md mx-auto" />
        </div>

        <div className="overflow-x-auto rounded-lg shadow-md">
          <Table>
            <TableCaption>Основные полёты программы «Восток»</TableCaption>
            <TableHeader className="bg-slate-100">
              <TableRow>
                <TableHead className="w-[100px]">Корабль</TableHead>
                <TableHead>Дата запуска</TableHead>
                <TableHead>Космонавт</TableHead>
                <TableHead>Продолжительность</TableHead>
                <TableHead className="text-center">Витков</TableHead>
                <TableHead className="text-center">Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {missions.map((mission) => (
                <TableRow key={mission.id} className="hover:bg-slate-50">
                  <TableCell className="font-medium">{mission.name}</TableCell>
                  <TableCell>{mission.date}</TableCell>
                  <TableCell>{mission.cosmonaut}</TableCell>
                  <TableCell>{mission.duration}</TableCell>
                  <TableCell className="text-center">{mission.orbits}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {mission.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default MissionsSection;