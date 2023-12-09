import React from "react";
import styles from "./style";
import {Navbar, GetStarted, Hero, CTA, Stats, Footer, Clients} from "./(components)"

function page() {
  return (
    <div className="bg-primary w-full overflow-hidden">
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
          <Clients/>
          <CTA/>
          <GetStarted/>
          <Footer/>
        </div>
      </div>      
    </div>
  );
}

export default page;
