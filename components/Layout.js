import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mobile-message">
        <div className="logo-container">
          <Image
            src="/assets/img/logo.png" // Adjust the path as necessary
            alt="Logo"
            width={100} // Adjust the dimensions as necessary
            height={100}
          />
        </div>
        <p>Please switch to a desktop for the best experience.</p>
      </div>
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
