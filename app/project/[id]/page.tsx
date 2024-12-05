import { ProjectHeader } from "@/components/project/project-header"
import { ProjectGallery } from "@/components/project/project-gallery"
import { ProjectTechStack } from "@/components/project/project-tech-stack"
import { ProjectContent } from "@/components/project/project-content"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation";


export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const projectData = projects.find(e => e.slug == id)
  if(!projectData) return notFound()

  return (
    <main className="container max-w-4xl mx-auto py-20 px-4">
      <ProjectHeader
        title={projectData.title}
        description={projectData.description}
        githubUrl={projectData.github}
        liveUrl={projectData.demo}
      />
      
      <div className="mt-12 space-y-12">
        <ProjectGallery images={projectData.images} />
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
          <ProjectTechStack technologies={projectData.technologies} />
        </div>
        
        <ProjectContent content={projectData.content} />
      </div>
    </main>
  )
}


export async function generateStaticParams() {
  // Assuming `projects` contains all your project data with `slug` fields
  return projects.map((project) => ({
    id: project.slug, // Match the dynamic parameter `id` in your route
  }));
}