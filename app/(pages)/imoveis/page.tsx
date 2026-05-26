import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

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

export default function PropertiesPage() {
  return (
    <section id="imoveis" className="py-10">
      <div className="mx-auto max-w-7xl px-4 xl:px-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <Link href={`/imovel/aa`} key={index}>
              <PropertyCard {...property} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
