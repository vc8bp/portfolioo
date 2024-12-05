
import { Badge } from '@/components/ui/badge';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative space-y-8">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-6" />
      {items.map((item, index) => (
        <div
          key={index}
          className="relative pl-10 md:pl-14"
        >
          <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background md:h-12 md:w-12">
            {item.year}
          </div>
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <span className="text-muted-foreground">at {item.company}</span>
            </div>
            <p className="text-muted-foreground">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}