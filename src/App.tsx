import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ScrollToTopOnRouteChange from "./components/shared/ScrollToTopOnRouteChange";
import WhatsBtn from "./components/shared/FloatingButtons";
import Loader from "./components/shared/Loader";
import BlogDetails from "./pages/BlogDetails/Index";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./components/Services/Services"));
const About = lazy(() => import("./components/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WhatsBtn />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnRouteChange />
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="services" element={<Services />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Index />} />
                <Route path="blogs" element={<Index />} />
                <Route path="blogs/:id" element={<BlogDetails />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
