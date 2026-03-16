import { Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Meghana K S",
    role: "HR Executive, Planotech Events and Marketing Pvt Ltd",
    image: "/images/alumni/meghana-ks.jpeg",
    text: "MAAC Yelahanka Bangalore has been a reliable institution for supporting our hiring requirements over the past few years. They have consistently provided skilled and creative candidates for roles in 3D Animation and Multimedia Graphics. We appreciate their prompt response and the effort taken to connect us with suitable candidates whenever required. MAAC Yelahanka Bangalore continues to be one of our preferred institutions for sourcing talented candidates for our creative manpower requirements.",
    rating: 5,
  },
  {
    name: "Vaibhav R Namji",
    role: "Digital Content Creation, Broadcast, Multimedia & 3D Animation Student",
    image: "/images/alumni/vaibhav-namji.jpg",
    text: 'I am just about to complete my two-year all-in-one Digital Content Creation, Broadcast, Multimedia and 3D Animation Career Program. Chose this course, since I wanted to get into the corporate world of any industry. Every business vertical today, be it media, press, satellite, manufacturing, or services today look for digital and design experts. From being clueless two years ago to being a confident young candidate in making for the Corporate digital world, I have come a long way. Nothing comes easy in life. But, to those, who are ready to work hard, MAAC YELAHANKA provides the right ambience. No words except just "thank you MAAC Yelahanka".',
    rating: 5,
  },
  {
    name: "Jnhanada N",
    role: "Multimedia Student from Mangalore",
    image: "/images/alumni/jnhanada-n.jpg",
    text: "I am from Mangalore. Prior to joining MAAC, I had done a Multimedia program from a University where I did not get enough exposure on topics vital in this field. So, after scouting for many institutions, we, a group of 5 students from the same college, joined MAAC Yelahanka. We were assisted with finding a right accommodation for all 5 of us for staying together in the proximity of the Institute. The structured curriculum along with pleasant practice environment has made us realize what we were missing. If only we had joined here first, we would have saved a few important years. Anyway, am thankful that we are here now and will catch up soon.",
    rating: 5,
  },
  {
    name: "Nency Thouroijam",
    role: "DAFM & APDMC Student from Imphal, Manipur",
    image: "/images/alumni/nency-thouroijam.jpg",
    text: "I am from Imphal (Manipur), North Eastern India. Staying in a Yelahanka PG accommodation, I have completed 1 year DAFM, a 3D Animation and Digital Film Making program from MAAC Yelahanka. As I found my training to be so satisfactory, I have now additionally taken up another 1.5 year course APDMC, Advanced Program in Digital Multimedia and Content Creation, which includes 2D Digital Graphic Designing and covers entire spectrum of pre-production, production and post-production syllabuses. I am in parallel working on developing my portfolio from learnings I got from these two courses, as your portfolio is the visiting card to getting shortlisted in various career placement and job opportunities.",
    rating: 5,
  },
];

const Testimonials = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            Student's World
          </p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-2">
            STUDENTS' TESTIMONIALS
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12">
            Here's what they have to say about their journey with MAAC
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 hover-glow h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-primary">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {t.text}
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-3 h-3 fill-primary text-primary"
                    />
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
