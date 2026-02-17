import { useParams, Link } from "react-router-dom";
import { Briefcase, Send, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { courses as courseData, courseCategories, recruiters } from "@/data/courses";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courseData[slug || ""];

  if (!course) {
    return (
      <Layout>
        <section className="section-padding pt-32 md:pt-40 text-center">
          <h1 className="font-display text-5xl text-foreground">Course Not Found</h1>
          <Link to="/courses" className="text-primary mt-4 inline-block">← Back to Courses</Link>
        </section>
      </Layout>
    );
  }

  const category = courseCategories.find(c => c.slug === course.category);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 pb-12">
          <Link to={`/courses/category/${course.category}`} className="inline-flex items-center gap-2 text-primary text-sm mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4" /> {category?.title || "Back"}
          </Link>
          <h1 className="font-display text-5xl md:text-8xl text-foreground">{course.title}</h1>
          <p className="text-lg text-primary/80 mt-2">{course.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">COURSE OVERVIEW</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{course.overview}</p>
            </ScrollReveal>

            {/* Career Outcomes */}
            <ScrollReveal className="mt-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">CAREER OUTCOMES</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.careers.map((career) => (
                  <div key={career} className="glass rounded-xl p-4 flex items-center gap-3 hover-glow">
                    <Briefcase className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{career}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Related Courses */}
            {category && (
              <ScrollReveal className="mt-12">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">MORE IN {category.title.toUpperCase()}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.courses.filter(s => s !== course.slug).map(s => {
                    const related = courseData[s];
                    if (!related) return null;
                    return (
                      <Link key={s} to={`/courses/${s}`} className="group glass rounded-xl overflow-hidden hover-glow flex items-center gap-4 p-3">
                        <img src={related.image} alt={related.title} className="w-20 h-20 rounded-lg object-cover shrink-0" loading="lazy" />
                        <div>
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{related.title}</h4>
                          <p className="text-xs text-muted-foreground">{related.subtitle}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar - Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <ScrollReveal>
                <div className="glass-strong rounded-xl p-6 glow-red-sm">
                  <h3 className="font-display text-2xl text-foreground mb-2 tracking-wider">ENQUIRE NOW</h3>
                  <p className="text-sm text-muted-foreground mb-6">Fill in your details and our counsellor will get in touch with you.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Full Name *" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <input type="tel" placeholder="Mobile Number *" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                    <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                      <option>Select Course Interested In *</option>
                      <option>3D Animation</option>
                      <option>Film Making</option>
                      <option>Gaming and ID</option>
                      <option>VFX</option>
                      <option>Digital Content Creation</option>
                      <option>AVGC</option>
                      <option>Short Term Courses</option>
                      <option>Bachelor of Vocation (B.Voc.)</option>
                      <option>GEN AI</option>
                      <option>Broadcast</option>
                    </select>
                    <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                      <option>Select State *</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>West Bengal</option>
                      <option>Gujarat</option>
                      <option>Rajasthan</option>
                      <option>Uttar Pradesh</option>
                      <option>Madhya Pradesh</option>
                    </select>
                    <select className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border/50 text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors">
                      <option>Select Centre *</option>
                    </select>
                    <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-red-sm hover:brightness-110 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Submit
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      By clicking on Submit, you agree to our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                    </p>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl text-foreground tracking-wider">OUR RECRUITERS</h2>
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
    </Layout>
  );
};

export default CourseDetail;
