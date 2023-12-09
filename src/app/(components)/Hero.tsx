import styles from "../style";
import { discount, hero, arrowUp } from "../(assets)";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} justify-between items-center`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] xs:text-[52px] text-[40px] text-white ss:leading-[100.8px] leading-[75px]">
            Empowering<br className="sm:block hidden" />{" "}
            <span className="text-gradient whitespace-nowrap">Next Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-semibold ss:text-[68px] xs:text-[52px] text-[40px] text-white ss:leading-[100.8px] leading-[75px] w-full whitespace-nowrap">
          of Influence
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        HyperEdge is a vibrant space for creators and brands to meet, collaborate, and redefine digital marketing
        </p>
        <a href="#features" className="hidden my-5 md:flex items-center gap-1 bg-transparent text-dimWhite border-2 border-dimWhite py-2 px-5 rounded-2xl">
          Know More
          <Image src={arrowUp} className="" alt="up"/>
        </a>
      </div>

      <div className={`flex-1 flex items-center justify-end md:my-0 my-10 relative xl:px-0 sm:px-16 px-6`}>
        <Image src={hero} alt="billing" className="w-[400px] h-[500px] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <a href="#features" className="md:hidden my-5 flex items-center gap-1 bg-transparent text-dimWhite border-2 border-dimWhite py-2 px-5 rounded-2xl">
        Know More
        <Image src={arrowUp} className="" alt="up"/>
      </a>
    </section>
  );
};

export default Hero;