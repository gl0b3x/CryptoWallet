import classes from "./WalletInfo_App.module.css";
import { motion } from "framer-motion";

const WalletInfo_App = () => {
  const walletFeatures = [
    {
      title: "Create multiple crypto wallets",
      description:
        "Create new wallets in a few clicks and make crypto transactions instantly.",
    },
    {
      title: "Multi-chain crypto wallet",
      description: "Manage your assets on 30+ blockchain networks.",
    },
    {
      title: "Manage crypto from anywhere",
      description:
        "Access your portfolio from any device using CryptoWallet.com web and mobile app.",
    },
    {
      title: "Cash-out crypto in a few clicks",
      description:
        "Sell your crypto holdings instantly at low fees directly to your bank account.",
    },
  ];

  return (
    <main className={classes.appWrapper}>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className={classes.Article}
      >
        The Best <b> Crypto </b> Wallet App
      </motion.p>
      <section className={classes.contentWrapper}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            background:
              "linear-gradient(90deg, rgba(var(--accentColor), 0.1) 0%, rgba(var(--purpleColor), 0.5) 100%)",
            opacity: 1,
          }}
          transition={{ duration: 2 }}
          className={classes.imageContent}
        >
          <motion.img
            initial={{ y: -50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2 }}
            src="./phone_slider.webp"
            alt="phone app preview"
            loading="lazy"
            draggable="false"
          />
        </motion.div>
        <div className={classes.textContentWrapper}>
          {walletFeatures.map((feature, index) => (
            <div key={index} className={classes.textContent}>
              <motion.p
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 2 }}
                className={classes.textArticle}
              >
                {feature.title}
              </motion.p>
              <motion.p
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 2 }}
                className={classes.textDescribe}
              >
                {feature.description}
              </motion.p>
            </div>
          ))}
          <div className={classes.download}>
            <motion.img
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 2 }}
              src="./AppStore.webp"
              alt="Download from App Store"
              loading="lazy"
              tabIndex="0"
              draggable="false"
            />
            <motion.img
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 2 }}
              src="./GooglePlay.webp"
              alt="Download from Google Play"
              loading="lazy"
              tabIndex="0"
              draggable="false"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default WalletInfo_App;
