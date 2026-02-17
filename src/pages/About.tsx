import { Link } from "react-router-dom";
import { Target, Eye, Building, Handshake, Award, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const timeline = [
  { year: "1999", title: "Founded", desc: "MAAC established as India's first Animation, VFX & Multimedia institute." },
  { year: "2005", title: "National Expansion", desc: "Expanded to 50+ centres across major Indian cities." },
  { year: "2010", title: "International Recognition", desc: "Partnered with global studios and software companies." },
  { year: "2015", title: "Gaming & AR/VR", desc: "Launched cutting-edge gaming and immersive technology programs." },
  { year: "2020", title: "Digital Transformation", desc: "Hybrid learning model with online + offline training." },
  { year: "2024", title: "150+ Centres", desc: "India's largest network of creative education centres." },
];

const partners = ["Autodesk", "Adobe", "Unity", "Epic Games", "Foundry", "Maxon"];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
      <img src="/images/about/about-maac.png" alt="About MAAC" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">About Us</p>
        <h1 className="font-display text-5xl md:text-8xl text-foreground">ABOUT</h1>
        <h2 className="font-display text-3xl md:text-6xl text-foreground">MAYA ACADEMY OF ADVANCED CREATIVITY</h2>
      </div>
    </section>

    {/* Intro */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Our Story</p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">A LEGACY OF EXCELLENCE</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Maya Academy of Advanced Creativity (MAAC) is the Media & Entertainment education brand of Aptech Ltd., a global leader in education and training since 1986.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With 38+ years of expertise, Aptech has shaped millions of careers across industries. MAAC continues this legacy, offering world-class Animation, VFX, Gaming, Filmmaking, and Digital Media training designed to meet industry demands.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="rounded-xl overflow-hidden glow-red">
            <img src="/images/about/maac-workshop.jpg" alt="MAAC Workshop Classes" className="w-full aspect-video object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* What Makes MAAC Different */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">WHAT MAKES MAAC DIFFERENT?</h2>
          <p className="text-muted-foreground max-w-3xl mb-12">At MAAC, we don't just teach – we transform careers. Whether you aspire to be an animator, VFX artist, game designer, filmmaker, or digital creator, we equip you with the skills, tools, and global opportunities to succeed.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { img: "/images/about/industry-focused.png", title: "Industry-Focused Courses", desc: "Our programs are designed with global industry standards, ensuring you learn the latest tools, techniques, and trends to stay ahead in the competitive media & entertainment industry." },
            { img: "/images/about/young-learners.jpg", title: "Hands-on, Project-Based Learning", desc: "Gain real-world experience by working on industry-driven projects, short films, game assets, and VFX sequences, preparing you for professional challenges." },
            { img: "/images/courses/career-1.jpg", title: "Expert-Led Training", desc: "Learn from top professionals, VFX supervisors, animators, and game designers who bring years of industry expertise into the classroom." },
            { img: "/images/about/placement-assistance.jpg", title: "Placement Assistance", desc: "On successfully completing individual courses and getting access to placement support, portfolio-building guidance, mock interviews, and more." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass rounded-xl overflow-hidden hover-glow h-full">
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Vision & Mission */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: Eye, title: "Our Vision", desc: "To be the global benchmark for creative education, nurturing the next generation of storytellers, artists, and technologists who shape the world's entertainment landscape." },
          { icon: Target, title: "Our Mission", desc: "To provide world-class, industry-relevant education in animation, VFX, gaming and filmmaking, empowering students with skills, creativity and confidence to excel in the creative industry." },
        ].map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.15}>
            <div className="glass rounded-xl p-8 hover-glow h-full">
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-3xl text-foreground mb-4 tracking-wider">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Timeline */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12 text-center">OUR JOURNEY</h2>
        </ScrollReveal>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.1}>
              <div className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <p className="font-display text-4xl text-primary">{item.year}</p>
                  <h3 className="font-display text-xl text-foreground tracking-wider">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-red-sm mt-2" />
                <div className="md:hidden pl-10">
                  <p className="font-display text-3xl text-primary">{item.year}</p>
                  <h3 className="font-display text-lg text-foreground tracking-wider">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    {/* Partners */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <Handshake className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">INDUSTRY PARTNERS</h2>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((p, i) => (
            <ScrollReveal key={p} delay={i * 0.08}>
              <div className="glass rounded-xl px-8 py-6 hover-glow">
                <span className="font-display text-2xl text-foreground tracking-wider">{p}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
