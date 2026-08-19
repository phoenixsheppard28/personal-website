import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./Education.module.scss";

export interface EducationType {
  school: string;
  link: string;
  degree: string;
  description: string;
  image?: string;
}

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title} data-glow="Education">
        Education
      </h2>
      <div className={s.list}>
        {education.map((edu, index) => (
          <div key={index} className={s.item}>
            {edu.image && (
              <Link href={edu.link} className={s.logo}>
                <Image
                  src={edu.image}
                  alt={edu.school}
                  fill
                  className={s.logoImage}
                />
              </Link>
            )}
            <div className={s.text}>
              <h3 className={s.itemTitle}>
                <Link href={edu.link} className={s.link}>
                  {edu.school}
                </Link>
              </h3>
              <p className={s.degree}>{edu.degree}</p>
              <p className={s.description}>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
