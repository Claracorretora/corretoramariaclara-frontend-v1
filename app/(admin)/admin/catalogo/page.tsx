"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IProperty } from "@/models/Property";
// import DialogCreateCompany from "@/components/Company/DialogCreateCompany";
// import { FindAllCompanies } from "@/services/Company";
// import DialogDeleteCompany from "@/components/Company/DialogDeleteCompany";
// import DialogEditCompany from "@/components/Company/DialogEditCompany";
// import { DialogDetailCompany } from "@/components/Company/DialogDetailCompany";

export default function Companies() {
  const [company, setCompany] = useState<IProperty[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  //   const fetchCompanies = async () => {
  //     try {
  //       const res = await FindAllCompanies(
  //         page,
  //         limit,
  //         "updatedAt,desc",
  //         searchTerm,
  //       );
  //       setCompany(res.data);
  //       setTotal(res.total);
  //     } catch (error) {
  //       toast.error("Erro ao buscar empresas");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchCompanies();
  //   }, [page, searchTerm]);

  const filteredCompanies = company.filter((company) =>
    company.legalName?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Imóveis</h1>
          <p className="text-gray-600">Gerencie seus imóveis</p>
        </div>

        {/* <DialogCreateCompany onCreated={fetchCompanies} /> */}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-2 h-4 w-4" />
          <Input
            placeholder="Buscar imóveis..."
            value={searchTerm}
            onChange={(e) => {
              setPage(1);
              setSearchTerm(e.target.value);
            }}
            className="pl-10 border-gray-300 bg-white"
          />
        </div>
        <div className="text-sm text-gray-600">
          {loading
            ? "Carregando..."
            : `${filteredCompanies.length} de ${total} imóveis encontrados`}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de imóveis</CardTitle>
          <CardDescription>
            Gerencie todos os imóveis da sua lista
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>CNPJ</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading
                  ? [...Array(5)].map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-20" />
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Skeleton className="h-8 w-8 rounded-md" />
                            <Skeleton className="h-8 w-8 rounded-md" />
                            <Skeleton className="h-8 w-8 rounded-md" />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  : filteredCompanies.map((company) => (
                      <TableRow key={company.id}>
                        <TableCell>{company.legalName}</TableCell>
                        <TableCell>{company.cnpj}</TableCell>
                        <TableCell>{company.email}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {/* <DialogDetailCompany id={company.id} />

                            <DialogEditCompany
                              id={company.id}
                              onUpdated={fetchCompanies}
                            />

                            <DialogDeleteCompany
                              id={company.id}
                              name={company.legalName}
                              setCompanies={setCompany}
                            /> */}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1 || loading}
              className="cursor-pointer"
            >
              Anterior
            </Button>

            <span className="px-2 text-sm flex items-center">
              Página {page} de {Math.ceil(total / limit)}
            </span>

            <Button
              variant="outline"
              onClick={() =>
                setPage((p) => (p < Math.ceil(total / limit) ? p + 1 : p))
              }
              disabled={page >= Math.ceil(total / limit) || loading}
              className="cursor-pointer"
            >
              Próxima
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
