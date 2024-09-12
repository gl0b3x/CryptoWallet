import classes from "./Card_Preview.module.css";
import CheckBox from "../../UI/CheckBox/CheckBox.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Card_Preview = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChecked(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={classes.cardPreviewWrapper}>
      <div className={classes.generalBlock}>
        <motion.section
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes.textBlock}
        >
          <div className={classes.articleBlock}>
            <p className={classes.article}>
              <span>NexGen</span> Wallet
            </p>
            <p className={classes.article}>Crypto Card</p>
          </div>
          <span className={classes.describeText}>
            Spend hundreds of cryptos directly from your wallets, while enjoying
            the lowest transaction fees.
          </span>
          <span className={classes.describeText}>
            Spend-to-earn: Get up to 3% cashback on purchases with the best
            crypto rewards card.
          </span>
        </motion.section>
        <motion.section
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={classes.imageCard}
        >
          <img
            src={"./cards.webp"}
            alt={"crypto card"}
            loading="lazy"
            draggable={"false"}
          />
        </motion.section>
      </div>
      <div className={classes.checkBoxGroup}>
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={classes.checkBox}
        >
          <CheckBox checked={checked} disabled={true} />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className={classes.describeCheckBox}
          >
            Zero monthly fees
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={classes.checkBox}
        >
          <CheckBox checked={checked} disabled={true} />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className={classes.describeCheckBox}
          >
            3% Crypto Cashback
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={classes.checkBox}
        >
          <CheckBox checked={checked} disabled={true} />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className={classes.describeCheckBox}
          >
            Real-time Conversion
          </motion.span>
        </motion.div>
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={classes.checkBox}
        >
          <CheckBox checked={checked} disabled={true} />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.25, duration: 0.5 }}
            className={classes.describeCheckBox}
          >
            0.8% transaction fee
          </motion.span>
        </motion.div>
      </div>
    </main>
  );
};

export default Card_Preview;
