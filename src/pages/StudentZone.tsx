import { Star, Award, Users, TrendingUp, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const lifeAtMaac = [
  { image: "/images/students/life-at-maac-1.jpg", title: "Train with Industry Experts & In-Demand Software", desc: "Master the tools and techniques used by top studios, guided by industry pros." },
  { image: "/images/students/life-at-maac-2.jpg", title: "Student Competitions & Challenges", desc: "Showcase your skills and shine with award-winning projects." },
  { image: "/images/students/life-at-maac-3.jpg", title: "Industry Masterclasses", desc: "Learn from top experts and gain real-world insights." },
  { image: "/images/students/life-at-maac-4.jpg", title: "Workshops & Seminars", desc: "Stay ahead with hands-on training in the latest tools & techniques." },
  { image: "/images/students/life-at-maac-5.jpg", title: "MAAC Events", desc: "Experience the ultimate creative extravaganza and showcase your talent." },
  { image: "/images/students/life-at-maac-6.jpg", title: "Network with Like-Minded Creatives", desc: "Connect, collaborate, and grow in a thriving creative community." },
  { image: "/images/students/life-at-maac-7.jpg", title: "Portfolio Building & Placement Assistance", desc: "Build a standard portfolio and launch your dream career." },
];

const counters = [
  { icon: Users, value: "50,000+", label: "Alumni Network" },
  { icon: Briefcase, value: "85%", label: "Placement Rate" },
  { icon: TrendingUp, value: "500+", label: "Hiring Partners" },
  { icon: Award, value: "100+", label: "Awards Won" },
];

const StudentZone = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
      <img src="/images/students/glimpse-1.png" alt="Life at MAAC" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Student's World</p>
        <h1 className="font-display text-5xl md:text-8xl text-foreground">CREATE, CONNECT & THRIVE</h1>
        <h2 className="font-display text-2xl md:text-4xl text-primary">AT MAAC</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">Your journey to the Media & Entertainment industry starts here. At MAAC, you don't just learn – you create, connect, and thrive in a world full of possibilities.</p>
      </div>
    </section>

    {/* Counters */}
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass-strong rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {counters.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-display text-4xl text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Life At MAAC */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">LIFE AT MAAC</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifeAtMaac.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i % 6) * 0.08}>
              <div className="glass rounded-xl overflow-hidden hover-glow h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-display text-lg text-foreground mb-2 tracking-wider">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Student Work Preview */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">STUDENTS WORK</h2>
          <p className="text-muted-foreground max-w-3xl mb-12">At MAAC, creativity is our heartbeat. Every day, our students push boundaries, creating stunning projects that stand as a testament to their dedication and the expert training they receive.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { image: "/images/students/work-warrior-vector.jpg", title: "Hooded Red Warrior", student: "Ritvik Kumar Das" },
            { image: "/images/students/work-ganesha-art.jpg", title: "Cute Ganesha Illustration", student: "Tanuj Dhami" },
            { image: "/images/students/work-starwars-sculpt.jpg", title: "Star Wars Toy Sculpting", student: "Mohik Dhakate" },
            { image: "/images/students/work-portrait-art.jpg", title: "Portrait Art Process", student: "Anjali Kashyap" },
            { image: "/images/students/work-mystic-kingdom.jpg", title: "Mystic Kingdom Character", student: "Chhandosi Mukherjee" },
          ].map((work, i) => (
            <ScrollReveal key={work.title} delay={i * 0.1}>
              <div className="group relative rounded-xl overflow-hidden aspect-[4/3] hover-glow">
                <img src={work.image} alt={work.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{work.title}</p>
                    <p className="text-xs text-primary">{work.student}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="mt-8 text-center">
          <Link to="/gallery" className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-red hover:brightness-110 transition-all duration-300 text-sm tracking-wide uppercase">
            View Student Projects
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default StudentZone;
