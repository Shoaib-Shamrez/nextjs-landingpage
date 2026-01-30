import {
  Facebook,
  Icon,
  Instagram,
  RectangleGogglesIcon,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" p-4 mt-10">
      <div className="max-w-7xl mx-auto text-center text-white">
        <div className="flex justify-evenly md:justify-between items-center">
          <h4 className="font-semibold text-[10px] md:text-sm">PentAi.</h4>
          <p className="text-[10px] md:text-sm">
            &copy; 2026 All rights reserved.
          </p>
          <div className="flex gap-2 mb-1 w-[30%] text-[10px] md:text-sm">
            <Facebook />
            <X />
            <Instagram />
            <Youtube />
            <RectangleGogglesIcon />
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-[10px] md:text-sm">
            Realeased by Right Tail Corp.
          </p>
          <div className="flex gap-1 md:gap-3 text-[10px] md:text-sm">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
