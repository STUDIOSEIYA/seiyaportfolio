import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import logo from "../assets/img/logo.png";
import house from "../assets/img/house.svg";
import Image from "next/image";
const { AnimatePresence, motion } = require("framer-motion");

const Navbar = () => {
  const router = useRouter();

  // Determine if the current route is the index page
  const isHomePage = router.pathname === '/';

  return (
    <div className={`${styles.navbar} ${isHomePage ? styles.transparent : styles.solid}`}>
      <Link href="/"><div className={styles.imgwrapper}><Image src={logo} alt="SeiyaLogo" /></div></Link>
      <div className={styles.links}>
        <Link href="/">2070</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link>About</Link>
        <a href="mailto:contactseiyafx@gmail.com">Contact</a>
        <Link href="/"><div className={styles.iconwrapper}><Image src={house} alt="icon house" /></div></Link>
      </div>
    </div>
  );
};

export default Navbar;
