import { Link } from "react-router-dom";
import { MapPin, Search, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { centres, states } from "@/data/centres";

const LocateCentre = () => {
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  const filtered = centres.filter(c => {
    const matchesSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.city.toLowerCase().includes(search.toLowerCase());
    const matchesState = !stateFilter || c.state === stateFilter;
    return matchesSearch && matchesState;
  });

  const stateNames = states.map(s => s.name);

  return (
    <Layout>
      <section className="section-padding pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">LOCATE A CENTRE</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mb-10">Find a MAAC centre near you. With 150+ centres across India, world-class creative education is just around the corner.</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text" placeholder="Search by city or centre name..."
                  value={search} onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <select
                value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}
                className="px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">All States</option>
                {stateNames.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((centre, i) => (
              <ScrollReveal key={centre.slug} delay={(i % 9) * 0.06}>
                <div className="glass rounded-xl p-6 hover-glow h-full flex flex-col">
                  <h3 className="font-display text-xl text-foreground mb-1 tracking-wider">{centre.name}</h3>
                  <p className="text-xs text-primary mb-3">{centre.city}, {centre.state}</p>
                  <p className="text-sm text-muted-foreground mb-2 flex items-start gap-2 flex-1">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {centre.address}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
                    <Phone className="w-4 h-4 text-primary" /> {centre.phone}
                  </p>
                  <Link
                    to={`/centre/${centre.slug}`}
                    className="w-full py-2.5 glass text-sm font-semibold text-foreground rounded-lg hover-glow uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No centres found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default LocateCentre;
