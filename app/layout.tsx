import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Western University - Office of the Registrar",
  description:
    "Western University Office of the Registrar chatbot assistant. Get help with course registration, financial aid, transcripts, and more.",
}

export const viewport: Viewport = {
  themeColor: "#4F2683",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
