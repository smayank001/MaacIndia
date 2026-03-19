import { useState } from "react";
import { openMailCompose } from "@/lib/mail";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const courseOptions = [
  "3D Animation",
  "VFX",
  "Game Design",
  "Broadcast",
  "Digital Content",
  "Motion Graphics",
  "Skill Enhancement",
];

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openMailCompose(
      "yelahanka@maacmail.com",
      "Book a Free Career Counseling - MAAC Yelahanka",
      `Hi MAAC Yelahanka,\n\nI would like to book a free career counseling session.\n\nFirst Name: ${form.firstName}\nLast Name: ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nCourse of Interest: ${form.course}\nCity: ${form.city}\nMessage: ${form.message}\n\nPlease get back to me at your earliest convenience.\n\nThank you.`,
    );
  };

  return (
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <select
                    name="course"
                    required
                    value={form.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground text-sm focus:outline-none focus:border-accent transition-colors [&>option]:bg-background [&>option]:text-foreground"
                  >
                    <option value="" disabled>
                      Select Course of Interest
                    </option>
                    {courseOptions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="city"
                    placeholder="Your City"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
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
                          "789, 1st Floor, MIG, 2nd Stage, Near Mother Dairy Circle, Side of Veer Savarkar Flyover, Major Sandeep Unnikrishnan Road, Yelahanka New Town, Bangalore – 560 064",
                      },
                      {
                        icon: Phone,
                        label: "Landline",
                        value: "080-4111 0555",
                      },
                      {
                        icon: Phone,
                        label: "Mobile",
                        value: "+91 74065 70001",
                      },
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
                          <p className="text-sm text-foreground mt-1">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="glass rounded-xl overflow-hidden aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3885.995427306094!2d77.57775913!3d13.09947604!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae185ef870ae61%3A0xa2122790b358fe37!2sMAAC%20Yelahanka%20-25%20Years%20of%20Excellence!5e0!3m2!1sen!2sin!4v1773304327652!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MAAC Yelahanka Location"
                  />
                </div>

                {/* QR Code */}
                <div className="glass rounded-xl p-6 flex flex-col items-center text-center">
                  <MapPin className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-display text-xl text-foreground tracking-wider mb-2">
                    SCAN TO VISIT US
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Open Google Maps instantly on your phone
                  </p>
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <img
                      src="/images/qr-location.png"
                      alt="Scan QR to locate MAAC Yelahanka on Google Maps"
                      className="w-36 h-36 object-contain"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    789, 1st Floor, MIG, 2nd Stage,
                    <br />
                    Near Mother Dairy Circle, Side of Veer Savarkar Flyover,
                    <br />
                    Major Sandeep Unnikrishnan Road,
                    <br />
                    Yelahanka New Town, Bangalore – 560 064
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
