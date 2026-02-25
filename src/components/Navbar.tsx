import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import maacLogo from "@/assets/maac-logo.png";

const courseCategories = [
  {
    name: "3D Animation",
    path: "/courses/3d-animation",
    desc: "Master 3D modeling, rigging & animation",
  },
  {
    name: "Visual Effects (VFX)",
    path: "/courses/visual-effects",
    desc: "Create Hollywood-grade visual effects",
  },
  {
    name: "Digital Content Creation",
    path: "/courses/digital-content-creation",
    desc: "Graphic design, video & web design",
  },
  {
    name: "Game Design",
    path: "/courses/game-design",
    desc: "Build immersive gaming experiences",
  },
  {
    name: "Motion Graphics & Broadcast",
    path: "/courses/broadcast",
    desc: "Motion graphics for TV & media",
  },
  {
    name: "Filmmaking & Photography",
    path: "/courses/filmmaking",
    desc: "Cinematography, editing & direction",
  },
  {
    name: "Skill Enhancement",
    path: "/courses/skill-enhancement",
    desc: "Short-term industry tool programs",
  },
];

const studentsDropdown = [
  { name: "Gallery", path: "/students/gallery" },
  { name: "Testimonials", path: "/students/testimonials" },
  { name: "Placements", path: "/students/placements" },
];

const eventsDropdown = [
  { name: "24FPS Awards", path: "/events/24fps" },
  { name: "Creative League", path: "/events/creative-league" },
  { name: "MAAC Klick", path: "/events/klick" },
  { name: "MAAC Manifest", path: "/events/manifest" },
  { name: "National Students Meet", path: "/events/national-students-meet" },
  { name: "100 Hours", path: "/events/100-hours" },
  { name: "BTS", path: "/events/bts" },
  { name: "Deadline", path: "/events/deadline" },
];

const aboutDropdown = [
  { name: "About MAAC", path: "/about" },
  { name: "Vision & Mission", path: "/about/vision" },
  { name: "Why MAAC", path: "/about/why-maac" },
  { name: "Infrastructure", path: "/about/infrastructure" },
  { name: "Leadership", path: "/about/leadership" },
  { name: "Awards", path: "/about/awards" },
];

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Courses",
    path: "/courses",
    dropdown: courseCategories,
    isMega: true,
  },
  { name: "About", path: "/about", dropdown: aboutDropdown },
  { name: "Events", path: "/events", dropdown: eventsDropdown },
  {
    name: "Student's World",
    path: "/students/gallery",
    dropdown: studentsDropdown,
  },
  { name: "Blog", path: "/blog" },
  { name: "Partner With Us", path: "/partner" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src={maacLogo}
              alt="MAAC Yelahanka"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 rounded-md
                    ${
                      location.pathname === link.path ||
                      location.pathname.startsWith(link.path + "/")
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 p-3 glass-strong rounded-xl border border-border/40 ${
                          link.isMega ? "w-[540px]" : "w-[220px]"
                        }`}
                      >
                        {link.isMega ? (
                          <>
                            <div className="grid grid-cols-2 gap-1">
                              {link.dropdown.map((item: any) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {item.name}
                                  </p>
                                  {item.desc && (
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      {item.desc}
                                    </p>
                                  )}
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-border/30">
                              <Link
                                to="/courses"
                                className="text-sm text-primary hover:underline"
                                onClick={() => setActiveDropdown(null)}
                              >
                                View All Courses →
                              </Link>
                            </div>
                          </>
                        ) : (
                          <div className="space-y-0.5">
                            {link.dropdown.map((item: any) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg glow-gold-sm hover:brightness-110 transition-all duration-300"
            >
              Book Free Counseling
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-border/30 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.name ? null : link.name
                          )
                        }
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors
                          ${
                            location.pathname.startsWith(link.path)
                              ? "text-primary bg-primary/10"
                              : "text-muted-foreground"
                          }`}
                      >
                        {link.name}
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            mobileExpanded === link.name ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-0.5 py-1">
                              {link.dropdown.map((item: any) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileExpanded(null);
                                  }}
                                  className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors
                        ${
                          location.pathname === link.path
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-3 px-4 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-lg text-center glow-gold-sm"
              >
                Book Free Counseling
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
