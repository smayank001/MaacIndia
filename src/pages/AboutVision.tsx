import { Eye, Target, Lightbulb, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const AboutVision = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">About MAAC</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-12">VISION & MISSION</h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Eye, title: "Our Vision", desc: "To be the global benchmark for creative education, nurturing the next generation of storytellers, artists, and technologists who shape the world's entertainment landscape." },
            { icon: Target, title: "Our Mission", desc: "To provide world-class, industry-relevant education in animation, VFX, gaming and filmmaking, empowering students with skills, creativity and confidence to excel in the creative industry." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15}>
              <div className="glass rounded-xl p-8 hover-glow h-full">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h2 className="font-display text-4xl text-foreground mb-4 tracking-wider">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="divider-gradient max-w-4xl mx-auto mb-16" />

        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8">OUR VALUES</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Lightbulb, title: "Innovation", desc: "Continuously evolving our curriculum and methods to stay ahead of industry trends." },
            { icon: Heart, title: "Excellence", desc: "Maintaining the highest standards in everything we do — from teaching to infrastructure." },
            { icon: Target, title: "Industry Focus", desc: "Every program is designed with direct input from industry professionals and studios." },
            { icon: Eye, title: "Student First", desc: "Our students' success is our primary measure of achievement." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 hover-glow h-full text-center">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutVision;
