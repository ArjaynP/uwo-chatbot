import {
  BookOpen,
  CalendarDays,
  Award,
  GraduationCap,
  HandCoins,
  Landmark,
  DollarSign,
  HeartHandshake,
  FileText,
  ClipboardList,
  ScrollText,
  CreditCard,
  HelpCircle,
} from "lucide-react"

const topics = [
  {
    title: "Course Registration",
    description: "Enroll in courses, manage your timetable, and handle waitlists.",
    icon: BookOpen,
  },
  {
    title: "Draft My Schedule",
    description: "Plan and draft your upcoming course schedule.",
    icon: CalendarDays,
  },
  {
    title: "Degrees / Diplomas",
    description: "Information about degree requirements and diploma programs.",
    icon: Award,
  },
  {
    title: "Graduation / Convocation",
    description: "Apply to graduate, convocation ceremonies, and timelines.",
    icon: GraduationCap,
  },
  {
    title: "Bursary / Work Study",
    description: "Learn about bursary programs and work-study opportunities.",
    icon: HandCoins,
  },
  {
    title: "OSAP / Out of Province Loans",
    description: "Ontario student assistance and out-of-province loan information.",
    icon: Landmark,
  },
  {
    title: "Tuition, Deposits, & Refunds",
    description: "Fees, payment schedules, deposits, and refund policies.",
    icon: DollarSign,
  },
  {
    title: "Financial Aid Counselling",
    description: "Get guidance on financial aid options and budgeting.",
    icon: HeartHandshake,
  },
  {
    title: "Official Western Letters",
    description: "Request enrolment verification and confirmation letters.",
    icon: FileText,
  },
  {
    title: "Third Party Forms",
    description: "Submit and process third-party documentation.",
    icon: ClipboardList,
  },
  {
    title: "Transcripts",
    description: "Order official transcripts and view academic records.",
    icon: ScrollText,
  },
  {
    title: "Western ONECard",
    description: "Your campus ID for access, meals, printing, and more.",
    icon: CreditCard,
  },
  {
    title: "Other",
    description: "General inquiries and other registrar services.",
    icon: HelpCircle,
  },
]

export function TopicCards() {
  return (
    <section className="bg-background px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-western-purple">
          Topics
        </h3>
        <h2 className="mb-10 text-balance text-center text-3xl font-bold text-foreground">
          What can we help you with?
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <div
                key={topic.title}
                className="group flex cursor-pointer flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-western-purple/30 hover:shadow-lg hover:shadow-western-purple/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-western-purple text-white transition-colors group-hover:bg-western-orchid">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{topic.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {topic.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
