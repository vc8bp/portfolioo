
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/projects/project-card';



export function ProjectGrid() {
  return (
    <div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <div key={project.title} >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}