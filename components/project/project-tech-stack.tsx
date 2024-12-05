import { BadgeOutline } from "@/components/ui/badge-outline"

interface ProjectTechStackProps {
  technologies: string[]
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <BadgeOutline key={tech}>{tech}</BadgeOutline>
      ))}
    </div>
  )
}