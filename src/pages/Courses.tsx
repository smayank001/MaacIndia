import { Link } from "react-router-dom";
import { ArrowRight, Award } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { courseCategories, courses, recruiters } from "@/data/courses";

const trendingCourses = ["ad3d-edge-plus", "advfx-plus", "3d-game-art", "apdmc-plus", "apmg", "blender-pro"];

const Courses = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img src="/images/courses/animation/ad3d-edge-plus.jpg" alt="Courses at MAAC" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="font-display text-5xl md:text-8xl text-foreground mb-6">COURSES AT MAAC</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Step into the world of Animation, VFX, Gaming, Filmmaking, and Digital Media with MAAC. Here, you don't just learn at MAAC - you create, innovate, and become job-ready for exciting career opportunities.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Explore Our Courses - Category Cards */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-3">EXPLORE OUR COURSES</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">Our industry-aligned courses equip you with cutting-edge skills, real-world experience, and hands-on training using the latest tools and software.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courseCategories.map((cat, i) => (
            <ScrollReveal key={cat.slug} delay={(i % 8) * 0.08}>
              <Link to={`/courses/category/${cat.slug}`} className="group block glass rounded-xl overflow-hidden hover-glow h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-foreground mb-1 tracking-wider group-hover:text-primary transition-colors">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{cat.courses.length} {cat.courses.length === 1 ? "Program" : "Programs"}</span>
                    <span className="text-xs text-muted-foreground">Your Future Roles →</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {cat.careerRoles.slice(0, 3).map(r => (
                      <span key={r.title} className="text-[10px] bg-muted/50 text-muted-foreground px-2 py-0.5 rounded-full">{r.title}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Trending Programs */}
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6 tracking-wider">🔥 TRENDING PROGRAMS</h2>
        </ScrollReveal>
        <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {trendingCourses.map((slug, i) => {
            const course = courses[slug];
            if (!course) return null;
            return (
              <ScrollReveal key={slug} delay={i * 0.1} className="shrink-0 w-[280px] md:w-[320px]">
                <Link to={`/courses/${slug}`} className="group block rounded-xl overflow-hidden glass hover-glow">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{course.subtitle}</p>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Career Opportunities */}
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">EXCITING CAREER OPPORTUNITIES AT MAAC</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            MAAC is one of the leading institutes in India that offers Animation, Gaming, VFX, Broadcast, Photography, and Digital Design courses. Our centers across India and worldwide are equipped with state-of-the-art infrastructure, studio-like classrooms, and the latest industry tools and software.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { img: "/images/courses/careers/career-explore-1.jpg", label: "Film & VFX Studios" },
            { img: "/images/courses/careers/career-explore-2.jpg", label: "Gaming Industry" },
            { img: "/images/courses/careers/career-explore-4.jpg", label: "Digital Media" },
            { img: "/images/courses/careers/3d-animator.jpg", label: "Animation Studios" },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative aspect-square rounded-xl overflow-hidden group">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover hover-zoom" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-foreground">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Recruiters Marquee */}
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-4xl text-foreground tracking-wider">OUR RECRUITERS</h2>
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

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <Award className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">NOT SURE WHICH COURSE IS RIGHT FOR YOU?</h2>
          <p className="text-muted-foreground mb-8">Choosing the perfect path in Animation, VFX, or Game Design can be overwhelming, but we're here to help! Fill in the form and our career counselors will call you back.</p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg glow-red hover:brightness-110 transition-all duration-300 text-sm tracking-wide uppercase">
            Enquire Now
          </Link>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default Courses;
