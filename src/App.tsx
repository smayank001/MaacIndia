import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseCategory from "./pages/CourseCategory";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import AboutVision from "./pages/AboutVision";
import WhyMaac from "./pages/WhyMaac";
import Infrastructure from "./pages/Infrastructure";
import Leadership from "./pages/Leadership";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Gallery from "./pages/Gallery";

import Testimonials from "./pages/Testimonials";
import Placements from "./pages/Placements";
import Trends from "./pages/Trends";
import BlogDetail from "./pages/BlogDetail";
import StudentZone from "./pages/StudentZone";
import PartnerWithUs from "./pages/PartnerWithUs";
import LocateCentre from "./pages/LocateCentre";
import CentreDetail from "./pages/CentreDetail";
import VerifyCertificate from "./pages/VerifyCertificate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import CookiePolicy from "./pages/CookiePolicy";
import SitemapPage from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:categorySlug" element={<CourseCategory />} />
          <Route
            path="/courses/:categorySlug/:courseSlug"
            element={<CourseDetail />}
          />
          <Route path="/contact" element={<Contact />} />

          {/* About Section */}
          <Route path="/about" element={<About />} />
          <Route path="/about/vision" element={<AboutVision />} />
          <Route path="/about/why-maac" element={<WhyMaac />} />
          <Route path="/about/infrastructure" element={<Infrastructure />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/awards" element={<Awards />} />

          {/* Events */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetail />} />

          {/* Student's World */}
          <Route path="/student-zone" element={<StudentZone />} />
          <Route path="/students/gallery" element={<Gallery />} />
          <Route path="/students/testimonials" element={<Testimonials />} />
          <Route path="/students/placements" element={<Placements />} />

          {/* Blog */}
          <Route path="/blog" element={<Trends />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Other */}
          <Route path="/partner" element={<PartnerWithUs />} />
          <Route path="/locate" element={<LocateCentre />} />
          <Route path="/centre/:slug" element={<CentreDetail />} />
          <Route path="/verify" element={<VerifyCertificate />} />

          {/* Legal */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/sitemap" element={<SitemapPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
