import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-12">
            CONTACT US
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <div className="glass-strong rounded-xl p-8">
              <h3 className="font-display text-2xl text-foreground mb-6 tracking-wider">
                BOOK A FREE CAREER COUNSELING
              </h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors">
                  <option>Select Course of Interest</option>
                  <option>3D Animation</option>
                  <option>VFX & Compositing</option>
                  <option>Game Design</option>
                  <option>Filmmaking</option>
                  <option>Graphic Design</option>
                  <option>Broadcast Graphics</option>
                </select>
                <input
                  type="text"
                  placeholder="Your City"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-accent text-accent-foreground font-semibold rounded-lg glow-gold-sm hover:brightness-110 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Book Free Counseling
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-foreground mb-6 tracking-wider">
                  MAAC YELAHANKA
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      label: "Centre Address",
                      value:
                        "789, 1st Floor, MIG, 2nd Stage, Side of Veer Savarkar Flyover, Yelahanka New Town, Bangalore – 560064",
                    },
                    { icon: Phone, label: "Landline", value: "080-4111 0555" },
                    { icon: Phone, label: "Mobile", value: "+91 74065 70001" },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "yelahanka@maacmail.com",
                    },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="glass rounded-xl p-4 flex items-start gap-4 hover-glow"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-sm text-foreground mt-1">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="glass rounded-xl overflow-hidden aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d77.5946!3d13.1007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA2JzAyLjUiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="MAAC Yelahanka Location"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
