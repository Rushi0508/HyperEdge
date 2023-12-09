import styles from "./style";
import {Navbar, Business, Hero, CTA, Stats, Footer, Clients} from "./(components)"
import Testimonials from "./(components)/Testimonals";

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
          <Business/>
          <Testimonials/>
          <CTA/>
          <Footer/>
        </div>
      </div>      
    </div>
  );
}

export default page;
