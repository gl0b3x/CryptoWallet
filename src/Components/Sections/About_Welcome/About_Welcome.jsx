import classes from "./About_Welcome.module.css";
import { motion } from "framer-motion";

const About_Welcome = () => {
  return (
    <main className={classes.WelcomeWrapper}>
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className={classes.textWrapper}
      >
        <p className={classes.article}>
          Welcome to <span>NexGen</span> Wallet
        </p>
        <b className={classes.text}>
          At NexGen, we believe that cryptocurrency is money and should be used
          as such. CryptoWallet.com is more than just a wallet — it's a
          groundbreaking crypto neo-bank designed to achieve the same level of
          mass adoption as traditional currencies like the dollar or euro.
        </b>
        <span className={classes.text}>
          NexGen Wallet is your all-in-one solution for all crypto transactions.
          You can manage, buy, sell, and spend cryptocurrency effortlessly with
          your card. Our service is fast, convenient, and user-friendly.
        </span>
      </motion.div>
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className={classes.imageArticle}
      >
        <img
          src={"./logo.webp"}
          alt={"logo company"}
          loading={"lazy"}
          draggable="false"
        />
      </motion.div>
    </main>
  );
};

export default About_Welcome;
