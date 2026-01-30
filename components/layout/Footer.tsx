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
        <div className="flex justify-between">
          <h4 className="font-semibold">PentAi.</h4>
          <p>&copy; 2026 Your Company. All rights reserved.</p>
          <div className="flex gap-2 mb-1">
            <Facebook size={22} />
            <X size={22} />
            <Instagram size={22} />
            <Youtube size={22} />
            <RectangleGogglesIcon size={22} />
          </div>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Realeased by Right Tail Corp.</p>
          <div className="flex gap-3">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
