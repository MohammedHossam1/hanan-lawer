import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Services from "./components/Services/Services";
import Layout from "./Layout";
import About from "./components/About";
import ScrollToTopBtn from "./components/shared/ScrollToTopBtn";
import ScrollToTopOnRouteChange from "./components/shared/ScrollToTopOnRouteChange";
import ServiceDetails from "./components/Services/ServiceDetails";

const queryClient = new QueryClient();
const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = 'rtl';
  }, [i18n.language]);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* <ScrollToTopOnRouteChange /> */}
        <ScrollToTopBtn />

        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />          {/* / */}
              <Route path="services" element={<Services />} />  {/* /services */}
              <Route path="about" element={<About />} />  {/* /about */}
              <Route path="contact" element={<Index />} />{/* /contact */}
              <Route path="blogs" element={<Index />} />   {/* /blogs */}
              <Route path="/services/:slug" element={<ServiceDetails />} />

              <Route path="*" element={<NotFound />} />    {/* catch-all */}
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
