import { Monitor, Cpu, Headphones, Camera, Gamepad2, Clapperboard } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const facilities = [
  { icon: Monitor, title: "Animation Labs", desc: "High-end workstations with latest GPUs, dual monitors, and Wacom tablets for 3D modeling and animation.", image: "/images/courses/career-1.jpg" },
  { icon: Cpu, title: "VFX Suites", desc: "Dedicated VFX compositing stations with color-calibrated monitors and professional-grade rendering capabilities.", image: "/images/courses/career-2.jpg" },
  { icon: Gamepad2, title: "Gaming Studio", desc: "VR-ready gaming development stations with the latest consoles, VR headsets, and development kits.", image: "/images/courses/career-4.jpg" },
  { icon: Camera, title: "Photography Studio", desc: "Professional photography setup with lighting equipment, green screens, and high-end camera systems.", image: "/images/students/life-at-maac-1.jpg" },
  { icon: Clapperboard, title: "Film Production Suite", desc: "Complete filmmaking setup with professional cameras, lighting, sound recording and editing bays.", image: "/images/students/life-at-maac-3.jpg" },
  { icon: Headphones, title: "Sound Studio", desc: "Acoustically treated sound studio for audio recording, mixing, and sound design for film and games.", image: "/images/students/life-at-maac-4.jpg" },
];

const Infrastructure = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">About MAAC</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">INFRASTRUCTURE</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">World-class facilities designed to provide the most immersive creative learning experience.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((f, i) => (
            <ScrollReveal key={f.title} delay={(i % 4) * 0.1}>
              <div className="glass rounded-xl overflow-hidden hover-glow group">
                <div className="aspect-video overflow-hidden">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                </div>
                <div className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-1 tracking-wider">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Infrastructure;
