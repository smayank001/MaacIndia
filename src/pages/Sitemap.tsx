import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { courseCategories } from "@/data/courses";
import { events } from "@/data/events";

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/" },
      { name: "Courses", path: "/courses" },
      { name: "About MAAC", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Locate a Centre", path: "/locate" },
      { name: "Partner With Us", path: "/partner" },
      { name: "Verify Certificate", path: "/verify" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Vision & Mission", path: "/about/vision" },
      { name: "Why MAAC", path: "/about/why-maac" },
      { name: "Infrastructure", path: "/about/infrastructure" },
      { name: "Leadership", path: "/about/leadership" },
      { name: "Awards & Recognition", path: "/about/awards" },
    ],
  },
  {
    title: "Student's World",
    links: [
      { name: "Gallery", path: "/students/gallery" },
      { name: "Testimonials", path: "/students/testimonials" },
      { name: "Placements", path: "/students/placements" },
      { name: "MAAC Trends (Blog)", path: "/blog" },
    ],
  },
  {
    title: "Course Categories",
    links: courseCategories.map(c => ({ name: c.title, path: `/courses/category/${c.slug}` })),
  },
  {
    title: "Events",
    links: events.map(e => ({ name: e.title, path: `/events/${e.slug}` })),
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms & Conditions", path: "/terms" },
      { name: "Disclaimer", path: "/disclaimer" },
      { name: "Cookie Policy", path: "/cookies" },
    ],
  },
];

const SitemapPage = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-12">SITEMAP</h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapSections.map((section, i) => (
            <ScrollReveal key={section.title} delay={(i % 6) * 0.08}>
              <div className="glass rounded-xl p-6">
                <h2 className="font-display text-xl text-foreground mb-4 tracking-wider">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map(link => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default SitemapPage;
