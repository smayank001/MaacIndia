import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-12">CONTACT US</h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <div className="glass-strong rounded-xl p-8">
              <h3 className="font-display text-2xl text-foreground mb-6 tracking-wider">SEND US A MESSAGE</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                  <option>Select Course of Interest</option>
                  <option>3D Animation</option>
                  <option>VFX & Compositing</option>
                  <option>Game Design</option>
                  <option>Filmmaking</option>
                  <option>Graphic Design</option>
                  <option>Broadcast Graphics</option>
                </select>
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-red-sm hover:brightness-110 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl text-foreground mb-6 tracking-wider">REACH US AT</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Head Office", value: "Tower B, Peninsula Business Park, Lower Parel, Mumbai - 400013" },
                    { icon: Phone, label: "Toll Free", value: "1800-233-6088" },
                    { icon: Mail, label: "Email", value: "info@maacindia.com" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="glass rounded-xl p-4 flex items-start gap-4 hover-glow">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                        <p className="text-sm text-foreground mt-1">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
