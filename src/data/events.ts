import studentWork1 from "@/assets/student-work-1.jpg";
import studentWork2 from "@/assets/student-work-2.jpg";
import studentWork3 from "@/assets/student-work-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export interface EventData {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  date: string;
  description: string;
  highlights: string[];
  timeline: { year: string; detail: string }[];
}

export const events: EventData[] = [
  {
    slug: "24fps",
    title: "24FPS International Animation Awards",
    tagline: "India's Most Prestigious Animation Competition",
    image: studentWork3,
    date: "December 2025",
    description: "24FPS is India's most prestigious platform for budding animators, VFX artists, game designers and filmmakers. Hosted annually by MAAC, this international competition attracts thousands of entries across multiple creative categories. Winners receive industry recognition, internship opportunities and cash prizes.",
    highlights: [
      "International jury panel of industry veterans",
      "Categories spanning animation, VFX, gaming & filmmaking",
      "Live showcase event with 2000+ attendees",
      "Internship opportunities with leading studios",
      "Cash prizes worth ₹10 lakhs+",
      "Celebrity guests from the entertainment industry",
    ],
    timeline: [
      { year: "2010", detail: "24FPS launched as a national competition" },
      { year: "2015", detail: "Expanded to international entries" },
      { year: "2019", detail: "Record 15,000+ submissions received" },
      { year: "2023", detail: "Added XR & Metaverse categories" },
      { year: "2024", detail: "Partnered with major Hollywood studios" },
    ],
  },
  {
    slug: "creative-league",
    title: "MAAC Creative League",
    tagline: "Where Creativity Meets Competition",
    image: studentWork1,
    date: "Ongoing",
    description: "The MAAC Creative League is a year-round competitive platform where students across all MAAC centres compete in creative challenges. From speed modeling to animation jams, the league keeps the creative spirit alive throughout the academic year.",
    highlights: [
      "Monthly creative challenges across disciplines",
      "Point-based ranking system across all centres",
      "Annual grand finale with industry judges",
      "Mentorship from industry professionals",
      "Portfolio-worthy project outcomes",
    ],
    timeline: [
      { year: "2018", detail: "Creative League concept introduced" },
      { year: "2020", detail: "Moved to hybrid online/offline format" },
      { year: "2023", detail: "150+ centres participating actively" },
    ],
  },
  {
    slug: "klick",
    title: "MAAC Klick",
    tagline: "Capturing Moments Through the Lens",
    image: studentWork2,
    date: "March 2025",
    description: "MAAC Klick is the annual photography and short film competition that celebrates visual storytelling. Students showcase their cinematography, photography and editing skills through compelling visual narratives.",
    highlights: [
      "Photography & short film categories",
      "Guest judges from the film industry",
      "Exhibition of winning entries",
      "Workshop sessions with professional photographers",
      "Networking opportunities with media professionals",
    ],
    timeline: [
      { year: "2016", detail: "First edition of MAAC Klick" },
      { year: "2020", detail: "Added drone cinematography category" },
      { year: "2024", detail: "International entries accepted for the first time" },
    ],
  },
  {
    slug: "manifest",
    title: "MAAC Manifest",
    tagline: "Manifesting Creative Dreams Into Reality",
    image: heroBg,
    date: "August 2025",
    description: "MAAC Manifest is the annual creative arts festival celebrating the diverse talents of MAAC students. From live art demonstrations to animation screenings, the event is a melting pot of creativity and innovation.",
    highlights: [
      "Live art demonstrations and performances",
      "Student film screenings",
      "Game demo showcases",
      "Industry talk sessions",
      "Creative marketplace for student work",
    ],
    timeline: [
      { year: "2014", detail: "First MAAC Manifest held in Mumbai" },
      { year: "2019", detail: "Expanded to multi-city format" },
      { year: "2023", detail: "Virtual reality experience zone added" },
    ],
  },
  {
    slug: "national-students-meet",
    title: "National Students Meet",
    tagline: "Uniting Creative Minds Across India",
    image: studentWork1,
    date: "November 2025",
    description: "The National Students Meet brings together the brightest creative minds from MAAC centres across India for a weekend of collaboration, competition and celebration. Students network, showcase projects and attend masterclasses.",
    highlights: [
      "Students from 150+ centres across India",
      "Collaborative project challenges",
      "Industry masterclasses and workshops",
      "Placement drives with hiring partners",
      "Awards ceremony for outstanding students",
    ],
    timeline: [
      { year: "2012", detail: "First National Students Meet held" },
      { year: "2018", detail: "Attendance crossed 5,000 students" },
      { year: "2024", detail: "Hybrid format reaching 10,000+ students" },
    ],
  },
  {
    slug: "100-hours",
    title: "100 Hours",
    tagline: "100 Hours of Non-Stop Creativity",
    image: studentWork2,
    date: "July 2025",
    description: "100 Hours is an intense creative marathon where teams work non-stop for 100 hours to produce complete animation shorts, game prototypes, or VFX sequences. It pushes students to their creative limits and simulates real studio crunch conditions.",
    highlights: [
      "100 continuous hours of production",
      "Team-based competition format",
      "Real studio-like work conditions",
      "Live streaming of the event",
      "Industry mentors available throughout",
    ],
    timeline: [
      { year: "2017", detail: "First 100 Hours challenge held" },
      { year: "2021", detail: "Moved to virtual format during pandemic" },
      { year: "2024", detail: "Record 200+ teams participated" },
    ],
  },
  {
    slug: "bts",
    title: "BTS (Behind the Screen)",
    tagline: "Discover What Goes On Behind the Magic",
    image: studentWork3,
    date: "Quarterly",
    description: "BTS (Behind the Screen) is a series of industry workshops and studio visits where students get an exclusive behind-the-scenes look at how movies, games and animations are made. Industry professionals share their workflows, challenges and creative processes.",
    highlights: [
      "Exclusive studio visit opportunities",
      "Hands-on workshops with industry pros",
      "Breakdown of blockbuster VFX shots",
      "Game development post-mortems",
      "Q&A sessions with creative directors",
    ],
    timeline: [
      { year: "2015", detail: "BTS workshop series launched" },
      { year: "2020", detail: "Virtual BTS sessions introduced" },
      { year: "2024", detail: "Partnered with 30+ studios globally" },
    ],
  },
  {
    slug: "deadline",
    title: "Deadline",
    tagline: "Beat the Clock, Create Masterpieces",
    image: heroBg,
    date: "September 2025",
    description: "Deadline is a time-bound creative challenge where students must complete specific creative tasks within strict deadlines. Simulating real industry pressure, it helps students develop time management, prioritization and rapid prototyping skills.",
    highlights: [
      "Timed creative challenges across disciplines",
      "Individual and team categories",
      "Industry-standard briefs and requirements",
      "Real-time judging and feedback",
      "Prizes for speed and quality",
    ],
    timeline: [
      { year: "2019", detail: "First Deadline challenge organized" },
      { year: "2022", detail: "Added online participation option" },
      { year: "2024", detail: "Corporate sponsors joined as challenge setters" },
    ],
  },
];

export const getEventBySlug = (slug: string): EventData | undefined =>
  events.find(e => e.slug === slug);
