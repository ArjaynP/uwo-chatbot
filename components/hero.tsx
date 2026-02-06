import { MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-western-deep px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-western-orchid">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
          How can we help you today?
        </h2>
        <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-white/70">
          Get instant answers to your questions about registration, finances,
          transcripts, and more. Click the chat button in the bottom right to
          get started.
        </p>
      </div>
    </section>
  )
}
