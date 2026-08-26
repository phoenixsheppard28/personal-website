import React from "react";
import Link from "next/link";
import s from "./Experience.module.scss";

export interface ExperienceType {
  company: string;
  role: string;
  link: string;
}

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section>
      <p className={s.label}>previously:</p>
      <div className={s.ledger}>
        {experience.map((exp, index) => (
          <div key={index} className={s.row}>
            <span className={s.company}>
              <Link href={exp.link}>{exp.company}</Link>
            </span>
            <span className={s.role}>{exp.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
