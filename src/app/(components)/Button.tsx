import Link from "next/link";
import React from "react";

const Button = ({ styles }:any) => (
  <Link href='/getting-started' type="button" className={`text-[15px] py-2 px-4 xs:py-2 xs:px-6 font-medium xs:text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started for Free
  </Link>
);

export default Button;