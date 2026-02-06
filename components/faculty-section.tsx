"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Building2, ImageIcon } from "lucide-react"

interface Department {
  name: string
}

interface Faculty {
  name: string
  departments: Department[]
}

const faculties: Faculty[] = [
  {
    name: "Faculty of Science",
    departments: [
      { name: "Applied Mathematics" },
      { name: "Biology" },
      { name: "Chemistry" },
      { name: "Computer Science" },
      { name: "Earth Sciences" },
      { name: "Mathematics" },
      { name: "Physics and Astronomy" },
      { name: "Statistical and Actuarial Sciences" },
    ],
  },
  {
    name: "Arts & Humanities",
    departments: [
      { name: "English & Writing Studies" },
      { name: "French Studies" },
      { name: "History" },
      { name: "Languages and Cultures" },
      { name: "Philosophy" },
      { name: "Visual Arts" },
    ],
  },
  {
    name: "Education",
    departments: [
      { name: "Pre-Service Education" },
      { name: "Graduate Programs in Education" },
      { name: "Professional Development" },
    ],
  },
  {
    name: "Health Sciences",
    departments: [
      { name: "Communication Sciences and Disorders" },
      { name: "Health Studies" },
      { name: "Kinesiology" },
      { name: "Nursing" },
      { name: "Occupational Therapy" },
      { name: "Physical Therapy" },
    ],
  },
  {
    name: "Social Science",
    departments: [
      { name: "Anthropology" },
      { name: "Economics" },
      { name: "Geography and Environment" },
      { name: "History (Joint)" },
      { name: "Management and Organizational Studies" },
      { name: "Political Science" },
      { name: "Psychology" },
      { name: "Sociology" },
      { name: "Women's Studies and Feminist Research" },
    ],
  },
  {
    name: "Information & Media Studies",
    departments: [
      { name: "Library and Information Science" },
      { name: "Media Studies" },
      { name: "Journalism" },
    ],
  },
  {
    name: "Don Wright Faculty of Music",
    departments: [
      { name: "Music Education" },
      { name: "Music Performance Studies" },
      { name: "Music Research" },
      { name: "Theory and Composition" },
      { name: "Popular Music Studies" },
    ],
  },
]

export function FacultySection() {
  const [openFaculty, setOpenFaculty] = useState<string | null>(null)

  const toggleFaculty = (name: string) => {
    setOpenFaculty((prev) => (prev === name ? null : name))
  }

  return (
    <section className="bg-muted px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-2 text-center text-sm font-semibold uppercase tracking-wider text-western-purple">
          Faculties
        </h3>
        <h2 className="mb-4 text-balance text-center text-3xl font-bold text-foreground">
          General Faculty Inquiries
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-center leading-relaxed text-muted-foreground">
          Select a faculty below to view its departments. Our chatbot can
          provide general information and guidance for each department.
        </p>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faculties.map((faculty) => {
            const isOpen = openFaculty === faculty.name
            return (
              <div
                key={faculty.name}
                className="overflow-hidden rounded-xl border border-border bg-card"
              >
                <button
                  onClick={() => toggleFaculty(faculty.name)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-muted"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-western-purple text-white">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {faculty.name}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {isOpen && (
                  <div className="border-t border-border px-6 py-4">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {faculty.departments.map((dept) => (
                        <div
                          key={dept.name}
                          className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-colors hover:border-western-purple/30"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                            <ImageIcon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {dept.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
