import React from "react";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";

const Header = ({ link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        <Link href="/projects">
          <div className="logo">
            <HiArrowLeft />
          </div>
        </Link>
        <div className="contact">
          <a href={link} target="_blank">Live Preview</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
