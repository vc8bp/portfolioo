"use client"

import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProjectHeaderProps {
  title: string
  description: string
  githubUrl?: string
  liveUrl?: string
}

export function ProjectHeader({ title, description, githubUrl, liveUrl }: ProjectHeaderProps) {
  return (
    <div className="relative border-b pb-8">
      <Link href="/" className="absolute -top-12">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Button>
      </Link>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-lg text-muted-foreground mt-2">{description}</p>
        </div>
        <div className="flex gap-3">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <Link href={githubUrl} target="_blank" className="gap-2">
                <Github className="h-4 w-4" />
                View Source
              </Link>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild>
              <Link href={liveUrl} target="_blank" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}