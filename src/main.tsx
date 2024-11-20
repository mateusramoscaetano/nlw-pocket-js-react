import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <Toaster position="bottom-left" richColors />
    </QueryClientProvider>
  </StrictMode>
);
