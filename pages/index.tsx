import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState, useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import Link from "next/link";
import experience_data from "../data/experience.json";
import education_data from "../data/education.json";
import Experience, { ExperienceType } from "../components/Experience";
import s from "../styles/Home.module.scss";

interface EducationEntry {
  school: string;
  link: string;
  degree: string;
  description: string;
}

const INTERESTS = ["ancient history", "breakcore", "reading", "satellites"];

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles loaded");
    },
    [],
  );

  const education: EducationEntry[] = education_data;
  const edu = education[0];

  const experience: ExperienceType[] = experience_data;

  return (
    <>
      <Head>
        <title>Phoenix Sheppard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Phoenix Sheppard - Software Engineer and Student at University of Michigan"
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Phoenix Sheppard" />
        <meta property="og:description" content="Engineering" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sheppnix.dev" />
      </Head>

      {/* Hero Section */}
      <section className={s.hero}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#FBFAF8",
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: ["#1C1B18", "#55534A", "#8A887D"],
              },
              links: {
                color: "#55534A",
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
                  fillColor: "#FBFAF8",
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
                  sync: true,
                },
              },
              blur: {
                enable: true,
                strength: 2,
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
                  sync: false,
                },
              },
            },
            detectRetina: true,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
          }}
          className={s.particles}
        />

        <div className={s.heroVeil} />

        <div
          className={`${s.heroContent} ${mounted ? s.heroContentVisible : ""}`}
        >
          <div className={s.heroStack}>
            <h1 className={s.heroTitle} data-glow="Phoenix Sheppard">
              Hi, I'm Phoenix
            </h1>

            <div className={s.heroBio}>
              <p>
                I'm an engineer studying Computer Science at the University of
                Michigan
              </p>
              <p>
                I like tinkering with interesting technology and solving
                inefficiencies with software{" "}
              </p>
              <p>
                My interests are in the fields of web development, geospatial
                science, and intelligence analysis
              </p>
              <p>You can reach me at phoenixs[at]umich[dot]edu</p>
            </div>

            <p className={s.currentLine}>
              currently: <em>?</em>
            </p>

            <Experience experience={experience} />

            <div className={s.trail}>
              <p>
                {edu.degree}, {edu.school}.
              </p>
              <p>{edu.description}.</p>
              <p>Outside of that I like: {INTERESTS.join(", ")}.</p>
            </div>
          </div>
        </div>

        <div className={s.socialRail}>
          <Link
            href="https://github.com/phoenixsheppard28"
            className={s.socialLink}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.167 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.007C9.52 20.719 9.512 19.763 9.512 19.763C7 20.369 6.32 18.976 6.32 18.976C5.78 17.661 5.06 17.352 5.06 17.352C4.12 16.619 5.13 16.619 5.13 16.619C6.18 16.681 6.792 17.784 6.792 17.784C7.72 19.37 9.282 19.037 9.52 18.772C9.58 18.085 9.85 17.597 10.12 17.352C7.78 17.107 5.32 16.063 5.32 11.717C5.32 10.402 5.81 9.334 6.62 8.513C6.56 8.248 6.13 7.027 6.72 5.474C6.72 5.474 7.78 5.178 9.52 6.398C10.32 6.163 11.12 6.04 11.92 6.04C12.72 6.04 13.52 6.163 14.32 6.398C16.06 5.178 17.12 5.474 17.12 5.474C17.71 7.027 17.28 8.248 17.22 8.513C18.03 9.334 18.52 10.402 18.52 11.717C18.52 16.063 16.06 17.107 13.72 17.352C14.05 17.659 14.32 18.197 14.32 19.092C14.32 20.37 14.312 20.657 14.312 21.007C14.312 21.272 14.492 21.581 14.992 21.49C18.967 20.167 21.832 16.419 21.832 12C21.832 6.477 17.355 2 11.832 2H12Z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/phoenixsheppard/"
            className={s.socialLink}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM18.5 18.5V13.2C18.5 11.5 17.1 10.1 15.4 10.1C14.5 10.1 13.4 10.6 12.8 11.4V10.3H10.3V18.5H12.8V13.6C12.8 12.8 13.4 12.2 14.2 12.2C15 12.2 15.6 12.8 15.6 13.6V18.5H18.5ZM6.9 8.2C7.8 8.2 8.5 7.5 8.5 6.6C8.5 5.7 7.8 5 6.9 5C6 5 5.3 5.7 5.3 6.6C5.3 7.5 6 8.2 6.9 8.2ZM8.2 18.5V10.3H5.7V18.5H8.2Z" />
            </svg>
          </Link>
          <Link href="/Phoenix_Sheppard_Resume.pdf" className={s.socialLink}>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308   c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z" />
                <path d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659   c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z" />
                <path d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695   h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35   c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899   c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z" />
              </g>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
