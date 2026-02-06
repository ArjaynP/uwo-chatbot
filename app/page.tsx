import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TopicsSection } from "@/components/topics-section"
import { FacultySection } from "@/components/faculty-section"
import { ChatWidget } from "@/components/chat-widget"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1 border-0">
        <Hero />
        <TopicsSection />
        <FacultySection />
        <ChatWidget />
      </main>
    </div>
  )
}
