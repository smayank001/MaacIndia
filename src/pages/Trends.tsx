import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts, blogCategories } from "@/data/blog";

const Trends = () => {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Lightbulb className="w-10 h-10 text-accent mb-4" />
            <h1 className="font-display text-5xl md:text-8xl text-foreground mb-4">
              INSIGHTS, CAREER GUIDANCE &<br />
              <span className="text-gradient-gold">
                ANIMATION INDUSTRY TRENDS
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mb-10">
              Industry news, career tips, student stories and creative insights
              from MAAC Yelahanka — your gateway to a career in animation, VFX,
              gaming and design.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-accent text-accent-foreground glow-gold-sm"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          {filtered.length > 0 && (
            <ScrollReveal className="mb-12">
              <Link
                to={`/blog/${filtered[0].slug}`}
                className="group block glass rounded-2xl overflow-hidden hover-glow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={filtered[0].image}
                      alt={filtered[0].title}
                      className="w-full h-full object-cover hover-zoom"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-accent text-xs uppercase tracking-widest mb-2">
                      {filtered[0].category}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3 group-hover:text-accent transition-colors">
                      {filtered[0].title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {filtered[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> MAAC Yelahanka
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {filtered[0].date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(1).map((post, i) => (
              <ScrollReveal key={post.slug} delay={(i % 6) * 0.08}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block glass rounded-xl overflow-hidden hover-glow h-full flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover-zoom"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-accent text-xs uppercase tracking-widest mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-display text-lg text-foreground mb-2 tracking-wider group-hover:text-accent transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trends;
