// ============================================================
// Portfolio Data — Brandon Maximillian Avalokita
// ============================================================

export const personal = {
  name: "Brandon Maximillian Avalokita",
  alias: "Brandon",
  tagline: "Data Engineer",
  subtitle: "BINUS – Data Engineer",
  bio: "Cricket",
  bio2: "As a Computer Science student at Bina Nusantara University, I am focused on building at the intersection of data engineering and scalable AI systems. I approach technology through execution — designing robust architectures and turning raw data into reliable, production-ready pipelines. My background in system design and data modeling allows me to translate complex analytical needs into high-performance infrastructure, ensuring that data is accessible, high-quality, and optimized for downstream AI workloads. I work with modern distributed data stacks to deliver scalable backend systems that align with real-world enterprise needs.",
  email: "brandonavalokita@gmail.com",
  cv: "https://docs.google.com/document/d/1e5LHsVw94JQMl1866kIp5SS86eDYEYHYbrtLrU3KBBs/edit?usp=sharing",
  location: "Jakarta, Indonesia",
  links: {
    github: "https://github.com/BrandonMaximillianA",
    linkedin: "https://www.linkedin.com/in/brandon-avalokita-1358292b7/",
    instagram: "https://www.instagram.com/brandon_avalokita/",
  },
};

export const stats = [
  { label: "Total Projects", value: "3+", icon: "code", description: "Innovative AI integrated projects" },
  { label: "Certificates", value: "4", icon: "award", description: "Professional skills validated" },
  { label: "Years of Experience", value: "1", icon: "globe", description: "Continuous learning journey" },
];

export const skills = ["Python", "Java", "Figma", "C/C++", "MySQL", "and many more"];

export const techStack = [
  {
    category: "Programming Languages",
    techs: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ]
  },
  {
    category: "Creative & Prototyping Tools",
    techs: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
      { name: "Claude", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Claude-ai-icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
      { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg" },
    ]
  },
  {
    category: "Database Layer",
    techs: [
      { name: "MySQL", icon: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ]
  },
  {
    category: "Database & Big Data Tools",
    techs: [
  { 
    name: "Power BI", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg" 
  },
  { 
    name: "Tableau", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg" 
  },
  { 
    name: "Pentaho Data Integration", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Hitachi_Vantara_Logo.svg" 
  },
  { 
    name: "XAMPP", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xampp/xampp-original.svg" 
  }
]
  }
];

export const projects = [
  {
    id: 1,
    title: "ShipDecKK",
    description: "ShipDecKK is a web-based application designed to streamline the process of booking and managing cargo shipments. You could see the wide variety of ships through gallery, get to know our services, learn something new about the people behind ShipDecKK, and we make it easy to subscribe for a membership.",
    extendedDescription: "",
    tags: ["Full Stack", "UI/UX", "Team Project"],
    image: "/Images/ShipDecKK.png",
    liveUrl: "https://ship-dec-kk-zeta.vercel.app",
    detailUrl: "#",
    status: "Deployed",
    color: "#00f742",
  },
  {
    id: 2,
    title: "EduScore",
    description: "EduScore is a mobile application designed to help students feel more in control with their academic performance. EduScore lets students add tasks, log their study session, and much more.",
    extendedDescription: "",
    tags: ["Mobile Development", "React Native", "Team Project"],
    image: "/Images/EduScore.png",
    liveUrl: "https://edu-score-rust.vercel.app",
    detailUrl: "#",
    status: "Deployed",
    color: "#00f742",
  },
  {
    id: 3,
    title: "Data Engineering Process",
    description: "Developing a data engineering architecture from scratch, including data ingestion, transformation, and storage using Pentaho Data Integration (PDI) to create a robust and scalable data pipeline.",
    extendedDescription: "",
    tags: ["Data Engineering", "Pentaho Data Integration", "Team Project"],
    image: "/Images/DatEng.png",
    liveUrl: "https://github.com/BrandonMaximillianA/DataEngineering.git",
    detailUrl: "#",
    status: "Deployed",
    color: "#00f742",
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "NusaTrip is an web based application specialized on planning your holiday trip. This application designed for all in one solution for local or non-local people who are confused how to plan their holiday trip.",
    extendedDescription: "",
    tags: ["Data Visualization", "Tableau", "Team Project"],
    image: "/Images/DatVis.png",
    liveUrl: "https://public.tableau.com/views/DatVis-ProjectTerbaru/Dashboard2?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    detailUrl: "#",
    status: "Deployed",
    color: "00f742",
  },
  {
    id: 5,
    title: "Big Data Architecture",
    description: "Establishing a big data architectrure using Hadoop is essential for processing and analyzing large volumes of data efficiently.",
    extendedDescription: "",
    tags: ["Big Data Architecture", "Spark", "Hadoop"],
    image: "/Images/BDP.png",
    liveUrl: "https://github.com/BrandonMaximillianA/BigDataProcessing.git",
    detailUrl: "#",
    status: "Deployed",
    color: "00f742",
  },
  {
    id: 6,
    title: "Many More",
    description: "Everything is accessible in GitHub.",
    extendedDescription: "",
    tags: [""],
    image: "/Images/GIT.png",
    liveUrl: "https://github.com/BrandonMaximillianA",
    detailUrl: "#",
    status: "Deployed",
    color: "00f742",
  },
];

export const certificates = [
  { title: "Original Rekor Indonesia Award", issuer: "Original Rekor Indonesia", year: "2025" },
  // { title: "Java Programming", issuer: "BNCC BINUS @Malang", year: "2025" },
  // { title: "Claude 101", issuer: "Anthropic Education", year: "2026" },
  // { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic Education", year: "2026" },
];

export const academic = {
  degree: "Bachelor of Computer Science",
  major: "Major in Data Technology",
  institution: "Bina Nusantara University – School of Computer Science",
  period: "2024 — Present",
  timeline: [
    {
      id: "01",
      year: "First Year - 1st and 2nd Semester",
      title: "Computer Science Basics",
      focus: "Logic & Programming",
      concepts: ["Algorithm and Programming", "Data Structures", "Front-End Web Development", "UI/UX Design"],
      stack: ["C", "C++", "Python", "HTML/CSS", "JavaScript"],
      icon: "code"
    },
    {
      id: "02",
      year: "Second Year - 3rd and 4th Semester",
      title: "Diving into Database",
      focus: "Database & AI Foundations",
      concepts: ["Artifical Intelligence", "Object-Oriented Programming", "Big Data Processing", "Data Engineering"],
      stack: ["Python", "MySQL", "Java"],
      icon: "database"
    },
    {
      id: "03",
      year: "Current Focus",
      title: "Current Focus",
      status: "Study is in progress",
      concepts: ["Data Mining", "Operating Systems", "etc."],
      goal: "Sharpen my intuition in database to establish high quality data cultures in daily work to improve overall performance.",
      icon: "activity"
    }
  ]
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Academic", href: "#academic" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
