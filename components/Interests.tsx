import React from "react";
import s from "./Interests.module.scss";

const INTERESTS = ["Ancient history", "Breakcore", "Biking", "Satellites"];

const Interests: React.FC = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title} data-glow="Hobbies & Fun">
        Things I like
      </h2>
      <div className={s.chips}>
        {INTERESTS.map((interest, index) => (
          <span key={index} className={s.chip}>
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Interests;
