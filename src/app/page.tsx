import styles from "./style";
import {Navbar, Business, Hero, CTA, Stats, Testimonals,Footer, Clients} from "./(components)"
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

function page() {
  return (
    <div className={`bg-primary w-full overflow-hidden ${poppins.className}`}>
      {/* /* Navbar  */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      {/* Hero Section  */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Testimonals/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>      
    </div>
  );
}

export default page;
