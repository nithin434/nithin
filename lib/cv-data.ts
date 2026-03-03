interface Certification {
  name: string
  provider: string
  logo: string
  link: string
  image: string
  badge?: boolean
}

interface GalleryImage {
  title: string
  description: string
  image: string
  category: string
}

export const CV_DATA = {
  profile: {
    name: "Nithin Jambula",
    role: "Machine Learning Engineer",
    tagline: "Building neuro-symbolic AI frameworks and autonomous systems.",
    phone: "+91 9347632259",
    email: "nithinjambula89@gmail.com",
    linkedin: "https://linkedin.com/in/nithin-jambula",
    github: "https://github.com/nithin434",
    website: "https://nithinjambula.dev",
    cv_link: "https://nithinjambula.dev/CV.pdf",
  },
  experience: [
    {
      role: "Student Researcher",
      company: "AIR Centre VIT-AP",
      duration: "Jun 2024 - Present",
      location: "Amaravathi, India",
      description:
        "Built neuro-symbolic AI framework using LLMs to auto-generate malicious payloads for SQLi, XSS, and BOLA from live API metadata. Improved vulnerability detection by 34% over SAST/DAST with symbolic reasoning and real-time fuzzing. Cut manual testing effort by 70% via OWASP-integrated LLM automation and risk scoring.",
      tech: ["LLMs", "Neuro-symbolic AI", "Cybersecurity", "Symbolic Reasoning", "OWASP"],
    },
    {
      role: "Robotics Engineer",
      company: "Vulcan: Self-Driving EV (VIT-AP Initiative)",
      duration: "Jan 2023 - Present",
      location: "Amaravathi, India",
      description:
        "Converted golf cart into fully autonomous EV using NVIDIA Jetson Xavier, radar, LiDAR, and cameras. Implemented DeepLabV3 real-time segmentation (30 FPS) and path planning on embedded hardware. Achieved smooth lane-keeping and obstacle avoidance with SAC + DAgger control under 50ms latency.",
      tech: ["ROS", "NVIDIA Jetson", "DeepLabV3", "LiDAR", "Radar", "SAC", "DAgger"],
    },
  ],
  projects: [
    {
      title: "EchoSight: Assistive Navigation Glasses",
      tech: "YOLOv8, Roboflow, Raspberry Pi, GCP, OpenCV, TTS",
      description:
        "Wearable vision-based system for real-time object detection and navigation feedback via Bluetooth earbuds. Fine-tuned YOLOv8 with custom dataset (50+ object classes) enabling 45+ FPS detection with positional awareness. Integrated spatial direction and distance estimation using monocular vision and depth inference algorithms. Contextual alerting system with dynamic updates and location-aware voice output.",
      award: "Vikas 2024 Innovation Challenge Awardee (Patent Pending)",
    },
    {
      title: "16fps: Multi-Video Generation Agent",
      tech: "Python, LangChain, Stable Video Diffusion, AnimateDiff",
      description:
        "Autonomous agentic AI system generating consistent 1+ minute videos from text prompts. Designed self-correcting agent pipeline with memory, tool-use, and reflection to maintain character consistency across 60+ second clips at 16 FPS. Enabled parallel multi-video rendering with dynamic style transfer and audio sync. Sold commercial rights to media production company with zero-downtime cloud infrastructure.",
      award: "Commercial License Sold",
    },
    {
      title: "WOAT: WhatsApp Auto-Responder Bot",
      tech: "Gemini API, Google Cloud, Python, Node.js, Adversarial Testing",
      description:
        "AI-powered bot learning user communication styles and auto-generating contextual replies. Engineered smart WhatsApp integration with contact-based response filters, session persistence, QR-based login, and fallback simple reply mode. Implemented communication tone learning and relationship-based message prioritization.",
      award: "Jul 2023 - Nov 2023",
    },
    {
      title: "DeepShield: Face-Swap Deepfake Detection",
      tech: "CNN, GAN, OpenCV, Python, Adversarial Testing",
      description:
        "CNN-based deepfake detection model achieving 22% increase in classification accuracy. Created synthetic video generation tool for data augmentation, expanding dataset by 40%. Validated performance using precision-recall and ROC-AUC metrics with 18% false positive reduction. Conducted adversarial stress tests for robustness evaluation.",
      award: "Research Paper Published",
    },
    {
      title: "ScreenAutomate: Gesture & Voice Control",
      tech: "Python, OpenCV, MediaPipe, SpeechRecognition, Bluetooth",
      description:
        "Hybrid control system enabling screen management using voice and hand gestures within Bluetooth range. Designed for accessibility and remote desktop interfacing with hands-free interaction and smart automation capabilities.",
      award: "Oct 2023 - Jan 2024",
    },
  ],
  skills: {
    programming: ["Python", "C++", "Java", "SQL", "Bash", "Node.js"],
    deep_learning: ["PyTorch", "TensorFlow", "Hugging Face", "LLaMA", "LangChain", "YOLOv8", "DeepLabV3", "ONNX"],
    agentic_ai_robotics: [
      "Reinforcement Learning (SAC, DAgger)",
      "Autonomous Systems",
      "ROS",
      "NVIDIA Jetson",
      "LiDAR/Radar Fusion",
      "Real-Time Control",
    ],
    ml_engineering: ["MLflow", "Weights & Biases", "Roboflow", "CVAT", "Docker", "GCP", "Git", "CI/CD"],
  },
  education: [
    {
      degree: "B.Tech CSE",
      school: "VIT-AP University",
      location: "Amaravathi",
      score: "8.0/10",
      year: "2023-2027",
    },
    {
      degree: "Class XII (SSC)",
      school: "Narayana Junior College",
      score: "95.0%",
      year: "2021-2023",
    },
    {
      degree: "Class X (SSC)",
      school: "Vivekananda School",
      score: "99.3%",
      year: "2021",
    },
  ],
  certifications: [
    "Machine Learning - Stanford University (DeepLearning.AI Certification)",
    "Deep Learning Fundamentals - IBM Certification",
    "Machine Learning with Python - IBM Certification",
    "OVO Object Detection Bootcamp - Google Certification",
    "Machine Learning Specialist-Advanced - IBM Badge",
  ],
  achievements: [
    "Awardee in Vikas 2024 Innovation Challenge for 'EchoSight' – wearable assistive technology",
    "Winner of Engineering Clinics 2024 for novel threat detection framework",
    "President, ACS International Student Chapter, VIT-AP (Aug 2023 - Present)",
    "Marketing Member, SEDS, VIT-AP (Jan 2023 - Present)",
  ],
  detailedCertifications: [
    {
      name: "Machine Learning - Stanford University",
      provider: "Deep Learning AI",
      logo: "/DAI.jpg",
      link: "https://www.coursera.org/account/accomplishments/specialization/QSMZ03STTJ1Y",
      image: "/stanford.png",
    },
    {
      name: "Deep Learning Fundamentals",
      provider: "IBM",
      logo: "/IBM.png",
      link: "https://courses.cognitiveclass.ai/certificates/b24fd91a07c14d8ba2b6dbf0d6a6c6c5",
      image: "/IBM_DLF.png",
    },
    {
      name: "Machine Learning with Python",
      provider: "IBM",
      logo: "/IBM.png",
      link: "https://www.credly.com/badges/91a4bb99-9a17-4c7c-b000-3c7e54c148eb/print",
      image: "/IBM_P.png",
    },
    {
      name: "OVO Object Detection Bootcamp",
      provider: "Google",
      logo: "/g.png",
      link: "https://www.cert.devtown.in/verify/Z1GAbEE",
      image: "/oyo.png",
    },
    {
      name: "Machine Learning Specialist-Advanced",
      provider: "IBM",
      logo: "/IBM.png",
      link: "https://www.credly.com/badges/1d70a2bb-7afa-4ef8-9e2f-a945321c0e51/print",
      image: "/IBM_S.png",
      badge: true,
    },
  ] as Certification[],
  galleryImages: [
    {
      title: "Vulcan - Self Driving EV Car",
      description: "Autonomous driving car for campus mobility (VIT-AP Initiative) - Computer Vision and AI project",
      image: "/car.jpg",
      category: "projects",
    },
    {
      title: "EchoSight Prototype",
      description: "Wearable assistive navigation glasses for visually impaired using YOLO object detection",
      image: "/echo.jpg",
      category: "projects",
    },
    {
      title: "VLaunchpad Demo",
      description: "Displaying Vulcan autonomous vehicle at VLaunchpad2025 innovation showcase",
      image: "/vlan.jpg",
      category: "projects",
    },
    {
      title: "Innovation Award 2024",
      description: "Vikas 2024 Innovation Challenge winner ceremony for EchoSight AI project",
      image: "/vikas.jpg",
      category: "achievements",
    },
  ] as GalleryImage[],
}
