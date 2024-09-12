import classes from "./About_FAQ.module.css";
import { motion } from "framer-motion";

const AboutFAQ = () => {
  return (
    <main className={classes.aboutFaqWrapper}>
      <div className={classes.questionWrapper}>
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes.article}
        >
          Our Mission
        </motion.p>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes.subtitle}
        >
          Unlock the full potential of cryptocurrencies with the
          <span> NexGen </span> Wallet ecosystem.
        </motion.p>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes.textFaq}
        >
          <span> NexGen </span> Wallet's mission is to make cryptocurrency as
          accessible and convenient as traditional currency. We believe everyone
          should have the freedom to buy, sell, and spend crypto seamlessly,
          just like regular money. Our ecosystem is designed to support this
          vision, ensuring that cryptocurrency becomes easily available and
          usable for all.
        </motion.p>
      </div>
      <div className={classes.questionWrapper}>
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes.article}
        >
          Why Can You Trust Us?
        </motion.p>
        <motion.p
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes.textFaq}
        >
          Your digital assets and personal data are safeguarded by a
          comprehensive range of cutting-edge security measures, including
          multi-factor authentication, advanced encryption, and continuous
          monitoring for suspicious activity. Our dedicated security team works
          around the clock to ensure the protection of your wallet and assets,
          implementing regular audits and vulnerability assessments to stay
          ahead of emerging threats.
        </motion.p>
      </div>
    </main>
  );
};

export default AboutFAQ;
