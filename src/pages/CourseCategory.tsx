import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { courseCategories, getCoursesByCategory, recruiters } from "@/data/courses";

const CourseCategory = () => {
  const { slug } = useParams();
  const category = courseCategories.find(c => c.slug === slug);
  const categoryCourses = getCoursesByCategory(slug || "");

  if (!category) {
    return (
      <Layout>
        <section className="section-padding pt-32 md:pt-40 text-center">
          <h1 className="font-display text-5xl text-foreground">Category Not Found</h1>
          <Link to="/courses" className="text-primary mt-4 inline-block">← Back to Courses</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <img src={category.image} alt={category.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">Course Category</p>
          <h1 className="font-display text-5xl md:text-8xl text-foreground">{category.title.toUpperCase()}</h1>
          <p className="text-muted-foreground text-lg mt-3 max-w-3xl">{category.heroDesc}</p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
              OUR {category.title.toUpperCase()} COURSES
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryCourses.map((course, i) => (
              <ScrollReveal key={course.slug} delay={i * 0.1}>
                <Link to={`/courses/${course.slug}`} className="group block glass rounded-xl overflow-hidden hover-glow h-full">
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden shrink-0">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden sm:block" />
                      <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center font-display text-lg text-primary-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col justify-center">
                      <h3 className="font-display text-xl md:text-2xl text-foreground mb-1 tracking-wider group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-sm text-primary/80 mb-3">{course.subtitle}</p>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{course.overview}</p>
                      <span className="flex items-center gap-2 text-sm text-primary font-medium">
                        Know More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              CAREER OPPORTUNITIES IN {category.title.toUpperCase()}
            </h2>
            <p className="text-muted-foreground mb-8">After completing any of these courses, you can work as</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {category.careerRoles.map((role, i) => (
              <ScrollReveal key={role.title} delay={i * 0.08}>
                <div className="glass rounded-xl overflow-hidden hover-glow group">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={role.image} alt={role.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <p className="p-3 text-sm font-medium text-foreground text-center">{role.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Now CTA */}
      <section className="relative py-20 overflow-hidden">
        <img src="/images/courses/banners/vfx-join.jpg" alt="Join MAAC" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">WANT TO JOIN AFTER 12TH?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your search ends here! MAAC offers job-oriented programs that help you master {category.title} and prepare you for a successful career in the entertainment industry.
            </p>
            <Link to="/contact" className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-red hover:brightness-110 transition-all duration-300 text-sm tracking-wide uppercase">
              Join Now
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Recruiters Marquee */}
      <section className="py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider">OUR RECRUITERS</h2>
            <p className="text-muted-foreground text-sm mt-1">Some of the leading studios & companies that have recruited MAAC students include:</p>
          </ScrollReveal>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...recruiters, ...recruiters, ...recruiters].map((name, i) => (
              <span key={i} className="mx-6 text-lg font-display text-muted-foreground/60 tracking-widest">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Enquire CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">YOUR FUTURE STARTS HERE!</h2>
            <p className="text-muted-foreground mb-8">Join MAAC's {category.title} courses and turn your creativity into a thriving career.</p>
            <Link to="/contact" className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-red hover:brightness-110 transition-all duration-300 text-sm tracking-wide uppercase">
              Enquire Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default CourseCategory;
