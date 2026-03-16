import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Disclaimer = () => (
  <Layout>
    <section className="section-padding pt-32 md:pt-40">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">
            DISCLAIMER
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Products, services and other information provided on MAAC
              YELAHANKA website is for informational purposes only. While we
              strive to keep the information current and for delivery, we make
              no representations of any kind about the completeness, accuracy,
              suitability, or availability of the products, services, or related
              graphics contained on the website.
            </p>
            <p>
              Please note course details, duration, fees, and availability are
              subject to change without notice based on market needs and
              technological developments. Contact MAAC Yelahanka Bangalore for
              the most current information.
            </p>
            <p>
              Though companies in which students are placed through MAAC
              Yelahanka are provided, salary figures are not provided as
              compensation may vary, or may have increased or changed based on
              individual performance, market conditions, and other factors.
            </p>
            <p>
              Through this website, you may be able to link to other websites
              which are not under our control.
            </p>
            <p>
              We will not be liable if the website is found to be temporarily
              unavailable due to technical issues beyond our control.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
