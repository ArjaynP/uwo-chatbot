"use client"

import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Award,
  Briefcase,
  Landmark,
  DollarSign,
  HandHeart,
  FileText,
  ClipboardList,
  ScrollText,
  CreditCard,
  HelpCircle,
} from "lucide-react"
import type { ReactNode } from "react"

interface Topic {
  title: string
  description: string
  icon: ReactNode
  thumbnail: string
}

const topics: Topic[] = [
  {
    title: "Course Registration",
    description:
      "Get help with enrolling in courses, swapping sections, and managing your timetable.",
    icon: <BookOpen className="h-5 w-5" />,
    thumbnail: "/thumbnails/course-registration.svg",
  },
  {
    title: "Draft My Schedule",
    description:
      "Plan and draft your ideal class schedule for the upcoming term.",
    icon: <CalendarDays className="h-5 w-5" />,
    thumbnail: "/thumbnails/draft-schedule.svg",
  },
  {
    title: "Degrees/Diplomas",
    description:
      "Information about degree requirements, program changes, and diploma options.",
    icon: <GraduationCap className="h-5 w-5" />,
    thumbnail: "/thumbnails/degrees-diplomas.svg",
  },
  {
    title: "Graduation/Convocation",
    description:
      "Details on graduation applications, ceremonies, and convocation dates.",
    icon: <Award className="h-5 w-5" />,
    thumbnail: "/thumbnails/graduation.svg",
  },
  {
    title: "Bursary/Work Study",
    description:
      "Learn about bursary programs and on-campus work-study opportunities.",
    icon: <Briefcase className="h-5 w-5" />,
    thumbnail: "/thumbnails/bursary-workstudy.svg",
  },
  {
    title: "OSAP or Out of Province Loans",
    description:
      "Guidance on OSAP applications, out-of-province student loans, and funding.",
    icon: <Landmark className="h-5 w-5" />,
    thumbnail: "/thumbnails/osap-loans.svg",
  },
  {
    title: "Tuition, Deposits, & Refunds",
    description:
      "Find answers about tuition fees, deposit requirements, and refund policies.",
    icon: <DollarSign className="h-5 w-5" />,
    thumbnail: "/thumbnails/tuition-deposits.svg",
  },
  {
    title: "Financial Aid Counselling",
    description:
      "Connect with financial aid counsellors for personalized support.",
    icon: <HandHeart className="h-5 w-5" />,
    thumbnail: "/thumbnails/financial-counselling.svg",
  },
  {
    title: "Official Western Letters",
    description:
      "Request official letters such as enrollment verification and confirmation letters.",
    icon: <FileText className="h-5 w-5" />,
    thumbnail: "/thumbnails/official-letters.svg",
  },
  {
    title: "Third Party Forms",
    description:
      "Submit and process forms required by external organizations and agencies.",
    icon: <ClipboardList className="h-5 w-5" />,
    thumbnail: "/thumbnails/third-party-forms.svg",
  },
  {
    title: "Transcripts",
    description:
      "Order official transcripts for academic records and credential verification.",
    icon: <ScrollText className="h-5 w-5" />,
    thumbnail: "/thumbnails/transcripts.svg",
  },
  {
    title: "Western ONECard",
    description:
      "Manage your Western ONECard for campus identification, building access, and payments.",
    icon: <CreditCard className="h-5 w-5" />,
    thumbnail: "/thumbnails/onecard.svg",
  },
  {
    title: "Other",
    description:
      "Have a different question? Ask about any other student services topic.",
    icon: <HelpCircle className="h-5 w-5" />,
    thumbnail: "/thumbnails/other.svg",
  },
]

export function TopicsSection() {
  return (
    <section id="topics" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            How Can We Help You?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
            Select a topic below to learn more or ask our chatbot for
            personalized assistance.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {topics.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <button
      type="button"
      className="group relative flex aspect-square flex-col items-center justify-end overflow-hidden rounded-xl transition-all hover:shadow-lg hover:shadow-western-purple/10"
      style={{
        backgroundImage: `url(${topic.thumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-western-purple/60 transition-colors group-hover:bg-western-purple/50" />
      {/* Icon + title at the bottom */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 px-2 pb-3 text-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
          {topic.icon}
        </div>
        <span className="text-xs font-semibold leading-tight text-white">
          {topic.title}
        </span>
      </div>
    </button>
  )
}
