export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  duration?: string;
  eligibility?: string;
  overview: string;
  modules?: string[];
  tools?: string[];
  careers: string[];
}

export interface CourseCategory {
  slug: string;
  title: string;
  image: string;
  desc: string;
  heroDesc: string;
  courses: string[];
  careerRoles: { title: string; image: string }[];
}

// Category hero images - use first course image as category banner
const catImages = {
  animation: "/images/courses/animation/ad3d-edge-plus.jpg",
  vfx: "/images/courses/vfx/advfx-plus.jpg",
  gameDesign: "/images/courses/game-design/3d-game-art.jpg",
  digitalContent: "/images/courses/digital-content/apdmc-plus.jpg",
  broadcast: "/images/courses/broadcast/apmg.jpg",
  skillEnhancement: "/images/courses/skill-enhancement/blender-pro.jpg",
  filmmaking: "/images/courses/animation/dafm.jpg",
};

export const courseCategories: CourseCategory[] = [
  {
    slug: "3d-animation",
    title: "3D Animation",
    image: catImages.animation,
    desc: "Master the art of storytelling through high-quality animation, modeling, texturing, lighting, and rigging.",
    heroDesc: "Step into the world of Animation, VFX, Gaming, Filmmaking, and Digital Media with MAAC. Here, you don't just learn at MAAC - you create, innovate, and become job-ready for exciting career opportunities.",
    courses: ["ad3d-edge-plus", "d3d", "3d-realtime-design-plus", "dafm"],
    careerRoles: [
      { title: "3D Animator", image: "/images/courses/careers/3d-animator.jpg" },
      { title: "Character Designer", image: "/images/courses/careers/character-designer.jpg" },
      { title: "Storyboard Artist", image: "/images/courses/careers/storyboard-artist.jpg" },
      { title: "Lighting & Rendering Artist", image: "/images/courses/careers/lighting-artist.jpg" },
      { title: "VFX Animator", image: "/images/courses/careers/3d-animator.jpg" },
    ],
  },
  {
    slug: "visual-effects",
    title: "Visual Effects (VFX)",
    image: catImages.vfx,
    desc: "Create stunning VFX for movies, TV, and gaming with advanced CGI, compositing, and motion tracking techniques.",
    heroDesc: "Master industry-grade VFX techniques like CG integration, compositing, and motion tracking. Train in real-world studio environments for careers in Hollywood, OTT, and ad film productions.",
    courses: ["advfx-plus", "vfx-plus", "compositing-editing-plus"],
    careerRoles: [
      { title: "VFX Compositor", image: "/images/courses/vfx/advfx-plus.jpg" },
      { title: "Motion Graphics Artist", image: "/images/courses/careers/storyboard-artist.jpg" },
      { title: "Matte Painter", image: "/images/courses/vfx/vfx-plus.jpg" },
      { title: "FX Artist", image: "/images/courses/vfx/compositing-editing.jpg" },
      { title: "Rotomation Artist", image: "/images/courses/careers/lighting-artist.jpg" },
      { title: "Pre-Visualization Artist", image: "/images/courses/careers/character-designer.jpg" },
    ],
  },
  {
    slug: "digital-content-creation",
    title: "Digital Content Creation",
    image: catImages.digitalContent,
    desc: "Become a digital content pro! Learn graphic design, animation, video production, and web design to create compelling digital media.",
    heroDesc: "At MAAC, we equip you with the creative and technical expertise needed to excel in this fast-evolving industry.",
    courses: ["apdmc-plus", "dgwa-plus", "apdmd", "ui-ux-design-pro"],
    careerRoles: [
      { title: "Graphic Designer", image: "/images/courses/digital-content/apdmc-plus.jpg" },
      { title: "UI/UX Designer", image: "/images/courses/digital-content/ui-ux.jpg" },
      { title: "Motion Graphics Artist", image: "/images/courses/careers/storyboard-artist.jpg" },
      { title: "3D Artist", image: "/images/courses/careers/3d-animator.jpg" },
      { title: "Web Designer", image: "/images/courses/digital-content/dgwa-plus.jpg" },
      { title: "Content Strategist", image: "/images/courses/digital-content/apdmd.jpg" },
      { title: "Digital Illustrator", image: "/images/courses/digital-content/apdmc-plus.jpg" },
    ],
  },
  {
    slug: "game-design",
    title: "Game Design",
    image: catImages.gameDesign,
    desc: "Step into the world of gaming! Learn game asset creation, real-time rendering, and interactive design.",
    heroDesc: "Gain industry-ready skills to thrive in the fast-growing world of game design and development.",
    courses: ["3d-game-art", "apgdi", "pmgdi", "adidg-plus"],
    careerRoles: [
      { title: "3D Game Artist", image: "/images/courses/game-design/3d-game-art.jpg" },
      { title: "Game Designer", image: "/images/courses/game-design/adidg-plus.jpg" },
      { title: "Game Animator", image: "/images/courses/game-design/pmgdi.jpg" },
      { title: "Technical Artist", image: "/images/courses/game-design/3d-game-art.jpg" },
      { title: "Environment Artist", image: "/images/courses/careers/career-explore-4.jpg" },
      { title: "Game UI/UX Designer", image: "/images/courses/game-design/adidg-plus.jpg" },
      { title: "Game Level Designer", image: "/images/courses/game-design/pmgdi.jpg" },
      { title: "Generative AI Artist", image: "/images/courses/skill-enhancement/genai.jpg" },
    ],
  },
  {
    slug: "broadcast",
    title: "Motion Graphics & Broadcast",
    image: catImages.broadcast,
    desc: "Master the art of motion design, video editing, and broadcast graphics for TV, digital media, and advertising.",
    heroDesc: "Learn industry-leading techniques for news, entertainment, and corporate storytelling.",
    courses: ["apmg", "broadcast-plus"],
    careerRoles: [
      { title: "Broadcast Designer", image: "/images/courses/broadcast/apmg.jpg" },
      { title: "Video Editor", image: "/images/courses/broadcast/broadcast-plus.jpg" },
      { title: "Corporate & Explainer Video Designer", image: "/images/courses/broadcast/apmg.jpg" },
      { title: "TV Channel Graphics Artist", image: "/images/courses/broadcast/broadcast-plus.jpg" },
      { title: "OTT & Streaming Content Designer", image: "/images/courses/broadcast/apmg.jpg" },
    ],
  },
  {
    slug: "filmmaking",
    title: "Filmmaking & Photography",
    image: catImages.filmmaking,
    desc: "Turn your vision into reality! Learn cinematography, video editing, sound design, and VFX for films, ads, and digital platforms.",
    heroDesc: "Master the art of filmmaking and photography with industry-standard equipment and techniques.",
    courses: ["dafm"],
    careerRoles: [
      { title: "Video Editor", image: "/images/courses/broadcast/broadcast-plus.jpg" },
      { title: "Cinematographer", image: "/images/courses/animation/dafm.jpg" },
      { title: "Film Director", image: "/images/courses/careers/career-explore-1.jpg" },
      { title: "Content Creator", image: "/images/courses/careers/career-explore-2.jpg" },
    ],
  },
  {
    slug: "skill-enhancement",
    title: "Skill Enhancement Courses",
    image: catImages.skillEnhancement,
    desc: "Master industry-leading tools and techniques with MAAC's focused short-term programs.",
    heroDesc: "Master industry-leading tools and techniques with MAAC's focused short-term programs.",
    courses: ["blender-pro", "cinema4d-pro", "max-pro", "maya-pro", "digital-photography", "design-viz-pro", "compositing-plus", "advanced-compositing", "genai-digital-content"],
    careerRoles: [
      { title: "3D Visualization Artist", image: "/images/courses/skill-enhancement/design-viz-pro.jpg" },
      { title: "Event & Exhibition Designer", image: "/images/courses/skill-enhancement/cinema4d-pro.jpg" },
      { title: "Motion Graphics Designer", image: "/images/courses/skill-enhancement/blender-pro.jpg" },
      { title: "Simulation & Interactive Designer", image: "/images/courses/skill-enhancement/maya-pro.jpg" },
      { title: "Video Editor", image: "/images/courses/broadcast/broadcast-plus.jpg" },
      { title: "VFX Artist", image: "/images/courses/skill-enhancement/compositing-plus.jpg" },
      { title: "Compositing Artist", image: "/images/courses/skill-enhancement/advanced-compositing.jpg" },
    ],
  },
];

