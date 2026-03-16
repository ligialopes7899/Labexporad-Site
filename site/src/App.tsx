import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "./pages/Home";
import Equipa from "./pages/Equipa";
import Parceiros from "./pages/Parceiros";
import Enquadramento from "./pages/Enquadramento";
import Servicos from "./pages/Servicos";
import Projetos from "./pages/Projetos";
import Contactos from "./pages/Contactos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipa" element={<Equipa />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/enquadramento" element={<Enquadramento />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
