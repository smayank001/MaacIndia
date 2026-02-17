import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { getBlogBySlug, blogPosts } from "@/data/blog";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getBlogBySlug(slug || "");

  if (!post) {
    return (
      <Layout>
        <section className="section-padding pt-32 md:pt-40 text-center">
          <h1 className="font-display text-5xl text-foreground">Article Not Found</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">← Back to Blog</Link>
        </section>
      </Layout>
    );
  }

  const related = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto w-full px-4 md:px-8 pb-12">
          <span className="text-primary text-xs uppercase tracking-widest mb-2 block">{post.category}</span>
          <h1 className="font-display text-4xl md:text-7xl text-foreground">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="space-y-6">
              {post.content.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed text-base md:text-lg">{para}</p>
              ))}
            </div>
          </ScrollReveal>

          <div className="divider-gradient my-12" />

          <ScrollReveal>
            <div className="glass-strong rounded-xl p-6 text-center glow-red-sm">
              <h3 className="font-display text-2xl text-foreground mb-3">INTERESTED IN A CREATIVE CAREER?</h3>
              <p className="text-sm text-muted-foreground mb-4">Explore our industry-aligned programs and start your creative journey today.</p>
              <Link to="/courses" className="inline-flex px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all text-sm uppercase tracking-wider">
                Explore Courses
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding pt-0">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">RELATED ARTICLES</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.1}>
                  <Link to={`/blog/${p.slug}`} className="group block glass rounded-xl overflow-hidden hover-glow h-full">
                    <div className="aspect-video overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover hover-zoom" />
                    </div>
                    <div className="p-5">
                      <span className="text-primary text-xs uppercase tracking-widest">{p.category}</span>
                      <h3 className="font-display text-lg text-foreground mt-1 group-hover:text-primary transition-colors">{p.title}</h3>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogDetail;
