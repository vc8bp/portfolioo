import { Card } from "@/components/ui/card"

interface ProjectContentProps {
  content: {
    title: string
    description: string
  }[]
}

export function ProjectContent({ content }: ProjectContentProps) {
  return (
    <div className="grid gap-6">
      {content.map((section, index) => (
        <Card key={index} className="p-6">
          <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{section.description}</p>
        </Card>
      ))}
    </div>
  )
}