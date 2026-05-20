// ============================================================
// Portfolio Data — Wesley Sumedha Deano
// ============================================================

export const personal = {
  name: "Wesley Sumedha Deano",
  alias: "MemoriesW",
  tagline: "AI Engineer",
  subtitle: "BINUS – AI Engineering",
  bio: "I am an AI-Specialized developer specializing in building intelligent, product-driven systems that bridge machine learning and real-world usability. With a strong foundation in computer vision and modern web technologies, I design and develop solutions that are not only technically robust but also intuitive and impactful.",
  bio2: "As a Computer Science student at Bina Nusantara University, I am focused on building at the intersection of AI engineering and product development. I approach technology through execution — identifying problems and turning them into functional systems. My background in UI/UX design allows me to translate complex AI capabilities into user-centered experiences, ensuring that every solution is both powerful and accessible. I work with modern development stacks to deliver scalable, production-ready applications that align with real-world needs.",
  email: "wsly.sdeano@gmail.com",
  cv: "https://docs.google.com/document/d/1juK11FipUsFxIRlqIHVdMTLvscDmGJLm4b56tbQWbdA/edit?usp=sharing",
  //website: "",
  location: "Jakarta, Indonesia",
  links: {
    github: "https://github.com/Ws995566",
    linkedin: "www.linkedin.com/in/wesley-sumedha-deano",
    instagram: "https://www.instagram.com/_.auzora/",
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
    category: "AI/ML Frameworks",
    techs: [
      { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/2/20/Tensorflow-svgrepo-com.svg" },
      { name: "PyTorch", icon: "https://icon.icepanel.io/Technology/svg/PyTorch.svg" },
      { name: "Keras", icon: "https://icon.icepanel.io/Technology/svg/Keras.svg" },
      { name: "Scikit-learn", icon: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg" },
      { name: "Hugging Face", icon: "https://www.logo.dev/brand-assets/logos/huggingface.co/logo.svg" },
      { name: "OpenCV", icon: "https://icon.icepanel.io/Technology/svg/OpenCV.svg" },
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
    category: "Creative & Prototyping Tools",
    techs: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
      { name: "Claude", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Claude-ai-icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
      { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg" },
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Hello MMS",
    description: "Hellomms.com is a dual-role web platform that combines a Store Management System (admin side) with a customer-facing service and e-commerce interface.  ",
    extendedDescription: "",
    tags: ["Laravel", "UI/UX"],
    image: "/Images/HelloMMS.png",
    liveUrl: "https://hellomms.com/",
    detailUrl: "#",
    status: "Deployed",
    color: "#00f742",
  },
  {
    id: 2,
    title: "Diabetes Desease Prediction Model",
    description: "Trained Machine Learning Model for predicting the percentage of someone's body having diabetes based on the Pima Indians Diabetes Dataset.",
    extendedDescription: "This project involved data preprocessing, feature engineering, and model training using algorithms such as Logistic Regression, Decision Trees, and Random Forest. The best-performing model achieved an accuracy of 78% on the test set, demonstrating its potential for early diabetes risk assessment.",
    tags: ["AI/ML", "Machine Learning"],
    image: "/Images/PredModel.png",
    liveUrl: "https://diabetesprediction-program-assignment-ml.streamlit.app/",
    detailUrl: "#",
    status: "Deployed",
    color: "#00f742",
  },
];

export const certificates = [
  { title: "Fundamentals of Deep Learning", issuer: "NVIDIA", year: "2025" },
  { title: "Java Programming", issuer: "BNCC BINUS @Malang", year: "2025" },
  { title: "Claude 101", issuer: "Anthropic Education", year: "2026" },
  { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic Education", year: "2026" },
];

export const academic = {
  degree: "Bachelor of Computer Science",
  major: "Major in Intelligence System",
  institution: "Bina Nusantara University – School of Computer Science",
  period: "2024 — Present",
  timeline: [
    {
      id: "01",
      year: "First Year",
      title: "The Foundations",
      focus: "Logic & Programming",
      concepts: ["OOP", "Data Structures", "Algorithm and Programming"],
      stack: ["Java", "C", "C++"],
      icon: "code"
    },
    {
      id: "02",
      year: "Second Year",
      title: "The Systems",
      focus: "Intelligence System",
      concepts: ["Machine Learning", "Software Engineering", "Computer Vision"],
      stack: ["Python"],
      icon: "database"
    },
    {
      id: "03",
      year: "Current Focus",
      title: "Current Focus",
      status: "Building & Researching",
      deepDives: ["Machine Learning", "Computer Vision", "Software Development"],
      goal: "Bridging academic theory with industry-grade software deployment.",
      icon: "activity"
    }
  ]
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academic", href: "#academic" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
