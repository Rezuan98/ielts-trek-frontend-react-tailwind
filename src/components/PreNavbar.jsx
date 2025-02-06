import { Facebook, Twitter, Instagram, Youtube, Clock } from "lucide-react";

const PreNavbar = () => {
  return (
    <div className="hidden sm:block bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:justify-between items-center hidden">
          {/* Left Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={18} />
            </a>
          </div>

          {/* Special Offer */}
          <div className="flex items-center space-x-2 text-sm">
            <Clock size={16} className="text-yellow-400" />
            <span>Special Offer: 50% OFF on all courses - Ends in </span>
            <span className="font-bold text-yellow-400">23:59:59</span>
          </div>

          {/* Right Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex justify-center items-center">
          <div className="flex items-center space-x-2 text-sm">
            <Clock size={16} className="text-yellow-400" />
            <span>Special Offer: 50% OFF - Ends in </span>
            <span className="font-bold text-yellow-400">23:59:59</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreNavbar;