export const courses: Record<string, Course> = {
  // ─── 3D Animation ───
  "ad3d-edge-plus": {
    slug: "ad3d-edge-plus",
    title: "AD3D EDGE PLUS",
    subtitle: "Advanced Program in 3D Animation",
    category: "3d-animation",
    image: "/images/courses/animation/ad3d-edge-plus.jpg",
    overview: "Master the complete 3D animation pipeline with industry-leading software and real-world techniques. Perfect for those who want to specialize in animation for films, TV, and digital media.",
    careers: ["3D Animator", "Character Designer", "Rigging Artist", "Lighting TD", "Texture Artist", "Layout Artist"],
  },
  "d3d": {
    slug: "d3d",
    title: "D3D",
    subtitle: "Program in 3D Animation Filmmaking",
    category: "3d-animation",
    image: "/images/courses/animation/d3d.jpg",
    overview: "A complete end-to-end training in 3D animation, covering the art of cinematic storytelling, digital filmmaking, and high-quality production techniques.",
    careers: ["Junior 3D Animator", "3D Modeler", "Visualization Artist", "Motion Graphics Artist"],
  },
  "3d-realtime-design-plus": {
    slug: "3d-realtime-design-plus",
    title: "3D & Real-Time Design Plus",
    subtitle: "Program in 3D and Real-Time Design",
    category: "3d-animation",
    image: "/images/courses/animation/ad3d-edge-plus.jpg",
    overview: "Dive into the limitless world of 3D innovation with a course that fuels your creativity and technical expertise.",
    careers: ["3D Designer", "Real-Time Artist", "Visualization Specialist"],
  },
  "dafm": {
    slug: "dafm",
    title: "DAFM",
    subtitle: "Program in Animation Filmmaking",
    category: "3d-animation",
    image: "/images/courses/animation/dafm.jpg",
    overview: "This course is ideal for beginners looking to explore 3D animation fundamentals, film aesthetics, and digital storytelling.",
    careers: ["Animation Director", "3D Animator", "Storyboard Artist", "Pre-Visualization Artist"],
  },

  // ─── VFX ───
  "advfx-plus": {
    slug: "advfx-plus",
    title: "ADVFX PLUS",
    subtitle: "Advanced Program in Visual Effects",
    category: "visual-effects",
    image: "/images/courses/vfx/advfx-plus.jpg",
    overview: "The ADVFX Plus course takes you deep into the world of high-end VFX production, mastering industry tools and real-world workflows. From CG lighting and advanced rendering to procedural FX, cloth simulations, and match-moving, you will gain the expertise to work in world-class studios.",
    careers: ["VFX Compositor", "Rotoscope Artist", "Matchmove Artist", "FX TD", "VFX Supervisor", "Matte Painter"],
  },
  "vfx-plus": {
    slug: "vfx-plus",
    title: "VFX PLUS",
    subtitle: "Program in Visual Effects",
    category: "visual-effects",
    image: "/images/courses/vfx/vfx-plus.jpg",
    overview: "A comprehensive training program covering all aspects of VFX production, including digital compositing, motion graphics, and real-time effects.",
    careers: ["VFX Compositor", "Compositing Artist", "Paint & Roto Artist"],
  },
  "compositing-editing-plus": {
    slug: "compositing-editing-plus",
    title: "COMPOSITING & EDITING PLUS",
    subtitle: "Program in Compositing & Editing",
    category: "visual-effects",
    image: "/images/courses/vfx/compositing-editing.jpg",
    overview: "Specialized training in the final stage of filmmaking and VFX, equipping you with skills in compositing, editing, and post-production.",
    careers: ["Junior Compositor", "Paint Artist", "Roto Artist", "Video Editor"],
  },

  // ─── Digital Content Creation ───
  "apdmc-plus": {
    slug: "apdmc-plus",
    title: "APDMC PLUS",
    subtitle: "Advanced Program in Digital Media Creation",
    category: "digital-content-creation",
    image: "/images/courses/digital-content/apdmc-plus.jpg",
    overview: "Master the complete spectrum of digital design with APDMC 2.0. From graphic design and video production to UI/UX and 3D content creation, this course empowers you with the skills needed to shape modern media experiences.",
    careers: ["Graphic Designer", "Video Producer", "Social Media Designer", "UI/UX Designer", "Motion Graphics Artist", "Content Strategist"],
  },
  "dgwa-plus": {
    slug: "dgwa-plus",
    title: "DGWA PLUS",
    subtitle: "Program in Graphics, Web & 2D Animation",
    category: "digital-content-creation",
    image: "/images/courses/digital-content/dgwa-plus.jpg",
    overview: "Gain expertise in graphic design, web development, and 2D animation with DGWA PLUS. This course prepares you to create visually stunning digital content across platforms.",
    careers: ["Multimedia Designer", "Web Designer", "2D Animator", "Graphic Artist"],
  },
  "apdmd": {
    slug: "apdmd",
    title: "APDMD",
    subtitle: "Advanced Program in Digital Media & Design",
    category: "digital-content-creation",
    image: "/images/courses/digital-content/apdmd.jpg",
    overview: "A comprehensive program that trains you in graphic design, web development, interactive media, and 2D animation, setting the foundation for a successful career in digital content creation.",
    careers: ["Multimedia Designer", "3D Generalist", "Motion Graphics Artist", "Content Creator"],
  },
  "ui-ux-design-pro": {
    slug: "ui-ux-design-pro",
    title: "UI & UX",
    subtitle: "Program in UI & UX Design Pro",
    category: "digital-content-creation",
    image: "/images/courses/digital-content/ui-ux.jpg",
    overview: "This program blends theoretical foundations with hands-on application, ensuring students develop a strong balance of creative problem-solving, technical expertise, and cutting-edge design principles. Whether you're crafting intuitive interfaces or optimizing user journeys, this course equips you with the skills to thrive in the modern digital landscape.",
    careers: ["UI Designer", "UX Designer", "Product Designer", "Interaction Designer"],
  },

  // ─── Game Design ───
  "3d-game-art": {
    slug: "3d-game-art",
    title: "3D GAME ART & INTEGRATION",
    subtitle: "Program in 3D Game Art & Integration",
    category: "game-design",
    image: "/images/courses/game-design/3d-game-art.jpg",
    overview: "Master the complete game asset creation pipeline, from 3D modeling and texturing to real-time engine integration. Learn to develop AAA game assets with cutting-edge techniques.",
    careers: ["Game Artist", "Character Designer", "Environment Artist", "Game UI Designer"],
  },
  "apgdi": {
    slug: "apgdi",
    title: "APGDI",
    subtitle: "Advanced Program In Game Design & Integration",
    category: "game-design",
    image: "/images/courses/game-design/3d-game-art.jpg",
    overview: "A career-focused program covering all aspects of game design and integration for mobile, PC, and console gaming. Gain expertise in game asset creation, level design, and real-time engine workflows.",
    careers: ["Game Developer", "Level Designer", "3D Artist", "Virtual Reality Artist"],
  },
  "pmgdi": {
    slug: "pmgdi",
    title: "PMGDI",
    subtitle: "Program In Mobile Game Design & Integration",
    category: "game-design",
    image: "/images/courses/game-design/pmgdi.jpg",
    overview: "Specialized in mobile game design, this course trains you in creating and publishing mobile games using Unity and Unreal Engine, with a focus on game monetization.",
    careers: ["Mobile Game Developer", "Game Designer", "Unity Developer"],
  },
  "adidg-plus": {
    slug: "adidg-plus",
    title: "ADIDG PLUS",
    subtitle: "Advanced Program In Interactive Design & Games Plus",
    category: "game-design",
    image: "/images/courses/game-design/adidg-plus.jpg",
    overview: "This program blends game art, UI/UX, metaverse integration, and real-time 3D workflows, preparing students for the evolving interactive media landscape.",
    careers: ["Interactive Designer", "Game Artist", "XR Developer", "Metaverse Designer"],
  },

  // ─── Motion Graphics & Broadcast ───
  "apmg": {
    slug: "apmg",
    title: "APMG",
    subtitle: "Advanced Program in Motion Graphics",
    category: "broadcast",
    image: "/images/courses/broadcast/apmg.jpg",
    overview: "Master the art of broadcast graphics, TV production, and digital media design with hands-on training in video editing, generative AI, and interactive design techniques.",
    careers: ["Motion Graphics Designer", "Broadcast Designer", "Title Designer", "Content Creator"],
  },
  "broadcast-plus": {
    slug: "broadcast-plus",
    title: "BROADCAST PLUS",
    subtitle: "Program in Broadcast Design",
    category: "broadcast",
    image: "/images/courses/broadcast/broadcast-plus.jpg",
    overview: "The broadcast industry's rapid growth offers diverse career paths. MAAC's Broadcast Plus course provides the essential skills and knowledge, preparing individuals for success in areas like news, talk shows, and scripted programming.",
    careers: ["Broadcast Designer", "Video Editor", "TV Graphics Artist", "OTT Content Designer"],
  },

  // ─── Skill Enhancement ───
  "blender-pro": {
    slug: "blender-pro",
    title: "BLENDER PRO",
    subtitle: "Master Blender for 3D Creation",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/blender-pro.jpg",
    overview: "Master Blender, the powerful open-source 3D suite used for modeling, animation, simulation, rendering, and game creation. Learn to create high-quality 3D assets and enhance your workflow for films, games, and digital content.",
    careers: ["3D Artist", "Blender Specialist", "Game Asset Artist"],
  },
  "cinema4d-pro": {
    slug: "cinema4d-pro",
    title: "CINEMA 4D PRO",
    subtitle: "Master Cinema 4D for Motion Graphics",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/cinema4d-pro.jpg",
    overview: "Cinema 4D is a leading tool for motion graphics and visual effects. Learn how to create dynamic 3D motion graphics, interactive animations, and professional-grade visual effects using Cinema 4D's robust MoGraph tools and rendering solutions.",
    careers: ["Motion Graphics Artist", "3D Designer", "Visual Effects Artist"],
  },
  "max-pro": {
    slug: "max-pro",
    title: "MAX PRO",
    subtitle: "Master 3ds Max for Animation & VFX",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/max-pro.jpg",
    overview: "Make your 3D skills to the next level with Autodesk 3ds Max, one of the industry's most powerful animation tools. This program covers texturing, modeling, lighting, and character setup to help you build a strong foundation in 3D animation, gaming, and VFX.",
    careers: ["3D Animator", "Visualization Artist", "Game Artist"],
  },
  "maya-pro": {
    slug: "maya-pro",
    title: "MAYA PRO",
    subtitle: "Master Maya for Film & Gaming",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/maya-pro.jpg",
    overview: "Autodesk Maya is the go-to software for 3D animation in films, gaming and VFX, known for its ability to create high-quality, ultra-realistic 3D models and effects. This course takes you deep into the world of advanced animation, modeling and rendering.",
    careers: ["3D Animator", "Character Artist", "FX Artist"],
  },
  "digital-photography": {
    slug: "digital-photography",
    title: "DIGITAL PHOTOGRAPHY",
    subtitle: "Master Photography & Visual Storytelling",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/digital-photography.jpg",
    overview: "The Digital Photography course at MAAC is designed to help you master the art and technique of photography, equipping you with the skills to excel in commercial photography, visual storytelling, and creative content production.",
    careers: ["Photographer", "Photo Editor", "Visual Content Creator"],
  },
  "design-viz-pro": {
    slug: "design-viz-pro",
    title: "DESIGN VIZ PRO",
    subtitle: "Master Architectural Visualization",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/design-viz-pro.jpg",
    overview: "Dive into the world of architectural visualization, event production, and simulation. Learn real-world lighting, interactive design, and 3D visualization techniques to create stunning visual experiences.",
    careers: ["3D Visualization Artist", "Event Designer", "Simulation Designer"],
  },
  "compositing-plus": {
    slug: "compositing-plus",
    title: "COMPOSITING PLUS",
    subtitle: "Master Compositing & VFX",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/compositing-plus.jpg",
    overview: "Learn the core principles of compositing, match moving, and visual storytelling. Work on live-action compositing, layer-based and node-based techniques, and create high-quality VFX shots.",
    careers: ["Compositor", "VFX Artist", "Matchmove Artist"],
  },
  "advanced-compositing": {
    slug: "advanced-compositing",
    title: "ADVANCED COMPOSITING",
    subtitle: "Advanced VFX Compositing Techniques",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/advanced-compositing.jpg",
    overview: "This program is for those who want to specialize in high-end compositing techniques for film, OTT, and advertising. Work on multipass compositing, advanced tracking, and projection workflows.",
    careers: ["Senior Compositor", "Lead Compositor", "VFX Supervisor"],
  },
  "genai-digital-content": {
    slug: "genai-digital-content",
    title: "Gen-AI for Digital Content Creators",
    subtitle: "AI-Powered Digital Content Creation",
    category: "skill-enhancement",
    image: "/images/courses/skill-enhancement/genai.jpg",
    overview: "The future of digital content creation is here! The GenAI for Digital Content Creators course equips aspiring designers, storytellers, and multimedia professionals with the skills to integrate Generative AI into their creative workflow.",
    careers: ["AI Content Creator", "Digital Designer", "Generative AI Artist"],
  },
};

// Recruiters marquee data
export const recruiters = [
  "PIXEL TEK", "DNEG", "MEDIA STUDIO", "RED CHILLIES", "SOLD OUT",
  "LIMINAL STUDIO", "AMAZON", "VISTAPRINT", "ACCENTURE", "STRINGS INFINITY",
  "FOLKS VFX", "CIMPRESS INDIA",
];

export const getCoursesByCategory = (categorySlug: string): Course[] => {
  const category = courseCategories.find(c => c.slug === categorySlug);
  if (!category) return [];
  return category.courses.map(slug => courses[slug]).filter(Boolean);
};
