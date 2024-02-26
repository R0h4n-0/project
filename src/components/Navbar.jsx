import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-10 flex items-center justify-between px-8 py-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            Musical Time
          </Link>
        </div>
        <div className="sm:hidden">
          {isOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        <ul className="hidden sm:flex items-center space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/drum" className="hover:underline">
              Drum
            </Link>
          </li>
          <li>
            <Link to="/guitar" className="hover:underline">
              Guitar
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden sm:flex items-center space-x-4">
          <a href="https://www.facebook.com/" target="_" className="hover:underline">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/login" target="_" className="hover:underline">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" target="_" className="hover:underline">
            <FaInstagram />
          </a>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-300 flex justify-center items-center">
          <div className="absolute top-8 right-8">
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul className="text-white text-2xl">
            <li>
              <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/drum" className="hover:underline" onClick={() => setIsOpen(false)}>
                Drum
              </Link>
            </li>
            <li>
              <Link to="/guitar" className="hover:underline" onClick={() => setIsOpen(false)}>
                Guitar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;