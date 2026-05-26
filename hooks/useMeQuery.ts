"use client";

import { useQuery } from "@tanstack/react-query";

import { AuthMe } from "@/services/auth.service";

export function useMeQuery() {
  return useQuery({
    queryKey: ["me"],

    queryFn: AuthMe,

    staleTime: 1000 * 60 * 5,

    retry: 1,
  });
}
