import classes from "./WalletInfo_Advantages.module.css";
import { motion } from "framer-motion";

const WalletInfo_Advantages = () => {
  const details = [
    {
      title: "Buy and Sell 700+ crypto",
      description:
        "Buy, sell and swap crypto instantly with a debit card, credit card, or bank transfers.",
      imgSrc: "./phone_cropped.webp",
      imgAlt: "phone image",
    },
    {
      title: "Spend with Crypto Card",
      description:
        "Spend more than 800 crypto directly from your crypto wallet.",
      imgSrc: "./phone_cropped.webp",
      imgAlt: "phone image",
    },
    {
      title: "Swap Crypto Instantly",
      description:
        "Take full control of your portfolio and swap 800+ cryptocurrencies instantly.",
      imgSrc: "./phone_cropped.webp",
      imgAlt: "phone image",
    },
    {
      title: "Live Customer Support",
      description:
        "24/7 customer support with a dedicated personal account manager.",
      imgSrc: "./phone_cropped.webp",
      imgAlt: "phone image",
    },
  ];

  return (
    <main className={classes.walletDetailWrapper}>
      {details.map((detail, index) => (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 + index / 2 }}
          key={index}
          className={classes.detailItem}
        >
          <div className={classes.textDetail}>
            <p className={classes.Article}>{detail.title}</p>
            <p className={classes.describeText}>{detail.description}</p>
          </div>
          <div className={classes.imageDetail}>
            <img
              src={detail.imgSrc}
              alt={detail.imgAlt}
              loading="lazy"
              draggable="false"
            />
          </div>
        </motion.div>
      ))}
    </main>
  );
};

export default WalletInfo_Advantages;
