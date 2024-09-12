import Header from "../Components/Sections/Header/Header.jsx";
import Footer from "../Components/Sections/Footer/Footer.jsx";
import About_Welcome from "../Components/Sections/About_Welcome/About_Welcome.jsx";
import About_Team from "../Components/Sections/About_Team/About_Team.jsx";
import About_FAQ from "../Components/Sections/About_FAQ/About_FAQ.jsx";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NexGen Wallet - About Us</title>
      </Helmet>
      <Header />
      <About_Welcome />
      <About_FAQ />
      <About_Team />
      <Footer />
    </>
  );
};

export default AboutPage;
