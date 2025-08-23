import { notFound } from "next/navigation"
import { getProjectBySlug, projectsData } from "@/lib/projects-data"
import ProjectMasterTemplate from "@/components/project-master-template"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectMasterTemplate project={project} />
}
