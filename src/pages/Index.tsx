import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Trophy,
  Users,
  Monitor,
  GraduationCap,
  Zap,
  ArrowRight,
  Star,
  MapPin,
  Award,
  Tv,
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const heroBanners = [
  {
    img: "/images/hero/banner-careerx.jpg",
    alt: "CareerX & CreatorX - The New Age of Creative Xcellence Begins",
  },
  {
    img: "/images/hero/banner-hrithik-roshan.jpg",
    alt: "Hrithik Roshan - MAAC Brand Ambassador",
  },
  { img: "/images/hero/banner-bvoc.jpg", alt: "B.Voc in 3D Animation & VFX" },
  {
    img: "/images/hero/banner-fueling-dreams.jpg",
    alt: "Fueling Dreams - MAAC Creative Education",
  },
  {
    img: "/images/hero/banner-genai.jpg",
    alt: "Future-Ready Gen AI-Powered Courses",
  },
  {
    img: "/images/hero/banner-classrooms.jpg",
    alt: "State-of-the-Art MAAC Classrooms",
  },
  {
    img: "/images/hero/banner-skill-india.jpg",
    alt: "Skill India - MAAC Initiative",
  },
];

const courses = [
  {
    title: "3D Animation",
    image: "/images/courses/3d-animation.webp",
    path: "/courses/3d-animation",
    desc: "Master the art of storytelling through high-quality animation, modeling, texturing, lighting, and rigging",
  },
  {
    title: "Digital Content Creation",
    image: "/images/courses/digital-content.webp",
    path: "/courses/digital-content-creation",
    desc: "Become a digital content pro! Learn graphic design, animation, video production, and web design",
  },
  {
    title: "Game Design",
    image: "/images/courses/game-design.webp",
    path: "/courses/game-design",
    desc: "Step into the world of gaming! Learn game asset creation, real-time rendering, and interactive design",
  },
  {
    title: "VFX Courses",
    image: "/images/courses/vfx.webp",
    path: "/courses/visual-effects",
    desc: "Create stunning VFX for movies, TV, and gaming with advanced CGI, compositing, and motion tracking",
  },
  {
    title: "Motion Graphics & Broadcast",
    image: "/images/courses/motion-graphics.webp",
    path: "/courses/broadcast",
    desc: "Master the art of motion design, video editing, and broadcast graphics for TV & digital media",
  },
  {
    title: "Skill Enhancement",
    image: "/images/courses/skill-enhancement.webp",
    path: "/courses/skill-enhancement",
    desc: "Fast-track your career with specialized short-term courses in animation, VFX, game design, and more",
  },
];

const whyChoose = [
  {
    icon: Trophy,
    title: "Industry Recognition",
    desc: "Award-winning curriculum trusted by 1000+ studios worldwide",
  },
  {
    icon: Monitor,
    title: "State-of-the-Art Labs",
    desc: "High-performance workstations with latest creative software",
  },
  {
    icon: GraduationCap,
    title: "Expert Mentors",
    desc: "Learn from industry professionals with 10+ years experience",
  },
  {
    icon: Users,
    title: "Placement Support",
    desc: "85%+ placement rate with top creative companies",
  },
  {
    icon: Zap,
    title: "Hands-On Projects",
    desc: "Real-world projects from day one of your journey",
  },
  {
    icon: Sparkles,
    title: "Global Certifications",
    desc: "Internationally recognized certifications and diplomas",
  },
];

const stats = [
  { value: "150+", label: "Centres Across India" },
  { value: "50K+", label: "Students Trained" },
  { value: "85%", label: "Placement Rate" },
  { value: "25+", label: "Years of Excellence" },
];

const alumniHighlights = [
  {
    name: "MANIT KUMAR",
    role: "3D Animation Artist",
    salary: "9.9 LPA",
    company: "Sundeep Groups",
    image: "/images/alumni/manit-kumar.jpg",
  },
  {
    name: "PREETHI S",
    role: "3D Animation Artist",
    salary: "8.5 LPA",
    company: "Light and Wonder",
    image: "/images/alumni/preethi-s.jpg",
  },
  {
    name: "SHIVAM GUJRAN",
    role: "3D Animation Artist",
    salary: "6.6 LPA",
    company: "OpenCV Org",
    image: "/images/alumni/shivam-gujran.jpg",
  },
  {
    name: "SHILPI GUPTA",
    role: "Interior Designer",
    salary: "4.92 LPA",
    company: "Livspace",
    image: "/images/alumni/shilpi-gupta.jpg",
  },
  {
    name: "RITIKA SINGH",
    role: "Motion Graphic Artist",
    salary: "4.56 LPA",
    company: "Junglee Games",
    image: "/images/alumni/ritika-singh.jpg",
  },
];

const studentWorks = [
  {
    image: "/images/students/work-warrior-vector.jpg",
    title: "Hooded Red Warrior – Vector Art",
    category: "Design",
    student: "Ritvik Kumar Das",
  },
  {
    image: "/images/students/work-ganesha-art.jpg",
    title: "Cute Ganesha – Digital Painting",
    category: "Digital Art",
    student: "Tanuj Dhami",
  },
  {
    image: "/images/students/work-starwars-sculpt.jpg",
    title: "Star Wars Toy Sculpting",
    category: "3D Modeling",
    student: "Mohik Dhakate",
  },
  {
    image: "/images/students/work-portrait-art.jpg",
    title: "Portrait Art – Old Man with Tea",
    category: "Digital Art",
    student: "Anjali Kashyap",
  },
  {
    image: "/images/students/work-mystic-kingdom.jpg",
    title: "Mystic Kingdom – Character Design",
    category: "Design",
    student: "Chhandosi Mukherjee",
  },
  {
    image: "/images/students/glimpse-1.png",
    title: "MAAC Campus Life",
    category: "Campus",
    student: "MAAC",
  },
];

