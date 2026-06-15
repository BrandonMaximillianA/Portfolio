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
  cv: "https://docs.google.com/document/d/1juK11FipUsFxIRlqIHVdMTLvscDmGJLm4b56tbQWbdA/edit?usp=sharing",
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
    tags: ["Full Stack", "UI/UX", "Team Project"],
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
    tags: ["Machine Learning", "Team Project"],
    image: "/Images/PredModel.png",
    liveUrl: "https://diabetesprediction-program-assignment-ml.streamlit.app/",
    detailUrl: "#",
    status: "Deployed",
    color: "#00f742",
  },
  {
    id: 3,
    title: "User ( Shopper ) Behavior Prediction Model",
    description: "Trained Machine Learning Model for predicting user behavior based on shopping patterns and preferences.",
    extendedDescription: "This project involved data preprocessing, feature engineering, and model training using algorithms such as Logistic Regression, Decision Trees, and Random Forest. The best-performing model achieved an accuracy of 78% on the test set, demonstrating its potential for early diabetes risk assessment.",
    tags: ["Machine Learning", "Team Project"],
    image: "/Images/UserBehaviourPredModel.png",
    liveUrl: "https://users-behaviour-analyzer.streamlit.app/",
    detailUrl: "#",
    status: "Deployed",
    color: "#00f742",
  },
  {
    id: 4,
    title: "NusaTrip",
    description: "NusaTrip is an web based application specialized on planning your holiday trip. This application designed for all in one solution for local or non-local people who are confused how to plan their holiday trip.",
    extendedDescription: "",
    tags: ["Software Engineering", "Team Project"],
    image: "/Images/NusaTrip.png",
    liveUrl: "https://nusatrip-fe.vercel.app/",
    detailUrl: "#",
    status: "Deployed",
    color: "00f742",
  },
  {
    id: 5,
    title: "Korean Language Detection on Canvas",
    description: "An interactive web based application that detects and classifies Korean characters drawn on a canvas using a custom-trained Convolutional Neural Network (CNN) and OpenCV for image processing.",
    extendedDescription: "This project leverages OpenCV for image processing and a custom-trained Convolutional Neural Network (CNN) for character recognition. The application allows users to draw Korean characters on a canvas, which are then processed and classified in real-time, providing an interactive experience for language learning and practice.",
    tags: ["AI/ML", "Computer Vision", "Team Project"],
    image: "/Images/Stay_Tuned_Logo.png",
    liveUrl: "",
    detailUrl: "#",
    status: "Building",
    color: "",
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
