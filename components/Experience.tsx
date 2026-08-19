import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./Experience.module.scss";

export interface ExperienceType {
  company: string;
  role: string;
  link: string;
  description: string[];
  image?: string;
}

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title} data-glow="Experience">
        Experience
      </h2>
      <div>
        {experience.map((exp, index) => (
          <div key={index} className={s.item}>
            {exp.image && (
              <Link href={exp.link} className={s.logo}>
                <Image
                  src={exp.image}
                  alt={exp.company}
                  fill
                  className={s.logoImage}
                />
              </Link>
            )}
            <div className={s.body}>
              <div className={s.heading}>
                <h3 className={s.itemTitle}>
                  <Link href={exp.link} className={s.link}>
                    {exp.company}
                  </Link>
                </h3>
                <span className={s.separator}>•</span>
                <span>{exp.role}</span>
              </div>
              <ul className={s.bullets}>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
