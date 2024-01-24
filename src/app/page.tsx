"use client"

import Main from "@/app/main";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

export default function Home() {
  return (
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
  );
}
