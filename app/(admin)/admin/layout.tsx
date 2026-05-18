"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Home, Menu, X, BookOpenText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { AuthMe, LogoutAdminService } from "@/services/Auth";
import { toast } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      const res = await AuthMe();
      setUserName(res.firstName);
      setUserLastName(res.lastName);
    } catch (error) {
      toast.error("Erro ao buscar dados do usuário");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const navigation = [
    { name: "Catálogo", href: "/admin/catalogo", icon: BookOpenText },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-clara-tertiary shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 mt-4">
          <Link href="/">
            <Image src={logo} alt="logo" width={150} />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-clara-secondary cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-clara-primary border-r-2 border-clara-secondary"
                    : "hover:bg-clara-secondary"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Button
            onClick={LogoutAdminService}
            className="w-full bg-clara-secondary hover:bg-clara-quaternary cursor-pointer"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="bg-clara-primary shadow-sm border-b h-16 flex items-center justify-between px-6 lg:justify-end">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-4">
            <p>
              Seja bem-vindo,{" "}
              <strong>
                {userName} {userLastName}
              </strong>
            </p>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
