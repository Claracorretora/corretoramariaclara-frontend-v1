import Image from "next/image";
import image from "@/public/hero.png";
import { Award, Handshake, Tag, UserCheck } from "lucide-react";

export default function HomeHero() {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-red-400" />,
      value: "+[X]",
      label: "anos de experiência",
    },
    {
      icon: <Handshake className="w-8 h-8 text-red-400" />,
      value: "+[X]",
      label: "negócios realizados",
    },
    {
      icon: <Tag className="w-8 h-8 text-red-400" />,
      value: "100%",
      label: "clientes satisfeitos",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-red-400" />,
      value: "100%",
      label: "Atendimento Personalizado",
    },
  ];

  return (
    <section className="w-full bg-white max-w-7xl mx-auto">
      <div className="relative md:grid md:grid-cols-12 w-full shadow-lg transition-shadow rounded-b-md">
        <div className="absolute inset-0 md:relative md:col-span-3 md:h-full z-0 overflow-hidden rounded-b-md md:rounded-br-none">
          <Image
            src={image}
            alt="Corretora"
            fill
            className="object-cover object-top rounded-b-md md:rounded-br-none"
            priority
          />

          <div className="absolute inset-0 bg-black/60 md:hidden" />
        </div>

        <div className="relative md:col-span-9 flex items-center md:bg-gray-50 h-full md:rounded-br-md">
          <div className="hidden md:block absolute inset-0 z-0">
            <Image
              src={image}
              alt="Interior de imóvel luxuoso"
              fill
              className="object-cover md:rounded-br-md"
            />

            <div className="absolute inset-0 bg-white/20 md:bg-transparent md:bg-linear-to-r md:from-white/30 md:to-transparent" />
          </div>

          <div className="relative z-10 px-6 md:px-16 max-w-2xl pb-12 pt-60 md:pt-12">
            <span className="text-red-400 font-bold uppercase tracking-wider text-sm">
              Especialista em Imóveis
            </span>
            <h1 className="md:mt-4 text-2xl md:text-5xl font-extrabold text-white md:text-slate-900 leading-tight">
              Comprometida em realizar bons negócios e realizar sonhos.
            </h1>
            <p className="md:mt-6 md:text-lg text-gray-100 md:text-slate-600 leading-relaxed">
              Atendimento personalizado para te ajudar a comprar, vender ou
              alugar com segurança e tranquilidade.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Sobre a corretora
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Olá! Sou Maria Clara, especialista no mercado imobiliário com anos
              de experiência na região. Meu compromisso é oferecer um
              atendimento transparente, ético e focado nas suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3">{stat.icon}</div>
                <span className="md:text-xl font-bold text-slate-900">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 uppercase font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
