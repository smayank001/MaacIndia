import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const LocateUs = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">
            Find Us
          </p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-12">
            LOCATE US
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <ScrollReveal className="lg:col-span-2">
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
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* QR Code */}
          <ScrollReveal delay={0.2}>
            <div className="glass rounded-xl p-8 flex flex-col items-center justify-center h-full text-center">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-display text-2xl text-foreground tracking-wider mb-2">
                SCAN TO VISIT US
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Open Google Maps instantly on your phone
              </p>
              <div className="bg-white rounded-xl p-4 mb-6">
                <img
                  src="/images/qr-location.png"
                  alt="Scan QR to locate MAAC Yelahanka on Google Maps"
                  className="w-40 h-40 object-contain"
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default LocateUs;
