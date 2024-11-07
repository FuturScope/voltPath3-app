import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter as faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 p-6 pt-[5%]">
      <div className="container mx-auto  justify-center flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
      
        <div className="flex flex-col items-start  space-y-2 text-left">
          <h4 className="text-base text-white font-bold">Quick Links</h4>

          <Link 
            className="text-gray-400 hover:text-blue-500 text-sm"
            to="/maps"
          >
            Maps
          </Link >
          <Link className="text-gray-400 hover:text-blue-500 text-sm" 
          to="/dashboard/trips">
             Trips
          </Link>
          <Link className="text-gray-400 hover:text-blue-500 text-sm" to="/dashboard/bookmarks">
            
              Bookmarks

          </Link>
        </div>

      
        <div className="flex flex-col items-start space-y-2 text-left">
          <h4 className="text-base text-white font-bold">
            Subscribe to our Newsletter
          </h4>
          <input
            type="email"
            placeholder="Your email"
            className="p-1 rounded bg-gray-800 text-white text-sm"
          />
          <button className="bg-blue-500 text-white p-1 rounded text-sm">
            Subscribe
          </button>
        </div>

      
        <div className="flex flex-col items-start space-y-2 text-left">
          <h4 className="text-base text-white font-bold">Contact Us</h4>
          <p className="text-gray-400 text-sm">Email: info@voltPath.com</p>
          <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
          <p className="text-gray-400 text-sm">Address: Buro, Osu</p>
        </div>
      </div>

      
      <div className="flex gap-4 pt-6 justify-center pb-4 w-full">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-sm" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-sm" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-sm" />
        </a>
        <a
          href="https://snapchat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faSnapchat} className="text-sm" />
        </a>
      </div>

    
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} voltPath. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
