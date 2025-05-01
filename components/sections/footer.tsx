import {
  FiX,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiMail,
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto bg-[#081227] py-5 px-4 sm:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="block text-sm sm:text-base md:text-lg font-semibold text-white text-center md:text-left mb-4 md:mb-0 pl-0 md:pl-16 pt-0 md:pt-1 w-full md:w-auto">
          Created Shade 2025
        </span>

        <div className="w-[70%] mx-auto flex justify-center space-x-6 mb-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#3EDDE2] transition-colors">
            <FiX className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-colors">
            <FiInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors">
            <FiLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors">
            <FiYoutube className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
          <a
            href="https://mail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors">
            <FiMail className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
