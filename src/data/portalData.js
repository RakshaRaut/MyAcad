export const studentData = {
  name: "Raksha Raut",
  id: "2023-BCT-042",
  program: "Bachelor of Computer Engineering",
  batch: "2023–2027",
  college: "Pokhara University",
  email: "raksha.raut@student.pu.edu.np",
  phone: "+977-9812345678",
  location: "Pokhara, Gandaki, Nepal",
  photo: null,
  gpa: "3.84",
  semester: "4th",
  about:
    "Passionate computer engineering student specializing in full-stack development and machine learning. Actively involved in hackathons and open-source contributions.",
  skills: [
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "TensorFlow",
    "Git",
    "Docker",
    "AWS",
  ],
  academics: [
    {
      sem: "Semester I",
      year: "2023",
      gpa: "3.7",
      status: "Passed",
      subjects: 8,
    },
    {
      sem: "Semester II",
      year: "2023",
      gpa: "3.8",
      status: "Passed",
      subjects: 8,
    },
    {
      sem: "Semester III",
      year: "2024",
      gpa: "3.9",
      status: "Passed",
      subjects: 7,
    },
    {
      sem: "Semester IV",
      year: "2024",
      gpa: "3.84",
      status: "Running",
      subjects: 7,
    },
  ],
  certificates: [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Aug 2024",
      verified: true,
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "Jun 2024",
      verified: true,
    },
    {
      title: "ML Fundamentals",
      issuer: "Coursera / DeepLearning.AI",
      date: "Mar 2024",
      verified: true,
    },
    {
      title: "Internship Certificate",
      issuer: "Leapfrog Technology",
      date: "Jan 2024",
      verified: true,
    },
  ],
  projects: [
    {
      title: "AI-Powered Resume Analyzer",
      desc: "NLP-based tool to analyze and score resumes against job descriptions.",
      tech: ["Python", "NLP", "FastAPI", "React"],
      github: "#",
      type: "Final Year",
    },
    {
      title: "CampusConnect App",
      desc: "Mobile-first app for student collaboration and event management within campus.",
      tech: ["React Native", "Node.js", "MongoDB"],
      github: "#",
      type: "Hackathon",
    },
    {
      title: "Smart Attendance System",
      desc: "Face recognition-based automated attendance using OpenCV.",
      tech: ["Python", "OpenCV", "Flask"],
      github: "#",
      type: "Research",
    },
  ],
  achievements: [
    {
      title: "1st Place – Locus Hackathon 2024",
      icon: "🏆",
      category: "Hackathon",
    },
    {
      title: "Dean's List Award – Semester III",
      icon: "🎓",
      category: "Academic",
    },
    {
      title: "Best Project – TechFest 2024",
      icon: "🥇",
      category: "Competition",
    },
    {
      title: "Google Developer Student Club Lead",
      icon: "🌐",
      category: "Leadership",
    },
  ],
  documents: [
    {
      name: "Official Transcript",
      type: "PDF",
      size: "245 KB",
      verified: true,
    },
    {
      name: "Enrollment Certificate",
      type: "PDF",
      size: "120 KB",
      verified: true,
    },
    {
      name: "Recommendation Letter – Dr. Sharma",
      type: "PDF",
      size: "98 KB",
      verified: true,
    },
    {
      name: "Character Certificate",
      type: "PDF",
      size: "80 KB",
      verified: true,
    },
  ],
};

export const adminStudents = [
  {
    id: "2023-BCT-042",
    name: "Raksha Raut",
    program: "BCT",
    sem: "4th",
    gpa: "3.84",
    status: "Active",
  },
  {
    id: "2023-BCT-019",
    name: "Arjun Thapa",
    program: "BCT",
    sem: "4th",
    gpa: "3.6",
    status: "Active",
  },
  {
    id: "2022-BCA-011",
    name: "Sita Karki",
    program: "BCA",
    sem: "6th",
    gpa: "3.9",
    status: "Active",
  },
  {
    id: "2021-BCE-033",
    name: "Ram Bahadur",
    program: "BCE",
    sem: "8th",
    gpa: "3.5",
    status: "Active",
  },
  {
    id: "2023-BIT-007",
    name: "Priya Shrestha",
    program: "BIT",
    sem: "4th",
    gpa: "3.75",
    status: "Active",
  },
];

export const navItems = [
  { id: "profile", icon: "👤", label: "Profile" },
  { id: "academics", icon: "📊", label: "Academics" },
  { id: "certificates", icon: "🏅", label: "Certificates" },
  { id: "projects", icon: "💻", label: "Projects" },
  { id: "achievements", icon: "🏆", label: "Achievements" },
  { id: "resume", icon: "📄", label: "Resume" },
  { id: "documents", icon: "🗂", label: "Documents" },
];

export const adminNavItems = [
  { id: "dashboard", icon: "📊", label: "Dashboard" },
  { id: "students", icon: "👥", label: "Students" },
  { id: "results", icon: "📝", label: "Results" },
  { id: "certificates", icon: "🏅", label: "Certificates" },
  { id: "documents", icon: "🗂", label: "Documents" },
  { id: "search", icon: "🔎", label: "Global Search" },
];

export const pageTitles = {
  profile: "Student Profile",
  academics: "Academic Records",
  certificates: "Certificates",
  projects: "Projects",
  achievements: "Achievements",
  resume: "Resume",
  documents: "Document Vault",
};

export const pageUrls = {
  profile: "/profile",
  academics: "/academics",
  certificates: "/certificates",
  projects: "/projects",
  achievements: "/achievements",
  resume: "/resume",
  documents: "/documents",
};

export const landingFeatures = [
  {
    icon: "🛡",
    title: "Verified by Institution",
    desc: "All data is entered and controlled by the college. No student can tamper with official records.",
  },
  {
    icon: "📁",
    title: "Complete Document Vault",
    desc: "Transcripts, certificates, recommendation letters — all in one downloadable, verified digital vault.",
  },
  {
    icon: "🌐",
    title: "Shareable Public Profile",
    desc: "Each student gets a unique URL to share with employers, internship portals, and graduate schools.",
  },
  {
    icon: "📄",
    title: "Auto-Generated Resume",
    desc: "Resume is auto-built from academic records, projects, and achievements. Download as PDF anytime.",
  },
  {
    icon: "🔎",
    title: "Global Talent Search",
    desc: "Companies can search verified students by skill, college, project, or graduation year.",
  },
  {
    icon: "🏫",
    title: "College Admin Portal",
    desc: "Colleges manage all data from a powerful admin dashboard. Add results, upload certificates, verify projects.",
  },
];

export const dashboardStats = [
  ["247", "Total Students", "+12 this sem"],
  ["94%", "Pass Rate", "+2% vs last sem"],
  ["38", "Certs Issued", "This month"],
  ["12", "Pending Verifications", "Needs review"],
];

export const dashboardActivity = [
  [
    "Raksha Raut",
    "Certificate Uploaded",
    "AWS Cloud Practitioner",
    "2 mins ago",
  ],
  ["Arjun Thapa", "Result Updated", "Semester III GPA: 3.6", "1 hour ago"],
  ["Sita Karki", "Profile Created", "New student enrolled", "3 hours ago"],
  ["Priya Shrestha", "Project Verified", "AI Resume Analyzer", "Yesterday"],
];
