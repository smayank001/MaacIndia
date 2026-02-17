import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { getCentreBySlug } from "@/data/centres";
import heroBg from "@/assets/hero-bg.jpg";

const CentreDetail = () => {
  const { slug } = useParams();
  const centre = getCentreBySlug(slug || "");

  if (!centre) {
    return (
      <Layout>
        <section className="section-padding pt-32 md:pt-40 text-center">
          <h1 className="font-display text-5xl text-foreground">Centre Not Found</h1>
          <Link to="/locate" className="text-primary mt-4 inline-block">← Back to Centres</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <img src={heroBg} alt={centre.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">{centre.city}, {centre.state}</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground">{centre.name}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">CENTRE DETAILS</h2>
              <div className="space-y-4">
                <div className="glass rounded-xl p-5 flex items-start gap-4 hover-glow">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Address</p>
                    <p className="text-foreground mt-1">{centre.address}</p>
                  </div>
                </div>
                <div className="glass rounded-xl p-5 flex items-start gap-4 hover-glow">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <p className="text-foreground mt-1">{centre.phone}</p>
                  </div>
                </div>
                <div className="glass rounded-xl p-5 flex items-start gap-4 hover-glow">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <p className="text-foreground mt-1">{centre.email}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">COURSES OFFERED</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {centre.courses.map(c => (
                  <div key={c} className="glass rounded-xl p-4 hover-glow">
                    <span className="text-sm text-foreground">{c}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">LOCATION</h2>
              <div className="glass rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Interactive map for {centre.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{centre.address}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <ScrollReveal>
                <div className="glass-strong rounded-xl p-6 glow-red-sm">
                  <h3 className="font-display text-2xl text-foreground mb-4 tracking-wider">ENQUIRE NOW</h3>
                  <p className="text-sm text-muted-foreground mb-6">Get in touch with {centre.name} for course details and admissions.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                      <option>Select Course</option>
                      {centre.courses.map(c => <option key={c}>{c}</option>)}
                    </select>
                    <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-red-sm hover:brightness-110 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Submit Enquiry
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

export default CentreDetail;
