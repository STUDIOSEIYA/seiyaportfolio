import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { FiShoppingBag } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { BsFillCartFill, BsFillPersonFill, BsHouse } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useStateContext } from "../lib/context";
import logo from "../assets/img/logo.png";
import house from "../assets/img/house.svg";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const { AnimatePresence, motion } = require("framer-motion");

const Navbar = () => {
  const router = useRouter();

  // Determine if the current route is the index page
  const isHomePage = router.pathname === '/';

  return (
    <div className={`${styles.navbar} ${isHomePage ? styles.transparent : styles.solid}`}>
      <Link href="/"><div className={styles.imgwrapper}><Image src={logo} alt="SeiyaLogo" /></div></Link>
      <div className={styles.links}>
        <Link href="/2070">2070</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <a href="mailto:contactseiyafx@gmail.com">Contact</a>
      
      </div>
    </div>
  );
};

export default Navbar;
