import { Users } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import studentWork1 from "@/assets/student-work-1.jpg";
import studentWork2 from "@/assets/student-work-2.jpg";
import studentWork3 from "@/assets/student-work-3.jpg";

const leaders = [
  { name: "Aptech Leadership", role: "Parent Organization", image: studentWork1, desc: "MAAC is part of Aptech Ltd, a pioneer in the education business since 1986, with a global footprint spanning 40+ countries." },
  { name: "Academic Board", role: "Curriculum & Standards", image: studentWork2, desc: "Our academic board comprises industry veterans from top studios who ensure our curriculum stays aligned with global industry demands." },
  { name: "Centre Directors", role: "Operations & Quality", image: studentWork3, desc: "Experienced directors at each centre ensure consistent quality delivery and student support across all 150+ locations." },
];

const Leadership = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">About MAAC</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">LEADERSHIP</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">Meet the visionaries driving MAAC's mission to transform creative education in India.</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leaders.map((l, i) => (
            <ScrollReveal key={l.name} delay={i * 0.15}>
              <div className="glass rounded-xl overflow-hidden hover-glow h-full">
                <div className="aspect-square overflow-hidden">
                  <img src={l.image} alt={l.name} className="w-full h-full object-cover hover-zoom" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-foreground mb-1 tracking-wider">{l.name}</h3>
                  <p className="text-xs text-primary uppercase tracking-widest mb-3">{l.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="divider-gradient max-w-4xl mx-auto my-16" />

        <ScrollReveal>
          <div className="glass-strong rounded-2xl p-8 md:p-12 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">PART OF APTECH</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              MAAC is a division of Aptech Ltd, India's leading education company with a 35+ year legacy. Aptech operates in 40+ countries, training millions of students in IT, education, and creative technologies.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Leadership;
