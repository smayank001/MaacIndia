import {
  Trophy,
  Monitor,
  GraduationCap,
  Users,
  Zap,
  Sparkles,
  Globe,
  Building,
  MapPin,
  Train,
  Home,
  Briefcase,
  Shield,
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const reasons = [
  {
    icon: Trophy,
    title: "25+ Years of Excellence",
    desc: "India's most established and trusted creative education brand since 1999.",
  },
  {
    icon: Monitor,
    title: "State-of-the-Art Labs",
    desc: "High-performance workstations with the latest creative software and hardware.",
  },
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "Learn from industry professionals with 10+ years of production experience.",
  },
  {
    icon: Users,
    title: "85%+ Placement Rate",
    desc: "Strong placement support with 500+ hiring partner companies globally.",
  },
  {
    icon: Zap,
    title: "Hands-On Learning",
    desc: "Real-world projects from day one — build your portfolio while you learn.",
  },
  {
    icon: Sparkles,
    title: "Global Certifications",
    desc: "Internationally recognized certifications from Autodesk, Adobe, Unity and more.",
  },
  {
    icon: Globe,
    title: "150+ Centres",
    desc: "India's largest network of creative education centres across all major cities.",
  },
  {
    icon: Building,
    title: "Industry Connections",
    desc: "Direct partnerships with top studios, regular workshops and studio visits.",
  },
];

const yelahankaHighlights = [
  {
    icon: MapPin,
    title: "Location & Connectivity",
    desc: "Situated in North Bengaluru, it serves as a crucial transit point, featuring Yelahanka Junction railway station and close proximity to the airport. The upcoming Blue Line Metro (expected by June 2026) is set to further boost accessibility.",
  },
  {
    icon: Home,
    title: "Infrastructure & Lifestyle",
    desc: "The area is divided into Old Town and Yelahanka New Town. It boasts numerous parks, lakes (like Puttenahalli Bird Sanctuary), top-tier schools, colleges and hospitals, offering a greener, less crowded alternative to central Bangalore.",
  },
  {
    icon: Building,
    title: "Real Estate Hub",
    desc: "It is a premier residential destination, offering a mix of affordable apartments, luxury villas, and plotted developments, making it attractive to homebuyers and investors.",
  },
  {
    icon: Briefcase,
    title: "Economic Drivers",
    desc: "Proximity to Manyata Tech Park, KIADB zones, and Kirloskar Business Park makes it a preferred location for IT professionals. Phoenix Mall of Asia, known as the biggest mall of Asia is located at Byatarayanapura Yelahanka.",
  },
  {
    icon: Shield,
    title: "Defense Presence",
    desc: "Yelahanka is home to significant defense establishments, including the Air Force Station, BSF campus, and CRPF base.",
  },
];

const WhyMaac = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">
            About MAAC
          </p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">
            WHY MAAC YELAHANKA
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mb-12">
            What makes MAAC Yelahanka the most trusted creative education
            institute in Bangalore.
          </p>
        </ScrollReveal>

        {/* Why MAAC Yelahanka Section */}
        <ScrollReveal>
          <div className="glass-strong rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              WHY MAAC YELAHANKA?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Maac center was established in Yelahanka in the year of 2014. We
              have been the only Creative Designing Animation Institute in
              Yelahanka Bangalore which has withstood the market challenges
              through these highly fruitful 12 years. Students from across the
              length and breadth of the nation take admissions with us for
              making their dream careers in 3D Animation, VFX, Game Designing,
              Digital Content Creation, and Multimedia Graphic Designing. For
              outstation students, there are plenty of Paying Guest (PG)
              accommodation and rental options in and around the center. We help
              students find the right accommodation with or without food, as may
              be required.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={(i % 8) * 0.08}>
              <div className="glass rounded-xl p-6 hover-glow h-full">
                <r.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2 tracking-wider">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="divider-gradient max-w-4xl mx-auto my-16" />

        {/* Why Yelahanka Section */}
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            WHY YELAHANKA
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Yelahanka, a prominent locality in North Bengaluru, with a rich
            heritage is known as the birthplace of Kempegowda. It offers a blend
            of old-world charm, modern, planned infrastructure, and is closest
            to the Kempegowda International Airport. It has a railway station
            with connectivity to key towns and cities of Andhra Pradesh,
            Telangana, Karnataka, Tamil Nadu and a few other North Indian
            states.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {yelahankaHighlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 hover-glow h-full">
                <item.icon className="w-8 h-8 text-primary mb-3" />
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

        <ScrollReveal>
          <div className="glass rounded-xl p-6">
            <p className="text-muted-foreground leading-relaxed text-sm">
              Yelahanka maintains a quiet, self-sustained environment while
              being surrounded by rapid commercial and infrastructural growth.
              It is a premier residential destination, offering a mix of
              affordable apartments, luxury villas, and plotted developments,
              making it attractive to homebuyers and investors.
            </p>
          </div>
        </ScrollReveal>

        <div className="divider-gradient max-w-4xl mx-auto my-16" />

        <ScrollReveal>
          <div className="glass-strong rounded-2xl p-8 md:p-12 text-center glow-red-sm">
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
              THE MAAC DIFFERENCE
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
              MAAC is not just an institute — it's a creative ecosystem. From
              world-class infrastructure and industry-experienced faculty to
              national-level competitions and 500+ hiring partners, MAAC
              provides everything you need to build a successful career in the
              creative industry.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default WhyMaac;
