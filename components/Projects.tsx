import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./Projects.module.scss";

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
    <section className={s.section}>
      <h2 className={s.title} data-glow="Projects">
        Projects
      </h2>
      <div className={s.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${s.card} ${
              index === projects.length - 1 && projects.length % 3 === 1
                ? s.cardCentered
                : ""
            }`}
          >
            {project.image && (
              <div className={s.thumb}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={s.thumbImage}
                />
              </div>
            )}
            <h3 className={s.cardTitle}>{project.title}</h3>
            <p className={s.description}>{project.description}</p>
            <div className={s.footer}>
              <div className={s.tags}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={s.tag}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={s.links}>
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    className={s.link}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                )}
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    className={s.link}
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
