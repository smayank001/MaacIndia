import { Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import avatarJishnu from "@/assets/testimonial-jishnu.png";
import avatarStuti from "@/assets/testimonial-stuti.png";
import avatarSriyansh from "@/assets/testimonial-sriyansh.png";
import avatarViplav from "@/assets/testimonial-viplav.png";

const testimonials = [
  {
    name: "Jishnu D Rajan",
    role: "Pursued Compositing and Editing Plus course from MAAC",
    image: avatarJishnu,
    text: "I have successfully completed my course from MAAC and got placed as a 3D Matte painting Artist in Technicolor. I was a student of the Compositing & Editing Plus program. I am from Wayanad district in Kerala. I took the decision to join the Compositing and Editing Plus course at MAAC during lockdown. Online method of learning was new for me but my centre made it easy by using online learning tools. I completed my entire course online and got the placement at Technicolor when I was at home. The teaching methodology used by the faculty at MAAC was up to industry standards and I was always supported by the faculty for my showreel development. The Placement team helped me to get the job that I always wanted.",
    rating: 5,
  },
  {
    name: "Stuti Verma",
    role: "Graphic Design student at MAAC",
    image: avatarStuti,
    text: "I have completed my Graphic Designing course from MAAC and have been successfully placed at Warpli as a Graphic Designer. I have been working with Warpli since April 2022. I am very happy and satisfied with the quality of training and learning provided at MAAC. My course was of 3 months which I completed online with a smooth learning experience. I am also thankful to the Placement cell at MAAC. I was a little shy in nature and because of that getting a job was a bit difficult for me in the beginning, but the placement team helped me to overcome that. They are really good at their work.",
    rating: 5,
  },
  {
    name: "Sriyansh Gupta",
    role: "Worked on films like Sooryavanshi, Jersey, and Gangubai Kathiawadi and more",
    image: avatarSriyansh,
    text: "I have completed my ADVFX Plus course from MAAC and am now working as a FX Generalist & Crowd TD at NYVFXWAALA. It was in 2011 when I saw RaOne in theatre and I decided to get into the VFX industry. But what worried me was how to get into a VFX course and become eligible to join the industry. After completing my studies, I came across MAAC. The faculty, programs, fee structure, infrastructure, and placement cell at MAAC left me awestruck. Joining MAAC was the turning point in my life. I have worked on several films including Sooryavanshi, Jersey, Gangubai Kathiawadi, Bachchan Pandey, Runway 34, and Heropanti 2.",
    rating: 5,
  },
  {
    name: "Viplav Bajpai",
    role: "3D Artist at IPE Global Ltd",
    image: avatarViplav,
    text: "I am currently working as a 3D Artist in IPE Global Ltd. MAAC has really helped me a lot to reach this position. The faculty at MAAC has also helped me a lot during the course to work on projects like making films, videos, animation etc. I am now able to implement those learning into practical works while working as a 3D artist myself.",
    rating: 5,
  },
];

const Testimonials = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Student's World</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-2">STUDENTS' TESTIMONIALS</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">Here's what they have to say about their journey with MAAC</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 hover-glow h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{t.text}</p>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
