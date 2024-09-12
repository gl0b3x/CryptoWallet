import classes from "./WalletInfo_Multichain.module.css";
import { motion } from "framer-motion";

const WalletInfo_Multichain = () => {
  const information = [
    "Create new wallets in seconds",
    "30+ networks supported",
    "Manage multiple crypto wallets",
    "Swap assets across different blockchains",
  ];

  return (
    <main className={classes.MultiChainWrapper}>
      <motion.p
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className={classes.Article}
      >
        Multi-Chain <b>NexGen</b> Wallet
      </motion.p>
      <div className={classes.multiChainContent}>
        <div className={classes.textContent}>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={classes.contentArticle}
          >
            Create multi-currency crypto wallets on various blockchain networks
            including ERC20, TRC20, BEP20 and many more.
          </motion.span>
          <ul className={classes.advantagesWallet}>
            {information.map((info, index) => (
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 + index / 3 }}
                key={index}
              >
                <span> {info}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className={classes.imageMultiChain}
        >
          <img
            src="./multichain-bg.webp"
            alt={"multichain background"}
            loading="lazy"
            draggable="false"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default WalletInfo_Multichain;
