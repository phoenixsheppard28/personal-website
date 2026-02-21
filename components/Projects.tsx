import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectType {
  title: string;
  description: string;
  image?: string;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
}

interface ProjectsProps {
  projects: ProjectType[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 border-t border-[#D3D9C8] relative z-20">
      <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#556B2F] to-[#808000] tracking-tight relative leading-normal py-2 before:absolute before:content-['Projects'] before:inset-0 before:text-[#F0F4E3] before:blur-[30px] before:-z-10 before:opacity-50">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-6 bg-[#F8FDF4] rounded-lg shadow-md flex flex-col font-crimson h-full ${
              index === projects.length - 1 && projects.length % 3 === 1
                ? "md:col-start-2"
                : ""
            }`}
          >
            {project.image && (
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold text-[#556B2F] mb-2">
              {project.title}
            </h3>
            <p className="text-[#556B2F] mb-4 flex-grow">
              {project.description}
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-sm rounded-full bg-[#8F9779]/30 text-[#556B2F]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    className="text-[#6B8E23] hover:underline transition-colors mr-4"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                )}
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    className="text-[#6B8E23] hover:underline transition-colors"
                    target="_blank"
                  >
                    Website
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
