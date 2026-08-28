import { SITE_URL } from "@/lib/site"
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
    website: SITE_URL,
    cv_link: `${SITE_URL}/CV.pdf`,
  },
  experience: [
    {
      role: "Robotics Software Intern",
      company: "Ananta Technologies",
      duration: "Dec 2024 - Present",
      location: "India",
      description:
        "Built robotic test scenarios using MuJoCo simulator enhancing build test efficiency by 40%. Collaborated with US-based clients on simulation workflows and real-world robot deployment. Performed Webots platform testing and successfully supported deployment of two autonomous robots.",
      detailedWork: [
        "Designed and executed robotic test scenarios with performance validation",
        "Streamlined simulation workflows reducing testing time by 40%",
        "Performed real-world testing on Webots platforms",
        "Supported deployment of 2 robots within internship timeline",
        "Interfaced with international teams for workflow optimization",
      ],
      tech: ["MuJoCo", "Webots", "Robotics", "ROS", "Python", "Test Automation"],
    },
    {
      role: "Student Researcher",
      company: "AIR Centre VIT-AP",
      duration: "Jun 2024 - Nov 2025",
      location: "Amaravathi, India",
      description:
        "Built neuro-symbolic AI framework that teaches LLMs to think like hackers. Auto-generates malicious payloads (SQLi, XSS, BOLA) from live API metadata – basically red-teaming on steroids. 34% vulnerability detection improvement over traditional tools. Reduced manual security testing by 70% through automated OWASP-compliant scoring.",
      detailedWork: [
        "Designed neuro-symbolic AI system combining symbolic reasoning with LLMs",
        "Auto-generates real-time payloads from API metadata (SQLi, XSS, BOLA)",
        "34% vulnerability discovery improvement vs SAST/DAST tools",
        "70% reduction in manual security testing workload",
        "Built modular security pipeline with input validation → fuzzing → auth checks → exposure analysis",
        "Scales across multi-service API architectures",
      ],
      tech: ["LLMs", "Neuro-symbolic AI", "Cybersecurity", "Symbolic Reasoning", "OWASP", "Fuzzing", "API Security"],
      metrics: {
        "Vulnerability Detection Improvement": "+34%",
        "Testing Workload Reduction": "70%",
        "API Services Supported": "Multi-service",
      },
    },
    {
      role: "Robotics Intern & Team Lead",
      company: "Vulcan: Self-Driving EV (VIT-AP Initiative)",
      duration: "Jan 2023 - Present",
      location: "Amaravathi, India",
      description:
        "Converted a golf cart into a fully autonomous campus EV – basically built a self-driving car on a student budget. Implemented DeepLabV3+ semantic segmentation, lane-following logic, and obstacle avoidance. 67% multi-class road scene segmentation accuracy. Led perception and navigation software development for real-world autonomous vehicle.",
      detailedWork: [
        "Led perception and navigation software development",
        "Trained DeepLabV3+ on Mapillary dataset",
        "67% multi-class road scene segmentation accuracy achieved",
        "Implemented lane-following and turn-handling control logic",
        "Real-time embedded processing on NVIDIA Jetson",
        "Sensor fusion from camera, LiDAR, and radar",
        "Path planning with obstacle avoidance under 50ms latency",
      ],
      tech: ["ROS", "NVIDIA Jetson", "DeepLabV3+", "LiDAR", "Radar", "SAC", "DAgger", "Embedded Systems"],
      metrics: {
        "Segmentation Accuracy": "67%",
        "Control Latency": "<50ms",
        "Processing Speed": "Real-time (30 FPS)",
      },
    },
  ],
  projects: [
    {
      title: "EchoSight: Assistive Navigation Glasses",
      tech: "YOLOv8, Roboflow, Raspberry Pi, GCP, OpenCV, TTS",
      subtitle: "Patent Pending | AI-Powered Accessibility",
      image: "/echo.jpg",
      imageAlt: "EchoSight Wearable Assistive Navigation Glasses by Nithin Jambula - AI-powered accessibility technology for visually impaired",
      imageKeywords: ["EchoSight", "Nithin Jambula", "wearable tech", "accessibility", "computer vision", "object detection", "YOLOv8", "assistive technology"],
      tags: ["Computer Vision", "Accessibility Tech", "IoT", "Real-time ML"],
      description:
        "Wearable vision-based system that basically gave sight back to people through a Raspberry Pi and some neural networks. 🎯 Fine-tuned YOLOv8 with 50+ custom object classes running at 45+ FPS (faster than you can blink). Integrated spatial awareness, distance estimation, and contextual voice alerts that actually make sense. Won Vikas 2024 Innovation Challenge – because apparently, accessibility tech > scrolling through TikTok.",
      detailedFeatures: [
        "Real-time object detection at 45+ FPS on edge device",
        "50+ custom object classes trained on diverse datasets",
        "Monocular depth estimation with competitive performance",
        "Spatial awareness: direction & distance feedback",
        "Context-aware voice alerts via Bluetooth earbuds",
        "Battery-optimized inference on Raspberry Pi 4",
      ],
      keyMetrics: {
        "Detection Speed": "45+ FPS",
        "Object Classes": "50+",
        "Accuracy Improvement": "Custom tuned",
        "Latency": "<100ms",
      },
      award: "🏆 Vikas 2024 Innovation Challenge Winner",
      impact: "Enables navigation independence for visually impaired users",
    },
    {
      title: "16fps: Multi-Video Generation Agent",
      tech: "Python, LangChain, Stable Video Diffusion, AnimateDiff",
      subtitle: "Commercial SaaS | Video AI",
      image: "/echo.jpg",
      imageAlt: "16fps AI Video Generation Agent by Nithin Jambula - Multi-agent system for generating consistent videos from text prompts",
      imageKeywords: ["16fps", "Nithin Jambula", "video generation", "AI agent", "text to video", "stable diffusion", "generative AI", "SaaS platform"],
      tags: ["Generative AI", "Multi-Agent Systems", "Video Synthesis", "SaaS"],
      description:
        "Built an agentic AI that generates coherent 1+ minute videos from pure text prompts. Basically ChatGPT but for video – except it actually maintains character consistency and doesn't forget what happened 2 seconds ago (unlike humans 😅). Self-correcting pipeline with memory, tool-use, and reflection. Generated so much hype that we sold commercial rights to a media production company. Zero-downtime cloud infrastructure because we don't do crashes.",
      detailedFeatures: [
        "Text-to-video generation with semantic coherence",
        "Multi-agent orchestration for distributed rendering",
        "Character consistency maintenance across 60+ second clips",
        "Dynamic style transfer & audio synchronization",
        "Parallel batch processing for scalable output",
        "Self-correcting agent with reflection mechanism",
      ],
      keyMetrics: {
        "Video Length": "60+ seconds",
        "FPS": "16 FPS",
        "Consistency Score": "Industry-leading",
        "Processing Time": "Optimized per minute",
      },
      award: "💰 Commercial License Sold to Media Production Company",
      impact: "Enables content creators to generate branded videos at scale",
    },
    {
      title: "WOAT: Context-Aware Conversational Agent",
      tech: "Gemini API, Google Cloud, Python, Node.js, Adversarial Testing",
      subtitle: "Agentic Reasoning | WhatsApp Integration",
      image: "/echo.jpg",
      imageAlt: "WOAT WhatsApp Conversational AI Agent by Nithin Jambula - Context-aware LLM chatbot with tone adaptation",
      imageKeywords: ["WOAT", "Nithin Jambula", "WhatsApp bot", "conversational AI", "LLM agent", "Gemini API", "chatbot", "context awareness"],
      tags: ["LLMs", "Conversational AI", "Context Understanding", "Adversarial Testing"],
      description:
        "WhatsApp bot that learned to respond like you (the creepy way your friends text, your inside jokes, everything). Built context memory that tracks relationships, detects emotional tone, and adapts responses to match your vibe. Smart enough to know when you're being sarcastic and when you're actually angry. QR-based secure login and fallback modes because Murphy's Law is always watching.",
      detailedFeatures: [
        "Intent & entity recognition from conversation history",
        "Relationship dynamics inference from past interactions",
        "Tone adaptation across different contacts",
        "Situational context understanding",
        "Memory persistence across chat sessions",
        "Fallback modes for API failures",
        "QR-based secure WhatsApp login flow",
      ],
      keyMetrics: {
        "Contacts Supported": "Unlimited",
        "Context Window": "Full chat history",
        "Response Time": "<2 seconds",
        "Accuracy": "Match user's style",
      },
      award: "🤖 Advanced Agentic Architecture",
      impact: "Reduces manual messaging by 60%+ for busy professionals",
    },
    {
      title: "DeepShield: Face-Swap Deepfake Detection",
      tech: "CNN, GAN, OpenCV, Python, Adversarial Testing",
      subtitle: "Research | Security",
      image: "/echo.jpg",
      imageAlt: "DeepShield CNN Deepfake Detection Model by Nithin Jambula - Face-swap detection for video security",
      imageKeywords: ["DeepShield", "Nithin Jambula", "deepfake detection", "face swap detection", "CNN", "GAN", "video forensics", "security", "adversarial testing"],
      tags: ["Deep Learning", "Security", "Video Forensics", "Adversarial ML"],
      description:
        "CNN-based deepfake detector that catches face-swap videos before they go viral and ruin someone's life. Built synthetic video generation pipeline for data augmentation (creating fake videos to catch fake videos – meta, right?). 22% accuracy improvement over baselines. Stress-tested with adversarial attacks because hackers don't play nice. Published at iSAI 2025 conference because peer review said 'yeah, this is legit.'",
      detailedFeatures: [
        "Face-swap detection with 22% accuracy improvement",
        "Synthetic video generation for data augmentation",
        "40% dataset expansion via GAN-based generation",
        "Precision-recall optimization for low false positives",
        "Adversarial robustness testing framework",
        "ROC-AUC performance metrics validation",
      ],
      keyMetrics: {
        "Accuracy Improvement": "+22%",
        "Dataset Expansion": "+40%",
        "False Positive Reduction": "-18%",
        "AUC Score": "0.94+",
      },
      award: "📄 Published at iSAI 2025 International Conference",
      impact: "Prevents deepfake misuse and enhances video authentication",
    },
    {
      title: "ScreenAutomate: Gesture & Voice Control",
      tech: "Python, OpenCV, MediaPipe, SpeechRecognition, Bluetooth",
      subtitle: "Accessibility | Computer Vision",
      image: "/echo.jpg",
      imageAlt: "ScreenAutomate Gesture Voice Control System by Nithin Jambula - Hand gesture and voice recognition interface",
      imageKeywords: ["ScreenAutomate", "Nithin Jambula", "gesture recognition", "voice control", "MediaPipe", "accessibility", "HCI", "hands-free control"],
      tags: ["Gesture Recognition", "Voice Control", "Accessibility", "HCI"],
      description:
        "Hybrid system that makes your keyboard and mouse cry because you're literally controlling your screen with hand waves and voice commands. Bluetooth-aware, hands-free interaction designed for accessibility and lazy smart home enthusiasts. Because sometimes typing is just too much effort.",
      detailedFeatures: [
        "Hand gesture recognition using MediaPipe",
        "Voice command processing with NLP",
        "Bluetooth proximity detection",
        "Multi-gesture combinations support",
        "Customizable command mappings",
        "Real-time gesture feedback",
      ],
      keyMetrics: {
        "Gesture Recognition Accuracy": "95%+",
        "Voice Command Accuracy": "92%+",
        "Bluetooth Range": "10 meters",
        "Latency": "<200ms",
      },
      award: "🎮 Innovative HCI Solution",
      impact: "Enables hands-free workplace interaction for accessibility",
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
