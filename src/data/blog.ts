import studentWork1 from "@/assets/student-work-1.jpg";
import studentWork2 from "@/assets/student-work-2.jpg";
import studentWork3 from "@/assets/student-work-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
}

export const blogCategories = [
  "All",
  "Animation",
  "VFX",
  "Gaming",
  "Filmmaking",
  "Design",
  "Industry News",
  "Career Tips",
  "Student Stories",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-3d-animation-2025",
    title: "The Future of 3D Animation in 2025 and Beyond",
    category: "Animation",
    image: studentWork1,
    date: "January 15, 2025",
    author: "MAAC Editorial",
    excerpt: "Explore the cutting-edge trends shaping the animation industry — from AI-assisted workflows to real-time rendering pipelines.",
    content: [
      "The animation industry is undergoing a massive transformation driven by advances in artificial intelligence, real-time rendering engines, and cloud-based collaboration tools. Studios worldwide are adopting new workflows that significantly reduce production timelines while enhancing visual quality.",
      "Real-time rendering engines like Unreal Engine 5 are being used not just for gaming but for animated film production, virtual production stages, and architectural visualization. This shift is creating new career opportunities for artists who can bridge traditional animation skills with real-time technology.",
      "AI-assisted tools are helping animators with in-betweening, motion capture cleanup, and even initial character design concepts. However, the creative vision and artistic direction remain firmly in the hands of skilled human artists — making formal training more important than ever.",
      "For aspiring animators, the message is clear: master the fundamentals of art and animation, then layer on knowledge of emerging technologies. Studios are looking for artists who understand both traditional principles and modern tools.",
    ],
  },
  {
    slug: "vfx-breakdown-indian-cinema",
    title: "VFX Breakdown: How Indian Cinema Is Going Global",
    category: "VFX",
    image: studentWork2,
    date: "February 1, 2025",
    author: "MAAC Editorial",
    excerpt: "Indian VFX studios are delivering world-class work for Hollywood blockbusters. Here's how the industry has evolved.",
    content: [
      "Indian VFX studios have quietly become powerhouses in the global entertainment industry. Studios like DNEG, Prime Focus, and Technicolor India are delivering Oscar-winning visual effects work for major Hollywood productions.",
      "The growth has been fueled by a combination of highly skilled talent, competitive pricing, and strong educational infrastructure. Institutes like MAAC have played a crucial role in training the workforce that powers these studios.",
      "Recent Indian films have also showcased world-class VFX work, proving that the domestic market is equally demanding. From realistic creature effects to massive environmental simulations, Indian VFX artists are pushing boundaries.",
      "For students considering a career in VFX, the opportunities are vast — from compositing and rotoscoping to FX simulation and virtual production. The key is building a strong foundation in both artistic skills and technical software.",
    ],
  },
  {
    slug: "gaming-industry-career-guide",
    title: "Career Guide: Breaking Into the Gaming Industry",
    category: "Gaming",
    image: studentWork3,
    date: "February 10, 2025",
    author: "MAAC Editorial",
    excerpt: "The gaming industry is booming. Here's your comprehensive guide to starting a career in game development and design.",
    content: [
      "The global gaming industry is projected to surpass $200 billion in revenue by 2025, making it one of the largest entertainment sectors worldwide. India's gaming market is growing at an unprecedented rate, creating thousands of new jobs annually.",
      "Career paths in gaming are diverse — from game design and programming to art, animation, sound design, and quality assurance. Each role requires a unique skill set, but all share a foundation in creativity and problem-solving.",
      "Game engines like Unity and Unreal Engine have democratized game development, allowing small teams to create compelling experiences. Studios are actively seeking artists and developers who can work efficiently with these platforms.",
      "Building a portfolio of personal projects, participating in game jams, and contributing to indie games are excellent ways to gain experience and demonstrate your abilities to potential employers.",
    ],
  },
  {
    slug: "importance-of-storytelling-filmmaking",
    title: "Why Storytelling Is the Most Important Skill in Filmmaking",
    category: "Filmmaking",
    image: heroBg,
    date: "February 20, 2025",
    author: "MAAC Editorial",
    excerpt: "Technical skills matter, but the ability to tell compelling stories is what separates great filmmakers from good ones.",
    content: [
      "In an age of incredible technology and visual spectacle, the most impactful films still succeed because of one thing: great storytelling. Technical excellence in cinematography, editing, and visual effects enhances a story, but cannot replace it.",
      "Aspiring filmmakers should invest as much time in understanding narrative structure, character development, and emotional pacing as they do in learning cameras and editing software.",
      "The best film schools and training programs emphasize storytelling alongside technical skills. At MAAC, filmmaking students study screenwriting, direction, and narrative theory as core subjects.",
      "Whether you're creating a 30-second ad or a feature film, the ability to engage an audience through story is the most valuable skill you can develop as a filmmaker.",
    ],
  },
  {
    slug: "ui-ux-design-trends-2025",
    title: "Top UI/UX Design Trends to Watch in 2025",
    category: "Design",
    image: studentWork1,
    date: "March 1, 2025",
    author: "MAAC Editorial",
    excerpt: "From glassmorphism to AI-powered personalization, discover the design trends shaping digital experiences this year.",
    content: [
      "The UI/UX design landscape continues to evolve rapidly, driven by new technologies, changing user expectations, and the growing importance of accessibility and inclusivity in digital design.",
      "Key trends include the continued rise of dark mode interfaces, micro-interactions that delight users, variable fonts for dynamic typography, and AI-powered personalization that adapts interfaces to individual users.",
      "Spatial computing and AR interfaces are creating entirely new design challenges and opportunities. Designers who can think in three dimensions and understand spatial interaction patterns will be in high demand.",
      "For design students, staying current with trends is important, but mastering fundamental design principles — hierarchy, contrast, alignment, proximity — remains the foundation of great design work.",
    ],
  },
  {
    slug: "women-in-animation-industry",
    title: "Women Leading the Way in the Animation Industry",
    category: "Industry News",
    image: studentWork2,
    date: "March 8, 2025",
    author: "MAAC Editorial",
    excerpt: "Celebrating the talented women who are breaking barriers and leading creative teams in the global animation industry.",
    content: [
      "The animation industry is seeing a welcome increase in women taking on leadership roles — from directing animated features to leading VFX teams at major studios.",
      "Organizations and educational institutions are actively working to create more inclusive environments and mentorship programs. MAAC has seen a steady increase in female enrollment across all creative programs.",
      "Female graduates from MAAC are working at top studios worldwide, contributing to blockbuster films, AAA games, and award-winning animated content.",
      "The industry still has progress to make, but the trajectory is positive. Young women considering careers in animation, VFX, and gaming have more role models and opportunities than ever before.",
    ],
  },
  {
    slug: "building-portfolio-creative-career",
    title: "How to Build a Portfolio That Gets You Hired",
    category: "Career Tips",
    image: studentWork3,
    date: "March 15, 2025",
    author: "MAAC Editorial",
    excerpt: "Your portfolio is your most powerful career tool. Learn how to build one that stands out to recruiters and studios.",
    content: [
      "In creative industries, your portfolio is often more important than your resume. It's the first thing recruiters look at and the primary basis for hiring decisions.",
      "Quality over quantity is the golden rule. Five exceptional pieces will get you further than twenty mediocre ones. Each piece should demonstrate specific skills relevant to your target role.",
      "Tailor your portfolio to the jobs you're applying for. A game art portfolio should look different from a VFX compositing reel. Research what studios look for and curate accordingly.",
      "Include process work alongside finished pieces. Studios want to see how you think and solve problems, not just the final output. Breakdowns, wireframes, and work-in-progress shots add depth to your portfolio.",
    ],
  },
  {
    slug: "maac-student-wins-international-award",
    title: "MAAC Student Wins International Animation Award",
    category: "Student Stories",
    image: heroBg,
    date: "March 25, 2025",
    author: "MAAC Editorial",
    excerpt: "A MAAC student's animated short film receives recognition at a prestigious international film festival.",
    content: [
      "A recent MAAC graduate's animated short film has been selected and awarded at a prestigious international animation festival, bringing pride to the institute and inspiring current students.",
      "The film, created as part of the student's final year project, showcases exceptional storytelling, character animation, and technical execution — all skills developed during their time at MAAC.",
      "The student credits the institute's hands-on curriculum, industry-experienced faculty, and access to professional-grade tools for enabling the creation of a competition-worthy film.",
      "This achievement highlights the caliber of talent emerging from MAAC's programs and reinforces the institute's position as a leader in creative education.",
    ],
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find(p => p.slug === slug);
