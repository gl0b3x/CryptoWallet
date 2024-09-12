import classes from "./Footer.module.css";
import { FaDiscord, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className={classes.footerWrapper}>
      <img
        className={classes.backgroundImage}
        src="/footerBackground.webp"
        alt="background image"
        loading={"lazy"}
        draggable={"false"}
      />
      <div className={classes.footerNavigation}>
        <ul className={classes.footerNav}>
          <li>
            <a href="/prices">Prices</a>
          </li>
          <li>
            <a href="/wallet">Wallet</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul className={classes.footerNav}>
          <li>
            <a href="https://discord.com/">
              <FaDiscord />
              Discord
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org/">
              <FaTelegram />
              Telegram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <FaLinkedin />
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://x.com/">
              <FaTwitter />
              Twitter
            </a>
          </li>
        </ul>
        <ul className={`${classes.footerNav} ${classes.footerCompany}`}>
          <li>
            <span>NextGen Wallet © 2024</span>
          </li>
          <li>
            <span> Contact us</span>
          </li>
          <li>
            <a href="mailto:mail@gmail.com">mail@gmail.com</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
