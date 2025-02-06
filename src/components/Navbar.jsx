import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-white text-2xl font-bold">
            IELTS Trek
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Nav Links */}

          <ul
            className={`${
              isOpen
                ? "block absolute top-16 left-0 right-0 bg-blue-600 p-4"
                : "hidden"
            } sm:flex sm:space-x-6 sm:static sm:p-0 sm:block`}
          >
            {/* Nav items remain the same */}

            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-white hover:text-gray-300">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
