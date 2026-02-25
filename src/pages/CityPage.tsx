// import { useLocation, Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import {
//   Send,
//   MapPin,
//   Home as HomeIcon,
//   GraduationCap,
//   Briefcase,
//   Monitor,
//   Users,
//   Building2,
//   ChevronRight,
// } from "lucide-react";
// import Layout from "@/components/Layout";
// import ScrollReveal from "@/components/ScrollReveal";
// import { getCityBySlug } from "@/data/cities";

// const schemaMarkup = (city: string) => ({
//   "@context": "https://schema.org",
//   "@type": "EducationalOrganization",
//   name: "MAAC Yelahanka",
//   url: "https://maacyelahanka.in",
//   logo: "https://maacyelahanka.in/assets/maac-logo.png",
//   description: `MAAC Yelahanka offers industry-ready Animation, VFX, Game Design & Filmmaking courses for students from ${city} and across India.`,
//   address: {
//     "@type": "PostalAddress",
//     streetAddress:
//       "789, 1st Floor, MIG, 2nd Stage, Side of Veer Savarkar Flyover",
//     addressLocality: "Yelahanka New Town, Bangalore",
//     addressRegion: "Karnataka",
//     postalCode: "560064",
//     addressCountry: "IN",
//   },
//   telephone: ["+91-80-4111-0555", "+91-74065-70001"],
//   email: "yelahanka@maacmail.com",
//   areaServed: [
//     "Karnataka",
//     "Bangalore",
//     "Hyderabad",
//     "Mysore",
//     "Chennai",
//     "Coimbatore",
//     "Mangalore",
//     "Pune",
//     "Mumbai",
//     "Vizag",
//     "Kochi",
//     "Trivandrum",
//   ],
//   sameAs: [],
// });

