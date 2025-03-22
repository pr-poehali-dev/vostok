import { Separator } from "@/components/ui/separator";
import { Trophy, Orbit, Globe, Users } from "lucide-react";

const stats = [
  {
    value: "108",
    label: "минут",
    description: "длительность первого полёта",
    icon: <Trophy className="h-10 w-10 text-red-500" />
  },
  {
    value: "6",
    label: "космонавтов",
    description: "отправлено в космос",
    icon: <Users className="h-10 w-10 text-red-500" />
  },
  {
    value: "1",
    label: "женщина",
    description: "первая в космосе",
    icon: <Globe className="h-10 w-10 text-red-500" />
  },
  {
    value: "259",
    label: "витков",
    description: "вокруг Земли",
    icon: <Orbit className="h-10 w-10 text-red-500" />
  }
];

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Достижения программы</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Программа «Восток» установила ряд мировых рекордов и совершила прорыв в освоении космоса человечеством.
          </p>
          <Separator className="my-6 max-w-md mx-auto bg-slate-700" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-red-500 transition-colors">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold text-red-500">{stat.value}</span>
                <span className="text-xl text-gray-300 ml-2">{stat.label}</span>
              </div>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;