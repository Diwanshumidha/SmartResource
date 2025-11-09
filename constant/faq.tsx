import { FAQItem } from "@/type/faq";
import {
  Clock,
  CreditCard,
  FileText,
  Shield,
  GraduationCap,
  Briefcase,
  Lock,
  Building2,
  Palette,
  Package,
  Globe,
  MousePointerSquareDashed,
  GitPullRequest,
  GitPullRequestCreate,
  Lightbulb,
  Users,
} from "lucide-react";

export const faqs: FAQItem[] = [
  // 🔄 General
  {
    id: "item-1",
    icon: <Lightbulb className="size-4" />,
    question: "What is Smart Resource?",
    answer:
      "Smart Resource is an AI-powered software system that lets you upload documents and interact with them using natural language. Whether you’re a student, professional, or business, you can ask questions, generate workflows, translate files, and more — all from your own content.",
    showInHomepage: true,
  },
  {
    id: "item-2",
    icon: <Users className="size-4" />,
    question: "Who is Smart Resource for?",
    answer:
      "Everyone. Smart Resource is modular and adapts to your needs — students can use it to study smarter, professionals can use it to manage information, and businesses can train AI on internal data to power workflows or support systems.",
    showInHomepage: true,
  },
  {
    id: "item-3",
    icon: <Globe className="size-4" />,
    question: "How is this different from ChatGPT or other AI tools?",
    showInHomepage: true,
    answer:
      "Smart Resource is built on a patented Retrieval-Augmented Generation (RAG) system. It doesn’t rely on generic internet knowledge — instead, it analyzes and interacts with your actual documents, in your context, in real time.",
  },
  {
    id: "item-4",
    icon: <FileText className="size-4" />,
    question: "What kinds of documents can I upload?",
    showInHomepage: true,
    answer:
      "You can upload PDFs, Word files, CSVs, and more. Smart Resource supports multi-format ingestion and multilingual understanding.",
  },
  {
    id: "item-5",
    icon: <Shield className="size-4" />,
    question: "Is Smart Resource secure?",
    showInHomepage: true,
    answer:
      "Yes. All data is encrypted. If you’re using features like credential management, your credentials are securely stored and only injected when you authorize it.",
  },

  // 🎓 For Students
  {
    id: "item-6",
    icon: <GraduationCap className="size-4" />,
    question: "How does Smart Resource help me study?",
    showInHomepage: true,
    answer:
      "Upload your syllabus, textbook, or class notes. Smart Resource can generate custom quizzes, flashcards, summaries, and even answer complex questions based on the content you’ve uploaded.",
  },
  {
    id: "item-7",
    icon: <MousePointerSquareDashed className="size-4" />,
    question:
      "Can I highlight text on any website and generate a quiz or answer?",
    answer:
      "Yes! Using the browser extension, you can highlight text on any website and Smart Resource will reference it to generate questions or provide contextual answers.",
  },

  // 💼 For Professionals
  {
    id: "item-8",
    icon: <Briefcase className="size-4" />,
    question: "How can I use Smart Resource for work?",
    showInHomepage: true,
    answer:
      "Store and retrieve key information like login credentials, vendor contacts, internal guides, or technical documentation. Ask natural-language questions like “What’s the procedure for submitting an invoice?” and get immediate answers.",
  },
  {
    id: "item-9",
    icon: <Lock className="size-4" />,
    question:
      "Can I upload sensitive files like insurance, financial, or client data?",
    answer:
      "Absolutely. Your data is private and used only to power your own assistant. Smart Resource never shares or trains on your content unless explicitly allowed.",
  },

  // 🏢 For Businesses
  {
    id: "item-10",
    icon: <Building2 className="size-4" />,
    question: "Can my company use Smart Resource across teams?",
    showInHomepage: true,
    answer:
      "Yes. Smart Resource can be deployed organization-wide to power internal knowledge bases, automate onboarding, or serve as a smart help desk powered by your existing documentation.",
  },
  {
    id: "item-11",
    icon: <GitPullRequestCreate className="size-4" />,
    question: "Is there an API or integration option?",
    answer:
      "API and enterprise integrations are currently available upon request. Contact us to explore embedding Smart Resource into your existing platforms.",
  },
  {
    id: "item-12",
    icon: <Palette className="size-4" />,
    question:
      "Can Smart Resource be customized to match our branding and workflow?",
    answer:
      "Yes. You can white-label Smart Resource or configure it to align with your brand, workflows, and terminology.",
  },

  // 💳 Pricing, Access & Support
  {
    id: "item-13",
    icon: <CreditCard className="size-4" />,
    question: "Is Smart Resource free to use?",
    answer:
      "A free tier is available for individuals. Advanced features, larger file storage, and enterprise support are available on paid plans.",
  },
  {
    id: "item-14",
    icon: <Package className="size-4" />,
    question: "Do I need to install anything?",
    answer:
      "No installation is required for the web app. A browser extension is available for advanced features like credential injection and on-page highlighting.",
  },
  {
    id: "item-15",
    icon: <Globe className="size-4" />,
    question: "How do I get started?",
    answer:
      "Just create an account at smartresource.ai, upload a file, and start chatting with your documents!",
  },
];