const Index = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero/banner-classrooms.jpg"
          alt="MAAC Creative studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-semibold text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            India's Premier Creative Institute
          </p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] mb-6"
        >
          CREATE THE
          <br />
          <span className="text-gradient-red">FUTURE</span> OF
          <br />
          ENTERTAINMENT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8"
        >
          Master Animation, VFX, Gaming, Filmmaking & Digital Content at India's
          most awarded creative institute.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/courses"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-red hover:brightness-110 transition-all duration-300 text-sm tracking-wide uppercase"
          >
            Explore Courses
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 glass text-foreground font-semibold rounded-lg hover-glow text-sm tracking-wide uppercase"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>

    {/* Promotional Banners */}
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {heroBanners.slice(0, 3).map((banner, i) => (
          <ScrollReveal key={i}>
            <Link
              to="/courses"
              className="block rounded-xl overflow-hidden hover-glow"
            >
              <img
                src={banner.img}
                alt={banner.alt}
                className="w-full h-auto object-cover hover-zoom"
                loading="lazy"
              />
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Stats Bar */}
    <section className="relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass-strong rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 0.1}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl text-primary">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Course Categories */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">
            OUR PROGRAMS
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <ScrollReveal key={course.title} delay={i * 0.1}>
              <Link
                to={course.path}
                className="group block relative rounded-xl overflow-hidden aspect-[4/5] hover-glow"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {course.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            The MAAC Advantage
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">
            WHY CHOOSE US
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="glass rounded-xl p-6 hover-glow group h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Student Work Showcase */}
    {/* <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
                MAAC Students' Work
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground">
                STUDENT SHOWCASE
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Creativity speaks louder than words. See how MAAC students are
                raising the bar with projects that blend skill, vision, and
                real-world training.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 glass text-primary font-semibold rounded-lg hover-glow text-sm tracking-wide uppercase"
            >
              See Magic in Action <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentWorks.map((work, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link
                to="/gallery"
                className="group relative rounded-xl overflow-hidden aspect-[4/3] hover-glow block"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover hover-zoom"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {work.title}
                    </p>
                    <p className="text-xs text-primary">
                      {work.student} • {work.category}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section> */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
                MAAC Students' Work
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground">
                STUDENT SHOWCASE
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Creativity speaks louder than words. See how MAAC students are
                raising the bar with projects that blend skill, vision, and
                real-world training.
              </p>
            </div>

            {/* Removed Link → Now just a styled button (no redirect) */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 glass text-primary font-semibold rounded-lg hover-glow text-sm tracking-wide uppercase cursor-default"
            >
              See Magic in Action <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentWorks.map((work, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              {/* Removed Link → Now plain div */}
              <div className="group relative rounded-xl overflow-hidden aspect-[4/3] hover-glow">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover hover-zoom"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {work.title}
                    </p>
                    <p className="text-xs text-primary">
                      {work.student} • {work.category}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* From MAAC to the Big Leagues */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            From MAAC to the Big Leagues
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            SUCCESS STORIES
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            MAAC alumni are making waves in top gaming studios, production
            houses, and VFX giants — and you could be next.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {alumniHighlights.map((alumni, i) => (
            <ScrollReveal key={alumni.name} delay={i * 0.1}>
              <div className="glass rounded-xl overflow-hidden hover-glow text-center">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover hover-zoom"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm text-foreground tracking-wider">
                    {alumni.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {alumni.role}
                  </p>
                  <p className="text-xs text-primary font-semibold mt-1">
                    {alumni.salary}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {alumni.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-8 text-center">
          <Link
            to="/placements"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Meet Your Future Employers <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Events & Awards Preview */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            Celebrating Creativity
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            EVENTS & AWARDS
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            From national-level competitions to industry-recognized awards, our
            students consistently push the boundaries of creative excellence.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: "24FPS International Animation Awards",
              desc: "India's most prestigious animation competition hosted by MAAC.",
            },
            {
              icon: Tv,
              title: "MAAC Spotlight",
              desc: "Annual showcase of outstanding student work across all disciplines.",
            },
            {
              icon: Trophy,
              title: "Industry Workshops",
              desc: "Regular masterclasses with top VFX supervisors, animators & filmmakers.",
            },
          ].map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 hover-glow h-full">
                <event.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground">{event.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-8 text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Events <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Centre Locator Preview */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            FIND A CENTRE NEAR YOU
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            With 150+ centres across India, world-class creative education is
            closer than you think.
          </p>
          <Link
            to="/locate"
            className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-red hover:brightness-110 transition-all duration-300 text-sm tracking-wide uppercase"
          >
            Locate a Centre
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-7xl text-foreground mb-4">
            READY TO CREATE?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of creative professionals who started their journey
            with MAAC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-red hover:brightness-110 transition-all duration-300 text-sm tracking-wide uppercase"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 glass text-foreground font-semibold rounded-lg hover-glow text-sm tracking-wide uppercase"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Index;
