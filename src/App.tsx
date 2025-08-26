import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./components/About";
import ServiceDetails from "./components/Services/ServiceDetails";
import Services from "./components/Services/Services";
import ScrollToTopOnRouteChange from "./components/shared/ScrollToTopOnRouteChange";
import WhatsBtn from "./components/shared/WhatsBtn";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const App = () => {
  const {  i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = 'rtl';
  }, [i18n.language]);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WhatsBtn phone="+048877222" />
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <ScrollToTopOnRouteChange />
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
