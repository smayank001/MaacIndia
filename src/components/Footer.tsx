import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import maacLogo from "@/assets/maac-logo.png";
import { cities } from "@/data/cities";

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
    { name: "Locate Us", path: "/locate-us" },
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

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/maacbengaluru/" },
  { icon: null, href: "https://x.com/maacyelahanka", customIcon: XIcon },
  {
    icon: Instagram,
    href: "https://www.instagram.com/maacyelahanka.in?igsh=MTI3MGEwOWJlamlrOQ==",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@maacyelahanka705?si=QHzKDlN_UCkbbIu7",
  },
];

const Footer = () => (
  <footer className="bg-secondary/50 border-t border-border/30">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <img src={maacLogo} alt="MAAC Yelahanka" className="h-12 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            MAAC Yelahanka — Bangalore's premier creative institute for
            Animation, VFX, Gaming, Filmmaking & Multimedia education.
            Industry-ready training with national placement support.
          </p>
          <div className="flex gap-3 mb-6">
            {socials.map(({ icon: Icon, href, customIcon: CustomIcon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-accent hover:glow-gold-sm transition-all duration-300"
              >
                {CustomIcon ? (
                  <CustomIcon />
                ) : (
                  Icon && <Icon className="w-4 h-4" />
                )}
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
                789, 1st Floor, MIG, 2nd Stage, Near Mother Dairy Circle, Side
                of Veer Savarkar Flyover, Major Sandeep Unnikrishnan Road,
                Yelahanka New Town, Bangalore – 560 064
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
                <Link
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
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
                <Link
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
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
                <Link
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Locations We Serve - commented out for future use
      <div className="mt-10">
        <h4 className="font-display text-xl text-foreground mb-4 tracking-wider">LOCATIONS WE SERVE</h4>
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/animation-courses-${city.slug}`}
              className="px-3 py-1.5 glass rounded-lg text-xs text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
      */}

      <div className="divider-gradient mt-12 mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2025 MAAC Yelahanka. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/privacy" className="hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-accent transition-colors">
            Terms of Use
          </Link>
          <Link
            to="/disclaimer"
            className="hover:text-accent transition-colors"
          >
            Disclaimer
          </Link>
          <Link to="/cookies" className="hover:text-accent transition-colors">
            Cookie Policy
          </Link>
          <Link to="/sitemap" className="hover:text-accent transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
