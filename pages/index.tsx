import type { NextPage } from 'next';
import Head from "next/head";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import Link from 'next/link';

interface ProjectType {
  title: string;
  description: string;
  image?: string;
  githubLink?: string;
  liveLink?: string;
  technologies: string[];
}

interface ExperienceType {
  company: string;
  role: string;
  link: string;
  description: string[];
  image?: string;
}

interface EducationType {
  school: string;
  link: string;
  degree: string;
  description: string;
  image?: string;
}

interface CoolShitType {
  title: string;
  link?: string;
}

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded");
  }, []);

  const education: EducationType[] = [
    {
      school: "University of Michigan, Ann Arbor",
      link: "https://www.engin.umich.edu/",
      degree: "B.S.E. Computer Science",
      description: "Coursework: Data structures & Algorithms, C++ Programming, CS Pragmatics, \
                  Calculus 1-2",
      image: "/education/umich.jpg"
    }
  ];

  const experience: ExperienceType[] = [
    {
      company: "Citywide Painting",
      role: "House Painter, Invoice Clerk",
      link: "https://www.citywidepaint.com/", 
      description: [
        "Painted Section-8 housing across all 5 NYC boroughs; Invoice clients and manage internal records with Intuit QuickBooks and Yardi VendorCafe"
      ],
      image: "/employment/citywide.png"
    },
  ];

  const projects: ProjectType[] = [
    {
      title: "QuickSync",
      description: "Full-stack B2B web application to consolidate invoice creation in QuickBooks and VendorCafe into one interface, reducing manual data input by more than 50%; full release coming soon",
      // image: "/employment/citywide.png", 
      githubLink: "https://pitch.com/v/f24-demo-day-zxnxqi/50a580be-6497-435e-9e3d-4516bcde4860", // need to replace with demo 
      technologies: ["FastAPI", "React.js", "MongoDB", "Docker", "python"]
    },
    {
      title: "Renewable Site Classifier",
      description: "Semi-supervised machine learning to classify the suitability of a location for wind and solar energy installations",
      // image: "/employment/citywide.png", // need to replace with demo 
      githubLink: "https://github.com/phoenixsheppard28/Renewable_Suitability_Predictor",
      technologies: ["scikit-learn", "pandas", "numpy", "python"]
    },
    {
      title: "Java Autograder",
      description: "soon...",
      // image: "/employment/citywide.png", 
      githubLink: "https://github.com/phoenixsheppard28/autograder",
      technologies: ["FastAPI", "React.js", "PostgreSQL", "Docker", "python"]
    },
    {
      title: "Network Traffic Classifier",
      description: "soon...",
      // image: "/employment/citywide.png", 
      githubLink: "https://github.com/phoenixsheppard28/network-traffic-classifier",
      technologies: ["scikit-learn", "Apache Spark", "pandas", "Snowflake", "python"]
    }
  ];

  return (
    <>
      <Head>
        <title>Phoenix Sheppard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Phoenix Sheppard - Software Engineer and Student at University of Michigan" />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Phoenix Sheppard" />
        <meta property="og:description" content="Engineering" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sheppnix.dev" />

        

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-6 font-crimson relative bg-gradient-to-b from-[#F0F4E3] via-[#F0F4E3] to-transparent">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#F0F4E3",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: ["#556B2F", "#6B8E23", "#808000"],
              },
              links: {
                color: "#556B2F",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                direction: "none",
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
                trail: {
                  enable: true,
                  length: 3,
                  fillColor: "#F0F4E3",
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 100,
                },
                value: 10,
              },
              opacity: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 0.3,
                  minimumValue: 0.3,
                  sync: true
                }
              },
              blur: {
                enable: true,
                strength: 2
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 4 },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 1,
                  sync: false
                }
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab"
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5
                  }
                }
              }
            },
          }}
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0 backdrop-blur-[4px] bg-gradient-to-b from-[#F0F4E3]/35 via-[#F0F4E3]/20 to-[#F0F4E3]" />

        <div className={`transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} relative z-10 max-w-3xl w-full`}>
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-5xl text-left bg-clip-text text-transparent bg-gradient-to-r from-[#556B2F] to-[#808000] tracking-tight relative leading-normal py-2 before:absolute before:content-['Phoenix_Sheppard'] before:inset-0 before:text-[#F0F4E3] before:blur-[30px] before:-z-10 before:opacity-50">
              Hi, I'm Phoenix
            </h1>

            <div className="text-xl text-[#556B2F] space-y-4 text-left">
              <p>I'm an engineer studying Computer Science at the University of Michigan</p>
              <p>I like tinkering with interesting technology and solving inefficiencies with software </p>
              <p>My interests are in the fields of web development and machine learning</p>
              <p>You can reach me at <Link href="mailto:phoenixs@umich.edu" className="underline transition-colors duration-300 hover:text-[#6B8E23]">phoenixs[at]umich[dot]edu</Link></p>
            </div>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 text-sm text-[#556B2F] font-crimson z-50 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm">
          Status:
          <div className="w-2 h-2 rounded-full bg-[#556B2F] animate-pulse"></div>
        </div>

        <div className="fixed md:left-4 md:top-1/2 md:-translate-y-1/2 top-4 left-0 right-0 md:right-auto flex flex-row md:flex-col items-center justify-center md:justify-center gap-4 z-50">
          <Link href="https://github.com/phoenixsheppard28"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-[#556B2F] hover:text-[#6B8E23] backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.167 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.007C9.52 20.719 9.512 19.763 9.512 19.763C7 20.369 6.32 18.976 6.32 18.976C5.78 17.661 5.06 17.352 5.06 17.352C4.12 16.619 5.13 16.619 5.13 16.619C6.18 16.681 6.792 17.784 6.792 17.784C7.72 19.37 9.282 19.037 9.52 18.772C9.58 18.085 9.85 17.597 10.12 17.352C7.78 17.107 5.32 16.063 5.32 11.717C5.32 10.402 5.81 9.334 6.62 8.513C6.56 8.248 6.13 7.027 6.72 5.474C6.72 5.474 7.78 5.178 9.52 6.398C10.32 6.163 11.12 6.04 11.92 6.04C12.72 6.04 13.52 6.163 14.32 6.398C16.06 5.178 17.12 5.474 17.12 5.474C17.71 7.027 17.28 8.248 17.22 8.513C18.03 9.334 18.52 10.402 18.52 11.717C18.52 16.063 16.06 17.107 13.72 17.352C14.05 17.659 14.32 18.197 14.32 19.092C14.32 20.37 14.312 20.657 14.312 21.007C14.312 21.272 14.492 21.581 14.992 21.49C18.967 20.167 21.832 16.419 21.832 12C21.832 6.477 17.355 2 11.832 2H12Z" />
            </svg>
          </Link>
          <Link href="https://www.linkedin.com/in/phoenixsheppard/"
            className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-[#556B2F] hover:text-[#6B8E23] backdrop-blur-sm p-2 rounded-full">
            <svg
              className="w-[30px] h-[30px] opacity-70 hover:opacity-100 transition-opacity"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM18.5 18.5V13.2C18.5 11.5 17.1 10.1 15.4 10.1C14.5 10.1 13.4 10.6 12.8 11.4V10.3H10.3V18.5H12.8V13.6C12.8 12.8 13.4 12.2 14.2 12.2C15 12.2 15.6 12.8 15.6 13.6V18.5H18.5ZM6.9 8.2C7.8 8.2 8.5 7.5 8.5 6.6C8.5 5.7 7.8 5 6.9 5C6 5 5.3 5.7 5.3 6.6C5.3 7.5 6 8.2 6.9 8.2ZM8.2 18.5V10.3H5.7V18.5H8.2Z" />
            </svg>
          </Link>
        </div>

        <div className="absolute bottom-8 animate-bounce flex flex-col items-center gap-2">
          <span className="text-sm text-[#556B2F]">see more</span>
          <div className="flex flex-col -space-y-1">
            <svg
              className="w-4 h-4 text-[#556B2F]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      {/* See More */}

      {/* Main Content */}
      <div className="bg-[#F0F4E3] text-[#556B2F]">
        {/* Education Section */}
        <section className="max-w-4xl mx-auto pt-0 pb-20 px-6 relative z-20">
          <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#556B2F] to-[#808000] tracking-tight relative leading-normal py-2 before:absolute before:content-['Education'] before:inset-0 before:text-[#F0F4E3] before:blur-[30px] before:-z-10 before:opacity-50">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 font-crimson">
                {edu.image && (
                  <Link href={edu.link} className="w-20 md:w-32 h-20 md:h-32 relative flex-shrink-0 drop-shadow-[0_4px_4px_rgba(85,107,47,0.25)] hover:opacity-80 transition-opacity">
                    <Image
                      src={edu.image}
                      alt={edu.school}
                      fill
                      className="object-contain"
                    />
                  </Link>
                )}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-[#556B2F]">
                    <Link href={edu.link} className="hover:underline hover:text-[#6B8E23]">{edu.school}</Link>
                  </h3>
                  <p className="text-[#808000]">{edu.degree}</p>
                  <p className="text-[#556B2F] mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cool Shit Section
        <section className="max-w-4xl mx-auto py-20 px-6 border-t border-[#D3D9C8] relative z-20">
          <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#556B2F] to-[#808000] tracking-tight relative leading-normal py-2 before:absolute before:content-['Cool_Shit'] before:inset-0 before:text-[#F0F4E3] before:blur-[30px] before:-z-10 before:opacity-50">
            some stuff i've done
          </h2>
          <div className="flex flex-col space-y-4 font-crimson">
            {coolShit.map((item, index) => (
              <span key={index} className="text-[#556B2F] text-lg">
                {item.link ? (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 hover:underline hover:text-[#6B8E23] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </span>
            ))}
          </div>
        </section> */}
       {/* Projects Section */}
<section className="max-w-4xl mx-auto py-20 px-6 border-t border-[#D3D9C8] relative z-20">
  <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#556B2F] to-[#808000] tracking-tight relative leading-normal py-2 before:absolute before:content-['Projects'] before:inset-0 before:text-[#F0F4E3] before:blur-[30px] before:-z-10 before:opacity-50">
    Projects
  </h2>
  <div className="space-y-0">
    {projects.map((project, index) => (
      <div key={index} className="flex items-start gap-6 p-6 font-crimson">
        {project.image && (
          <Link href={project.githubLink || "#"} className="w-14 h-14 relative flex-shrink-0 drop-shadow-[0_4px_4px_rgba(85,107,47,0.25)] hover:opacity-80 transition-opacity">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </Link>
        )}
        <div className="flex-grow">
          <div className="flex md:items-center flex-col md:flex-row md:gap-2">
            <h3 className="text-xl font-semibold text-[#556B2F]">
              <Link href={project.githubLink || "#"} className="hover:underline hover:text-[#6B8E23] transition-colors">
                {project.title}
              </Link>
            </h3>
            <span className="text-[#556B2F] hidden md:inline">•</span>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-0.5 text-sm rounded-full bg-[#8F9779]/30 text-[#556B2F]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.description && (
            <p className="mt-2 text-[#556B2F]">{project.description}</p>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
        {/* Experience Section */}
        <section className="max-w-4xl mx-auto py-20 px-6 border-t border-[#D3D9C8] relative z-20">
          <h2 className="text-3xl font-crimson mb-12 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#556B2F] to-[#808000] tracking-tight relative leading-normal py-2 before:absolute before:content-['Experience'] before:inset-0 before:text-[#F0F4E3] before:blur-[30px] before:-z-10 before:opacity-50">
            Experience
          </h2>
          <div className="space-y-0">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start gap-6 p-6 font-crimson">
                {exp.image && (
                  <Link href={exp.link} className="w-14 h-14 relative flex-shrink-0 drop-shadow-[0_4px_4px_rgba(85,107,47,0.25)] hover:opacity-80 transition-opacity">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      fill
                      className="object-contain"
                    />
                  </Link>
                )}
                <div className="flex-grow">
                  <div className="flex md:items-center flex-col md:flex-row md:gap-2">
                    <h3 className="text-xl font-semibold text-[#556B2F]">
                      <Link href={exp.link} className="hover:underline hover:text-[#6B8E23] transition-colors">{exp.company}</Link>
                    </h3>
                    <span className="text-[#556B2F] hidden md:inline">•</span>
                    <span className="text-[#556B2F]">{exp.role}</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-[#556B2F]">{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests section */}
        <section className="max-w-4xl mx-auto py-20 px-6 border-t border-[#D3D9C8] relative z-20">
          <h2 className="text-3xl font-crimson mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-[#556B2F] to-[#808000] tracking-tight relative leading-normal py-2 before:absolute before:content-['Hobbies_&_Fun'] before:inset-0 before:text-[#F0F4E3] before:blur-[30px] before:-z-10 before:opacity-50">
            Interests
          </h2>
          <div className="font-crimson flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full bg-[#8F9779]/50 text-[#556B2F]">Ancient Roman history</span>
            <span className="px-4 py-2 rounded-full bg-[#8F9779]/50 text-[#556B2F]">Biking</span>
            <span className="px-4 py-2 rounded-full bg-[#8F9779]/50 text-[#556B2F]">Reading</span>
            <span className="px-4 py-2 rounded-full bg-[#8F9779]/50 text-[#556B2F]">Hiking</span>
            <span className="px-4 py-2 rounded-full bg-[#8F9779]/50 text-[#556B2F]">International affairs</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;