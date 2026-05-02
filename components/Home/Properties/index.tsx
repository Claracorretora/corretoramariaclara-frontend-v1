"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";

const properties = [
  {
    image: "/images/property1.jpg",
    title: "Casa em Condomínio",
    price: "R$ 1.350.000",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    area: "180m²",
    location: "Condomínio Vila Verde",
  },
  {
    image: "/images/property2.jpg",
    title: "Apartamento",
    price: "R$ 850.000",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "90m²",
    location: "Jardim das Flores",
  },
  {
    image: "/images/property3.jpg",
    title: "Casa",
    price: "R$ 980.000",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: "150m²",
    location: "Parque das Águas",
  },
  {
    image: "/images/property4.jpg",
    title: "Apartamento",
    price: "R$ 650.000",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "70m²",
    location: "Centro",
  },
];

export default function HomeProperties() {
  return (
    <section id="imoveis" className="py-16 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Imóveis em destaque</h2>
          <Link
            href="/imoveis"
            className="flex items-center gap-1 text-sm font-bold text-red-500 hover:text-red-600"
          >
            Ver todos os imóveis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
