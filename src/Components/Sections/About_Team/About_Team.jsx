import classes from "./About_Team.module.css";
import { motion } from "framer-motion";

const About_Team = () => {
  const workers = [
    { name: "Name Surname", job: "Job Title", photo: "./worker.png" },
    { name: "Name Surname", job: "Job Title", photo: "./worker.png" },
    { name: "Name Surname", job: "Job Title", photo: "./worker.png" },
    { name: "Name Surname", job: "Job Title", photo: "./worker.png" },
  ];

  return (
    <main className={classes.teamWrapper}>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className={classes.article}
      >
        Meet the <span> NexGen </span> Team
      </motion.p>
      <div className={classes.teamItems}>
        {workers.map((worker, index) => (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 + index / 2 }}
            key={index}
            className={classes.teamWorker}
          >
            <div className={classes.textInfo}>
              <span className={classes.workerArticle}>{worker.name}</span>
              <span className={classes.workerTitle}>{worker.job}</span>
            </div>
            <div className={classes.workerPhoto}>
              <img src={worker.photo} alt={"image"} loading={"lazy"} />
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default About_Team;
