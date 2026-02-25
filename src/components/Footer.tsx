import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import maacLogo from "@/assets/maac-logo.png";
import { cities } from "@/data/cities";
import { useProgramNavigation } from "@/hooks/use-program-navigation";

const footerLinks = {
  courses: [
    { name: "3D Animation", path: "/courses/3d-animation" },
    { name: "Visual Effects (VFX)", path: "/courses/visual-effects" },
    {
      name: "Digital Content Creation",
      path: "/courses/digital-content-creation",
    },
    { name: "Game Design", path: "/courses/game-design" },
    { name: "Motion Graphics & Broadcast", path: "/courses/broadcast" },
    { name: "Filmmaking & Photography", path: "/courses/filmmaking" },
    { name: "Skill Enhancement", path: "/courses/skill-enhancement" },
  ],
  quickLinks: [
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/students/gallery" },
    { name: "Placements", path: "/students/placements" },
    { name: "Blog", path: "/blog" },
    { name: "Partner With Us", path: "/partner" },
    { name: "Verify Certificate", path: "/verify" },
    { name: "Career & Placement", path: "/career-placement" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Sitemap", path: "/sitemap" },
  ],
};

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer = () => {
  const { handleProgramClick } = useProgramNavigation();

  return (
    <footer className="bg-secondary/50 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src={maacLogo}
                alt="MAAC Yelahanka"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              MAAC Yelahanka — Bangalore's premier creative institute for
              Animation, VFX, Gaming, Filmmaking & Multimedia education.
              Industry-ready training with national placement support.
            </p>
            <div className="flex gap-3 mb-6">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-accent hover:glow-gold-sm transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>080-4111 0555 | +91 74065 70001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>yelahanka@maacmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>
                  789, 1st Floor, MIG, 2nd Stage, Side of Veer Savarkar Flyover,
                  Yelahanka New Town, Bangalore – 560064
                </span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4 tracking-wider">
              COURSES
            </h4>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <div
                    onClick={(e) => handleProgramClick(link.path, e)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4 tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <div
                    onClick={(e) => handleProgramClick(link.path, e)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4 tracking-wider">
              LEGAL
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <div
                    onClick={(e) => handleProgramClick(link.path, e)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Locations We Serve */}
        <div className="mt-10">
          <h4 className="font-display text-xl text-foreground mb-4 tracking-wider">
            LOCATIONS WE SERVE
          </h4>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <div
                key={city.slug}
                onClick={(e) =>
                  handleProgramClick(`/animation-courses-${city.slug}`, e)
                }
                className="px-3 py-1.5 glass rounded-lg text-xs text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors cursor-pointer"
              >
                {city.name}
              </div>
            ))}
          </div>
        </div>

        <div className="divider-gradient mt-12 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2025 MAAC Yelahanka. All rights reserved.</p>
          <div className="flex gap-4">
            <div
              onClick={(e) => handleProgramClick("/privacy", e)}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Privacy Policy
            </div>
            <div
              onClick={(e) => handleProgramClick("/terms", e)}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Terms of Use
            </div>
            <div
              onClick={(e) => handleProgramClick("/cookies", e)}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Cookie Policy
            </div>
            <div
              onClick={(e) => handleProgramClick("/sitemap", e)}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              Sitemap
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
