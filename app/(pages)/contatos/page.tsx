import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <div className="w-full bg-white border-b">
        <div className="container mx-auto px-4 xl:px-0 py-12 flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Contato
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Está pronto para encontrar o seu novo imóvel ou tirar dúvidas? Estou
            à disposição para ajudar você nessa jornada.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl px-4 xl:px-0 py-16">
        <div className="grid grid-cols-1 gap-12 items-start">
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              {[
                {
                  icon: <Phone className="w-6 h-6 text-amber-600" />,
                  title: "Telefone / WhatsApp",
                  value: "(11) 99999-9999",
                },
                {
                  icon: <Mail className="w-6 h-6 text-amber-600" />,
                  title: "E-mail",
                  value: "contato@corretora.com.br",
                },
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="bg-amber-100 p-3 rounded-full shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-none shadow-sm">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-amber-100 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Escritório</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12 gap-2 transition-transform active:scale-95">
              <MessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