// const breadcrumbSchema = (cityName: string, slug: string) => ({
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   itemListElement: [
//     {
//       "@type": "ListItem",
//       position: 1,
//       name: "Home",
//       item: "https://maacyelahanka.in/",
//     },
//     {
//       "@type": "ListItem",
//       position: 2,
//       name: "Animation Courses",
//       item: "https://maacyelahanka.in/courses",
//     },
//     {
//       "@type": "ListItem",
//       position: 3,
//       name: cityName,
//       item: `https://maacyelahanka.in/animation-courses-${slug}`,
//     },
//   ],
// });

// const CityPage = () => {
//   const location = useLocation();
//   const citySlug = location.pathname.replace("/animation-courses-", "");
//   const city = citySlug ? getCityBySlug(citySlug) : undefined;

//   if (!city) {
//     return (
//       <Layout>
//         <section className="section-padding pt-32 md:pt-40 text-center">
//           <h1 className="font-display text-4xl text-foreground">
//             City Page Not Found
//           </h1>
//           <Link to="/" className="text-accent mt-4 inline-block">
//             Go Home
//           </Link>
//         </section>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <Helmet>
//         <title>{city.metaTitle}</title>
//         <meta name="description" content={city.metaDescription} />
//         <link
//           rel="canonical"
//           href={`https://maacyelahanka.in/animation-courses-${city.slug}`}
//         />
//         <script type="application/ld+json">
//           {JSON.stringify(schemaMarkup(city.name))}
//         </script>
//         <script type="application/ld+json">
//           {JSON.stringify(breadcrumbSchema(city.name, city.slug))}
//         </script>
//       </Helmet>

//       {/* Hero */}
//       <section className="relative pt-32 md:pt-40 pb-16 section-padding">
//         <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Breadcrumbs */}
//           <ScrollReveal>
//             <nav aria-label="Breadcrumb" className="mb-8">
//               <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
//                 <li className="inline-flex items-center gap-1.5">
//                   <Link
//                     to="/"
//                     className="hover:text-accent transition-colors inline-flex items-center gap-1"
//                   >
//                     <HomeIcon className="w-3.5 h-3.5" /> Home
//                   </Link>
//                 </li>
//                 <li>
//                   <ChevronRight className="w-3.5 h-3.5" />
//                 </li>
//                 <li>
//                   <Link
//                     to="/courses"
//                     className="hover:text-accent transition-colors"
//                   >
//                     Animation Courses
//                   </Link>
//                 </li>
//                 <li>
//                   <ChevronRight className="w-3.5 h-3.5" />
//                 </li>
//                 <li>
//                   <span className="text-foreground font-medium">
//                     {city.name}
//                   </span>
//                 </li>
//               </ol>
//             </nav>
//           </ScrollReveal>

//           <ScrollReveal>
//             <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
//               MAAC Yelahanka — Now Serving {city.name}
//             </p>
//             <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground leading-[0.95] mb-6">
//               Best 3D Animation & VFX Courses for Students in{" "}
//               <span className="text-gradient-gold">{city.name}</span>
//             </h1>
//             <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-8">
//               Join India's most awarded animation institute with
//               state-of-the-art labs, expert mentors, and pan-India placements.
//               Relocation & hostel support available for {city.name} students.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link
//                 to="/contact"
//                 className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg glow-gold hover:brightness-110 transition-all text-sm tracking-wide uppercase text-center"
//               >
//                 Book Free Career Counseling
//               </Link>
//               <Link
//                 to="/courses"
//                 className="px-8 py-4 glass text-foreground font-semibold rounded-lg hover-glow text-sm tracking-wide uppercase text-center"
//               >
//                 Explore Courses
//               </Link>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>

//       <div className="divider-gradient max-w-4xl mx-auto" />

//       {/* Section 1: Why Students Choose */}
//       <section className="section-padding">
//         <div className="max-w-7xl mx-auto">
//           <ScrollReveal>
//             <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
//               Industry-Ready Edge
//             </p>
//             <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
//               Why Students from {city.name} Choose MAAC Yelahanka
//             </h2>
//           </ScrollReveal>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             <ScrollReveal>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 {city.whyChooseContent}
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   "Autodesk Maya",
//                   "ZBrush",
//                   "Adobe After Effects",
//                   "Nuke",
//                   "Houdini",
//                   "Cinema 4D",
//                 ].map((tool) => (
//                   <div
//                     key={tool}
//                     className="glass rounded-lg p-3 flex items-center gap-3 hover-glow"
//                   >
//                     <Monitor className="w-4 h-4 text-accent shrink-0" />
//                     <span className="text-sm text-foreground">{tool}</span>
//                   </div>
//                 ))}
//               </div>
//             </ScrollReveal>
//             <ScrollReveal delay={0.15}>
//               <div className="glass-strong rounded-xl p-6 space-y-4">
//                 {[
//                   {
//                     icon: GraduationCap,
//                     title: "25+ Years of Excellence",
//                     desc: "Trusted training legacy since 1999",
//                   },
//                   {
//                     icon: Users,
//                     title: "50,000+ Alumni Network",
//                     desc: "Graduates at top studios worldwide",
//                   },
//                   {
//                     icon: Briefcase,
//                     title: "85%+ Placement Rate",
//                     desc: "Pan-India career support",
//                   },
//                   {
//                     icon: Building2,
//                     title: "150+ Centres",
//                     desc: "India's largest animation network",
//                   },
//                 ].map(({ icon: Icon, title, desc }) => (
//                   <div key={title} className="flex items-start gap-4">
//                     <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
//                       <Icon className="w-5 h-5 text-accent" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold text-foreground">
//                         {title}
//                       </p>
//                       <p className="text-xs text-muted-foreground">{desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       <div className="divider-gradient max-w-4xl mx-auto" />

//       {/* Section 2: Hybrid Learning */}
//       <section className="section-padding">
//         <div className="max-w-7xl mx-auto">
//           <ScrollReveal>
//             <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
//               Flexible Learning
//             </p>
//             <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
//               Online & Hybrid Learning Options for {city.name}
//             </h2>
//           </ScrollReveal>
//           <ScrollReveal>
//             <div className="glass-strong rounded-xl p-8">
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 {city.hybridContent}
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                 {[
//                   {
//                     title: "Live Online Classes",
//                     desc: "Real-time sessions with industry mentors",
//                   },
//                   {
//                     title: "Recorded Sessions",
//                     desc: "Access lectures anytime, anywhere",
//                   },
//                   {
//                     title: "Studio Immersion",
//                     desc: "Hands-on training at our Bangalore campus",
//                   },
//                 ].map((item) => (
//                   <div
//                     key={item.title}
//                     className="glass rounded-lg p-4 text-center hover-glow"
//                   >
//                     <p className="text-sm font-semibold text-foreground">
//                       {item.title}
//                     </p>
//                     <p className="text-xs text-muted-foreground mt-1">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>

//       <div className="divider-gradient max-w-4xl mx-auto" />

//       {/* Section 3: Hostel & Relocation */}
//       <section className="section-padding">
//         <div className="max-w-7xl mx-auto">
//           <ScrollReveal>
//             <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
//               Relocation Support
//             </p>
//             <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
//               Hostel & PG Facilities Near Our Center
//             </h2>
//           </ScrollReveal>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             <ScrollReveal>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 {city.hostelContent}
//               </p>
//               <div className="space-y-3">
//                 {[
//                   "Verified PG & hostel leads within walking distance",
//                   "Safe, student-friendly neighborhoods",
//                   "Affordable monthly rentals",
//                   "Dedicated relocation support team",
//                   "Hybrid start option — begin from home",
//                 ].map((item) => (
//                   <div key={item} className="flex items-center gap-3">
//                     <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
//                     <p className="text-sm text-foreground">{item}</p>
//                   </div>
//                 ))}
//               </div>
//             </ScrollReveal>
//             <ScrollReveal delay={0.15}>
//               <div className="glass-strong rounded-xl p-6">
//                 <MapPin className="w-8 h-8 text-accent mb-4" />
//                 <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">
//                   OUR LOCATION
//                 </h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed mb-4">
//                   789, 1st Floor, MIG, 2nd Stage, Side of Veer Savarkar Flyover,
//                   Yelahanka New Town, Bangalore – 560064
//                 </p>
//                 <div className="glass rounded-xl overflow-hidden aspect-video">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d77.5946!3d13.1007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAyLjUiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     title="MAAC Yelahanka Location"
//                   />
//                 </div>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       <div className="divider-gradient max-w-4xl mx-auto" />

//       {/* Section 4: Placement */}
//       <section className="section-padding">
//         <div className="max-w-7xl mx-auto">
//           <ScrollReveal>
//             <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
//               Career Launch
//             </p>
//             <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
//               Career & Placement Support for Students from {city.name}
//             </h2>
//           </ScrollReveal>
//           <ScrollReveal>
//             <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
//               {city.placementContent}
//             </p>
//           </ScrollReveal>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[
//               { label: "Placement Rate", value: "85%+" },
//               { label: "Hiring Partners", value: "500+" },
//               { label: "Avg. Package", value: "4-10 LPA" },
//               { label: "Alumni Network", value: "50K+" },
//             ].map((stat) => (
//               <ScrollReveal key={stat.label}>
//                 <div className="glass rounded-xl p-5 text-center hover-glow">
//                   <p className="font-display text-3xl text-accent">
//                     {stat.value}
//                   </p>
//                   <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
//                     {stat.label}
//                   </p>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//           <ScrollReveal className="mt-8 text-center">
//             <Link
//               to="/career-placement"
//               className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm uppercase tracking-wider"
//             >
//               Explore MAAC Placement Opportunities{" "}
//               <ChevronRight className="w-4 h-4" />
//             </Link>
//           </ScrollReveal>
//         </div>
//       </section>

//       <div className="divider-gradient max-w-4xl mx-auto" />

//       {/* Enquiry Form with City Tagging */}
//       <section className="section-padding">
//         <div className="max-w-3xl mx-auto">
//           <ScrollReveal>
//             <div className="glass-strong rounded-xl p-8">
//               <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
//                 Get Started
//               </p>
//               <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
//                 Book a Free Career Counseling
//               </h2>
//               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//                 <input
//                   type="hidden"
//                   name="source_page"
//                   value={`${city.name} Landing Page`}
//                 />
//                 <input type="hidden" name="source_city" value={city.name} />
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
//                   />
//                 </div>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
//                 />
//                 <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors">
//                   <option>Select Course of Interest</option>
//                   <option>3D Animation</option>
//                   <option>VFX & Compositing</option>
//                   <option>Game Design</option>
//                   <option>Filmmaking</option>
//                   <option>Graphic Design</option>
//                   <option>Broadcast Graphics</option>
//                 </select>
//                 <div className="glass rounded-lg p-3 flex items-center gap-2 text-xs text-muted-foreground">
//                   <MapPin className="w-4 h-4 text-accent shrink-0" />
//                   <span>
//                     You're enquiring from:{" "}
//                     <strong className="text-foreground">
//                       {city.name}, {city.state}
//                     </strong>
//                   </span>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-accent text-accent-foreground font-semibold rounded-lg glow-gold-sm hover:brightness-110 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
//                 >
//                   <Send className="w-4 h-4" /> Book Free Counseling
//                 </button>
//               </form>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default CityPage;

import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Send,
  MapPin,
  Home as HomeIcon,
  GraduationCap,
  Briefcase,
  Monitor,
  Users,
  Building2,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { getCityBySlug } from "@/data/cities";

// Helper for SEO Schema
const schemaMarkup = (city: string) => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "MAAC Yelahanka",
  url: "https://maacyelahanka.in",
  logo: "https://maacyelahanka.in/assets/maac-logo.png",
  description: `MAAC Yelahanka offers industry-ready Animation, VFX, Game Design & Filmmaking courses for students from ${city} and across India.`,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "789, 1st Floor, MIG, 2nd Stage, Side of Veer Savarkar Flyover",
    addressLocality: "Yelahanka New Town, Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560064",
    addressCountry: "IN",
  },
  telephone: ["+91-80-4111-0555", "+91-74065-70001"],
  email: "yelahanka@maacmail.com",
  areaServed: [
    "Karnataka",
    "Hyderabad",
    "Mysore",
    "Chennai",
    "Coimbatore",
    "Mangalore",
    "Pune",
    "Mumbai",
    "Vizag",
    "Kochi",
    "Trivandrum",
  ],
});

