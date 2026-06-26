export interface Skill {
  name: string;
  description: string;
  category: string;
  iconName: string;
}

export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface VideoProject {
  title: string;
  category: string;
  videoUrl: string;
  views?: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
  avatar: string;
}

export const profile = {
  name: "Promod Santhosh",
  role: "Creating high-retention edits that make brands look premium.",
  subRole: "Video Editor & Motion Designer",
  tagline: "Premium short-form content for brands, creators, gyms, and ecommerce businesses.",
  email: "promod.santhosh@gmail.com",
  whatsapp: "+1 (555) 019-2834",
  instagram: "https://instagram.com/promodsanthosh",
  github: "https://github.com/promodsanthosh",
  linkedin: "https://linkedin.com/in/promodsanthosh",
};

export const skills: Skill[] = [
  {
    name: "Retention Pacing & Rhythm",
    description: "Structuring narrative flow, hook timing, and visual retention loops that maximize viewer average watch duration.",
    category: "Editing",
    iconName: "Sparkles",
  },
  {
    name: "Acoustic Sound Design",
    description: "Layering ambient textures, cinematic SFX transitions, riser swells, and clear vocal leveling for spatial audio depth.",
    category: "Audio",
    iconName: "Volume2",
  },
  {
    name: "Cinematic Color Grading",
    description: "Crafting customized color profiles, dynamic lighting adjustments, and look matching across commercial shoots.",
    category: "Visuals",
    iconName: "Palette",
  },
  {
    name: "Motion Captions & Graphics",
    description: "Designing sleek tracking titles, kinetic typography subtitles, modern text effects, and custom vector callouts.",
    category: "Graphics",
    iconName: "Layers",
  },
];

export const projects: Project[] = [
  {
    title: "Vortex Creative Showreel",
    description: "A fast-paced showcase reel combining multi-layer masking transitions, heavy sound effects, and kinetic text overlays.",
    thumbnail: "/images/project-reel.jpg",
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Aura Brand Commercial",
    description: "An aesthetic commercial video for a luxury watch brand with high-contrast color grading, speed ramps, and spatial sound design.",
    thumbnail: "/images/project-commercial.jpg",
    technologies: ["DaVinci Resolve", "Premiere Pro", "Audition"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Retention Short Series",
    description: "A series of viral TikTok and Instagram vertical videos optimized with intense hooks and quick cuts for maximum user engagement.",
    thumbnail: "/images/project-shorts.jpg",
    technologies: ["After Effects", "Premiere Pro", "Photoshop"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cinematic Travel Narrative",
    description: "A documentary-style travel film focused on cinematic storytelling, environment tracking, soundscapes, and color tone grading.",
    thumbnail: "/images/project-travel.jpg",
    technologies: ["Premiere Pro", "After Effects", "Audition"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const services: Service[] = [
  {
    title: "Short-Form Production",
    description: "High-retention vertical edits for TikTok, YouTube Shorts, and Instagram Reels designed to go viral.",
    iconName: "Play",
  },
  {
    title: "Cinematic Color Grading",
    description: "Professional grade mapping to establish consistent luxury visual palettes for high-end commercials.",
    iconName: "Palette",
  },
  {
    title: "Acoustic Audio FX",
    description: "Multi-layered sound design, vocal cleanup, and background textures to deeply immerse viewers.",
    iconName: "Volume2",
  },
  {
    title: "Kinetic Typography",
    description: "Custom fonts, custom pop animations, tracking titles, and graphical overlays that capture attention.",
    iconName: "Sparkles",
  },
  {
    title: "Creative Storyboarding",
    description: "Pacing planning, scene transitions structure, and visual hooks preparation before video post-production.",
    iconName: "Compass",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Lead Creative Video Editor",
    company: "Vibe Studios",
    period: "2024 - Present",
    description: "Directing the post-production pipeline for premium creator brands. Engineered key pacing frames that increased watch-time averages by 35% on YouTube.",
  },
  {
    role: "Senior Video Editor",
    company: "Apex Media Group",
    period: "2022 - 2024",
    description: "Cut and graded over 150 short-form video ads for luxury fashion and ecommerce clients. Managed sound design and multi-clip sync workflows.",
  },
  {
    role: "Freelance Motion Graphics Specialist",
    company: "Aura Creative Agency",
    period: "2020 - 2022",
    description: "Designed bespoke motion titles, intro cards, tracking callouts, and animated overlays for social branding and visual marketing campaigns.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Chief Executive Officer",
    company: "Luxe Agency",
    review: "Promod is an extraordinary video editor who understands retention pacing at a cellular level. The commercials he cut for us spiked our viewer conversion rates by 40%.",
    avatar: "/images/avatar-sarah.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    company: "Vibe Media",
    review: "Amazing sense of rhythm and timing. The sound design layers he adds to our video content provide an premium cinematic depth that casual edits miss completely.",
    avatar: "/images/avatar-marcus.jpg",
  },
  {
    name: "Elena Rostova",
    role: "YouTube Producer",
    company: "TechPulse Network",
    review: "He took our raw horizontal footage and turned it into highly engaging, viral short-form clips. An absolute expert in motion titles and pacing.",
    avatar: "/images/avatar-elena.jpg",
  },
];

export const videoProjects: VideoProject[] = [
  {
    title: "Live Showcase",
    category: "Reel",
    videoUrl: "MEm1v472lxU",
    views: "2.4M+ Views",
  },
  {
    title: "Creative Story",
    category: "Brand Story",
    videoUrl: "0haM5x--e2g",
    views: "1.2M+ Views",
  },
  {
    title: "High Retention Edit",
    category: "Property Film",
    videoUrl: "yY7dmH2oL9I",
    views: "850K+ Views",
  },
  {
    title: "Viral Hook",
    category: "Short Form",
    videoUrl: "V-yny0InShE",
    views: "1.6M+ Views",
  },
];
