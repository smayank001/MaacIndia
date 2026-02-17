import { Link } from "react-router-dom";
import { Calendar, Award, Star, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import { events } from "@/data/events";

const awards = [
  { title: "Best Animation Institute", org: "FICCI", year: "2024" },
  { title: "Excellence in Creative Education", org: "NASSCOM", year: "2023" },
  { title: "Top VFX Training Centre", org: "CII", year: "2024" },
  { title: "Innovation in Education", org: "ASSOCHAM", year: "2023" },
];

const Events = () => (
  <Layout>
    <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
      <img src={heroBg} alt="Events" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Celebrating Creativity</p>
        <h1 className="font-display text-5xl md:text-8xl text-foreground">EVENTS & AWARDS</h1>
      </div>
    </section>

    {/* Featured Event */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <Link to={`/events/${events[0].slug}`} className="group block relative rounded-2xl overflow-hidden glass hover-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img src={events[0].image} alt={events[0].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest mb-3">
                  <Star className="w-3 h-3 fill-primary" /> Featured Event
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-foreground mb-3 group-hover:text-primary transition-colors">{events[0].title}</h2>
                <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4"><Calendar className="w-4 h-4 text-primary" /> {events[0].date}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{events[0].description.slice(0, 200)}...</p>
                <span className="self-start inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>

    {/* All Events */}
    <section className="section-padding pt-0">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">ALL EVENTS</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.slice(1).map((event, i) => (
            <ScrollReveal key={event.slug} delay={(i % 8) * 0.08}>
              <Link to={`/events/${event.slug}`} className="group block glass rounded-xl overflow-hidden hover-glow h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover hover-zoom" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="flex items-center gap-2 text-xs text-primary mb-2"><Calendar className="w-3 h-3" /> {event.date}</p>
                  <h3 className="font-display text-lg text-foreground mb-1 tracking-wider group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-xs text-muted-foreground flex-1">{event.tagline}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <div className="divider-gradient max-w-4xl mx-auto" />

    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <Award className="w-10 h-10 text-primary mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-12">AWARDS & RECOGNITION</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <ScrollReveal key={award.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 hover-glow text-center h-full">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-lg text-foreground mb-1">{award.title}</h3>
                <p className="text-xs text-muted-foreground">{award.org} • {award.year}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Events;
