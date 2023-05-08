import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks, socialLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleActive = (active) => {
    setActive(active);
    setToggle(!toggle);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Thiago Bernardi &nbsp;
            <span className="sm:block hidden">| Fullstack engineer</span>
          </p>
        </Link>
        <div className="flex gap-3 justify-end">
          <ul className="list-none hidden sm:flex flex-row gap-2">
            {socialLinks.map((social, idx) => (
              <li key={`social-${idx}`}>{social.name}</li>
            ))}
          </ul>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <NavItem
                link={link}
                active={active}
                handleActive={handleActive}
                key={link.id}
              />
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justifiy-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <NavItem
                  link={link}
                  active={active}
                  isMobile={true}
                  handleActive={handleActive}
                  key={link.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