const breadcrumbSchema = (cityName: string, slug: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://maacyelahanka.in/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Animation Courses",
      item: "https://maacyelahanka.in/courses",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: cityName,
      item: `https://maacyelahanka.in/animation-courses-${slug}`,
    },
  ],
});

const CityPage = () => {
  // Using useParams to get the slug from /animation-courses-:citySlug
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  // 404 State if city doesn't exist in data/cities.ts
  if (!city) {
    return (
      <Layout>
        <section className="section-padding pt-32 md:pt-40 text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl text-foreground mb-4">
            City Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the specific city landing page you're looking for.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-accent text-white rounded-lg hover:brightness-110 transition-all"
          >
            Return to Home
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{city.metaTitle}</title>
        <meta name="description" content={city.metaDescription} />
        <link
          rel="canonical"
          href={`https://maacyelahanka.in/animation-courses-${city.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup(city.name))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema(city.name, city.slug))}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 md:pt-40 pb-16 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <ScrollReveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                <li className="inline-flex items-center gap-1.5">
                  <Link
                    to="/"
                    className="hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    <HomeIcon className="w-3.5 h-3.5" /> Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5" />
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="hover:text-accent transition-colors"
                  >
                    Animation Courses
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5" />
                </li>
                <li>
                  <span className="text-foreground font-medium">
                    {city.name}
                  </span>
                </li>
              </ol>
            </nav>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2 font-semibold">
              MAAC Yelahanka — Now Serving {city.name}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-foreground leading-[0.95] mb-6">
              Best 3D Animation & VFX Courses for Students in{" "}
              <span className="text-gradient-gold">{city.name}</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-8">
              Experience world-class training in {city.name}. Join India's most
              awarded animation institute with high-end labs and expert mentors.
              We offer dedicated relocation & hostel support for students coming
              from across {city.state}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg glow-gold hover:brightness-110 transition-all text-sm tracking-wide uppercase text-center"
              >
                Book Free Career Counseling
              </Link>
              <Link
                to="/courses"
                className="px-8 py-4 glass text-foreground font-semibold rounded-lg hover-glow text-sm tracking-wide uppercase text-center"
              >
                Explore Courses
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="divider-gradient max-w-4xl mx-auto" />

      {/* --- WHY CHOOSE SECTION --- */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
              Industry-Ready Edge
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
              Why Students from {city.name} Choose MAAC Yelahanka
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                {city.whyChooseContent}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Autodesk Maya",
                  "ZBrush",
                  "After Effects",
                  "Nuke",
                  "Houdini",
                  "Unreal Engine",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="glass rounded-lg p-3 flex items-center gap-3 hover-glow border border-white/10"
                  >
                    <Monitor className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-foreground font-medium">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-strong rounded-2xl p-8 space-y-6 border border-accent/20">
                {[
                  {
                    icon: GraduationCap,
                    title: "Industry Mentors",
                    desc: "Learn from experts who have worked on global blockbusters.",
                  },
                  {
                    icon: Users,
                    title: "Studio Culture",
                    desc: "Work in a professional environment that mimics a real VFX studio.",
                  },
                  {
                    icon: Briefcase,
                    title: "100% Placement Support",
                    desc: "Our dedicated cell connects you with top studios in Bangalore & beyond.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- HOSTEL & RELOCATION SECTION (CRITICAL) --- */}
      <section className="section-padding bg-accent/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
                Relocation Support
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
                Hostel & PG Facilities for {city.name} Students
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {city.hostelContent ||
                  "Moving from another city can be daunting. We make it seamless with our verified relocation support. Our team helps you find the best accommodation so you can focus entirely on your creative journey."}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Verified PG leads near campus",
                  "Safe & Secure Environment",
                  "Walking distance to center",
                  "Budget-friendly options",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-foreground text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass rounded-2xl p-4 border border-white/10 shadow-2xl">
                <div className="aspect-video rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6457174668694!2d77.5919426758682!3d13.121650311571434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae192a54359d9f%3A0x6b2e650085d519b7!2sMAAC%20Yelahanka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="MAAC Yelahanka Map"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 px-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    789, 1st Floor, MIG, 2nd Stage, Yelahanka New Town,
                    Bangalore
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- ENQUIRY FORM WITH DYNAMIC TAGGING --- */}
      <section className="section-padding" id="enquire">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="glass-strong rounded-3xl p-8 md:p-12 border border-accent/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -mr-16 -mt-16" />

              <div className="relative z-10 text-center mb-10">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  Launch Your Career from {city.name}
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below. Our career counselors will call you
                  back with details on courses, fees, and hostel options.
                </p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* HIDDEN SEO TAGS - This is Part 7 of requirements */}
                <input
                  type="hidden"
                  name="source_page"
                  value={`${city.name} SEO Landing Page`}
                />
                <input type="hidden" name="lead_city" value={city.name} />

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-accent ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent outline-none transition-all text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-accent ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent outline-none transition-all text-foreground"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-accent ml-1">
                    Course Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent outline-none transition-all text-foreground appearance-none">
                    <option>AD3D EDGE Plus (3D Animation)</option>
                    <option>ADVFX Plus (Visual Effects)</option>
                    <option>Game Design & Development</option>
                    <option>Graphic & Web Design</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="md:col-span-2 py-4 bg-accent text-accent-foreground font-bold rounded-xl glow-gold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                >
                  <Send className="w-4 h-4" /> Get Info for {city.name} Students
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
