import { ProjectGrid } from '@/components/projects/project-grid';

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
        <ProjectGrid />
      </div>
    </section>
  );
}