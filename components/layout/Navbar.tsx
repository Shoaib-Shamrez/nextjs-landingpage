"use client";
import { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center w-[60%]">
          <Image
            src="/images/Logo.png"
            width={95}
            height={45}
            alt="Picture of the author"
          />
          {/* Desktop Menu */}
          <div className="hidden lg:flex mt-2 items-center justify-evenly w-[80%]">
            <ul className="flex space-x-8 ml-5 justify-evenly w-full">
              <li>
                <a
                  href="#"
                  className="text-[#ECEDEE] hover:text-purple-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4C5155] hover:text-purple-500 transition-colors"
                >
                  SecrtChat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4C5155] hover:text-purple-500 transition-colors"
                >
                  GenPen
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#4C5155] hover:text-purple-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Button className="hidden lg:block">Dashboard</Button>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden my-4 pb-4 ">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#"
                className="block text-[#ECEDEE] hover:text-purple-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#4C5155] hover:text-purple-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                SecrtChat
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#4C5155] hover:text-purple-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                GenPen
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#4C5155] hover:text-purple-500 transition-colors py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          <Button className="w-full mt-4">Dashboard</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
