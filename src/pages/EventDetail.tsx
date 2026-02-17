import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowRight, Trophy, Star } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { getEventBySlug } from "@/data/events";

const EventDetail = () => {
  const { slug } = useParams();
  const event = getEventBySlug(slug || "");

  if (!event) {
    return (
      <Layout>
        <section className="section-padding pt-32 md:pt-40 text-center">
          <h1 className="font-display text-5xl text-foreground">Event Not Found</h1>
          <Link to="/events" className="text-primary mt-4 inline-block">← Back to Events</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
          <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest mb-3">
            <Star className="w-3 h-3 fill-primary" /> MAAC Event
          </span>
          <h1 className="font-display text-5xl md:text-8xl text-foreground">{event.title}</h1>
          <p className="text-lg text-muted-foreground mt-2 italic">{event.tagline}</p>
          <p className="flex items-center gap-2 text-sm text-muted-foreground mt-3"><Calendar className="w-4 h-4 text-primary" /> {event.date}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">ABOUT THE EVENT</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{event.description}</p>
            </ScrollReveal>

            <ScrollReveal className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">EVENT HIGHLIGHTS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.highlights.map((h, i) => (
                  <div key={i} className="glass rounded-xl p-4 flex items-start gap-3 hover-glow">
                    <Trophy className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">EVENT TIMELINE</h2>
              <div className="space-y-4">
                {event.timeline.map((t, i) => (
                  <div key={i} className="glass rounded-xl p-4 flex items-center gap-4 hover-glow">
                    <span className="font-display text-2xl text-primary min-w-[60px]">{t.year}</span>
                    <span className="text-sm text-muted-foreground">{t.detail}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <ScrollReveal>
                <div className="glass-strong rounded-xl p-6 glow-red-sm">
                  <h3 className="font-display text-2xl text-foreground mb-4 tracking-wider">REGISTER NOW</h3>
                  <p className="text-sm text-muted-foreground mb-6">Sign up to participate or attend this event.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                      <option>Select Centre</option>
                      <option>MAAC Andheri</option>
                      <option>MAAC Connaught Place</option>
                      <option>MAAC Koramangala</option>
                    </select>
                    <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-red-sm hover:brightness-110 transition-all text-sm uppercase tracking-wider">
                      Register
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
