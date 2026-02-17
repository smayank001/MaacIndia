import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const galleryItems = [
  { image: "/images/students/work-warrior-vector.jpg", category: "Design", title: "Hooded Red Warrior – Vector Art", student: "Ritvik Kumar Das" },
  { image: "/images/students/work-ganesha-art.jpg", category: "Digital Art", title: "Cute Ganesha – Digital Painting", student: "Tanuj Dhami" },
  { image: "/images/students/work-starwars-sculpt.jpg", category: "3D Modeling", title: "Star Wars Toy Sculpting Gallery", student: "Mohik Dhakate" },
  { image: "/images/students/work-portrait-art.jpg", category: "Digital Art", title: "Portrait Art – Old Man with Tea", student: "Anjali Kashyap" },
  { image: "/images/students/work-mystic-kingdom.jpg", category: "Design", title: "Mystic Kingdom – Character Design", student: "Chhandosi Mukherjee" },
  { image: "/images/students/life-at-maac-1.jpg", category: "Campus", title: "Train with Industry Experts", student: "MAAC" },
  { image: "/images/students/life-at-maac-2.jpg", category: "Campus", title: "Student Competitions & Challenges", student: "MAAC" },
  { image: "/images/students/life-at-maac-3.jpg", category: "Campus", title: "Industry Masterclasses", student: "MAAC" },
  { image: "/images/students/life-at-maac-4.jpg", category: "Campus", title: "Workshops & Seminars", student: "MAAC" },
  { image: "/images/students/life-at-maac-5.jpg", category: "Events", title: "MAAC Events", student: "MAAC" },
  { image: "/images/students/life-at-maac-6.jpg", category: "Campus", title: "Network with Creatives", student: "MAAC" },
  { image: "/images/students/life-at-maac-7.jpg", category: "Campus", title: "Portfolio Building & Placement", student: "MAAC" },
  { image: "/images/students/glimpse-1.png", category: "Events", title: "A Glimpse into MAAC Life", student: "MAAC" },
  { image: "/images/courses/career-1.jpg", category: "Infrastructure", title: "MAAC Creative Workspace", student: "MAAC" },
  { image: "/images/courses/career-2.jpg", category: "Infrastructure", title: "Animation Lab", student: "MAAC" },
  { image: "/images/courses/career-4.jpg", category: "Infrastructure", title: "VFX Editing Suite", student: "MAAC" },
];

const categories = ["All", "Design", "Digital Art", "3D Modeling", "Campus", "Events", "Infrastructure"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter(i => i.category === filter);

  return (
    <Layout>
      <section className="section-padding pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Student's World</p>
            <h1 className="font-display text-5xl md:text-8xl text-foreground mb-2">FEATURED STUDENT CREATIONS</h1>
            <h2 className="font-display text-3xl md:text-5xl text-primary mb-4">– Best of MAAC.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-4">Creativity speaks louder than words.</p>
            <p className="text-muted-foreground max-w-3xl mb-10">See how MAAC students are raising the bar with projects that blend skill, vision, and real-world training. Every month, we feature the most outstanding projects from our talented students.</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filter === cat ? "bg-primary text-primary-foreground glow-red-sm" : "glass text-muted-foreground hover:text-foreground"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={`${item.title}-${i}`} delay={(i % 8) * 0.05}>
                <div
                  className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer hover-glow"
                  onClick={() => setLightbox(i)}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-primary">{item.student} • {item.category}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filtered[lightbox]?.image}
              alt={filtered[lightbox]?.title}
              className="max-w-full max-h-[85vh] rounded-xl cinematic-shadow"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
