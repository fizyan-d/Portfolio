export interface Project {
  id: string;
  title: string;
  category: 'AI / ML' | 'IoT Hardware' | 'Cyber Security' | 'System Automation';
  description: string;
  techStack: string[];
  github?: string;
  deployed?: string;
  status: 'DEPLOYED' | 'EXPO PROTOTYPE' | 'PRODUCTION';
  highlight?: string;
  demoNote?: string;
}

export const projectsData: Project[] = [
  {
    id: "stock-sensie",
    title: "Stock-Sensie AI",
    category: "AI / ML",
    description: "A comprehensive 360-degree algorithmic trading suite built entirely in Python. Utilizes deep learning and market signal indicators to deliver real-time asset evaluation workflows.",
    techStack: ["Python", "Streamlit", "Machine Learning", "Financial APIs", "Pandas"],
    github: "https://github.com/fizyan-d/Stock_sensie_AI",
    deployed: "https://stocksensieai-fzm.streamlit.app/",
    status: "DEPLOYED",
    highlight: "360° Trading Ecosystem"
  },
  {
    id: "web-attack-defender",
    title: "Web Attack Defender",
    category: "Cyber Security",
    description: "An advanced machine-learning classification engine guarding web apps against malicious intrusion layers, stopping exploits and threat factors instantly at the perimeter.",
    techStack: ["Python", "Scikit-Learn", "Network Security", "ML Classification"],
    github: "https://github.com/fizyan-d/web-attack-detection-ml",
    status: "PRODUCTION",
    highlight: "Intrusion Prevention Engine"
  },
  {
    id: "vanta-ltsas",
    title: "Vanta LTSAS Security",
    category: "IoT Hardware",
    description: "Physical hardware automated laser perimeter security ecosystem engineered to intercept breaches and secure localized residential structural access grids.",
    techStack: ["IoT Hardware", "Microcontrollers", "Laser Arrays", "Sensors", "Lovable App"],
    github: "https://github.com/fizyan-d/vanta-ltsas.git",
    deployed: "https://vanta-ltsas.lovable.app/",
    status: "DEPLOYED",
    highlight: "Laser Grid Defense Array"
  },
  {
    id: "verdantis",
    title: "Verdantis Launchpad",
    category: "System Automation",
    description: "An intelligent IoT bio-composter tracking architecture syncing integrated hardware arrays with live metric dashboards to maintain optimal bioconversion rates.",
    techStack: ["IoT Firmware", "Sensors Integration", "Hardware Design", "Automation"],
    github: "https://github.com/fizyan-d/verdantis-launchpad",
    status: "PRODUCTION",
    highlight: "Eco-Automation Firmware"
  },
  {
    id: "water-management",
    title: "EcoSphere Water Management",
    category: "IoT Hardware",
    description: "Enterprise-grade localized fluid resource pipeline tracker featuring sensory hardware nodes. Awarded outstanding reception at the REVA University IoT Expo.",
    techStack: ["Hardware Schematics", "Flow Sensors", "Calibration Systems", "IoT Engineering"],
    status: "EXPO PROTOTYPE",
    highlight: "REVA IoT Expo Feature"
  },
  {
    id: "slot-pulse",
    title: "Slot Pulse Traffic System",
    category: "System Automation",
    description: "Smart traffic mitigation architecture linking localized node sensory feedback directly into an interactive management layout to maximize urban fluid dynamics.",
    techStack: ["IoT Architecture", "Traffic Automation", "Lovable Integration", "React UI"],
    github: "https://github.com/fizyan-d/slot-pulse",
    deployed: "https://parkishe.lovable.app",
    status: "DEPLOYED",
    highlight: "Smart Parking Infrastructure"
  },
  {
    id: "event-day-tracker",
    title: "Event Day Tracker",
    category: "System Automation",
    description: "A mobile-first web app for managing a live corporate conference across 3 parallel event halls, with a real-time live ticker and expandable session agenda.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Socket.io", "Vite"],
    github: "https://github.com/fizyan-d/Event-Traacker-AI",
    deployed: "https://resplendent-pika-e521c5.netlify.app/",
    status: "DEPLOYED",
    highlight: "Real-Time Conference Ops"
  },
  {
    id: "archforge",
    title: "ArchForge — Architecture Feasibility AI Agent",
    category: "AI / ML",
    description: "An AI agent that assesses architectural and design feasibility, built as an agentic AI system. Won 1st Prize in Track 1 (Building AI Agents on AWS) at IdeateBLR '26.",
    techStack: ["AWS", "Python", "AI Agents", "LLM Pipelines", "FastAPI"],
    github: "https://github.com/fizyan-d/ArchForge-Architecture-feasibility-AI-agent-",
    status: "PRODUCTION",
    highlight: "1st Prize — IdeateBLR '26 (AWS Track)",
    demoNote: "Private repo — available on request"
  },
  {
    id: "zynq-bingehack",
    title: "Zynq (BingeHack) — Hackathon Operations Platform",
    category: "System Automation",
    description: "A real-time SaaS platform for running hackathons with QR-based check-in, role-based access, live broadcast alerts, venue wayfinding, and an admin console.",
    techStack: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/fizyan-d/BingeHack-Hackathon-Organizing-Platform",
    status: "PRODUCTION",
    highlight: "Hackathon Operations SaaS",
    demoNote: "Private repo — available on request"
  },
  {
    id: "sahayak-ai",
    title: "Sahayak — AI Voice Agent for Dementia",
    category: "AI / ML",
    description: "An AI-based cognitive gaming and memory assistance platform for elderly dementia patients, with a voice AI agent that detects tone and emotion to support caregivers. Built for SIH 2026.",
    techStack: ["Voice AI", "Python", "Emotion Detection", "NLP", "FastAPI"],
    github: "https://github.com/fizyan-d/Sahayak-AI-voice-agent-for-Elderly-Pateints-suffering-from-Dementia-",
    status: "PRODUCTION",
    highlight: "Smart India Hackathon 2026",
    demoNote: "Private repo — available on request"
  }
];