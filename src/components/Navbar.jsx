import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = {
    courses: { title: "Courses", path: "/courses" },
    ielts: {
      title: "IELTS",
      subItems: {
        tests: {
          title: "IELTS Tests",
          subItems: ["Speaking", "Writing", "Reading", "Listening"],
        },
        band9: {
          title: "Band 9 Samples",
          subItems: ["Task 1 Samples", "Task 2 Samples", "Speaking Samples"],
        },
        userEssays: {
          title: "User Essays",
          subItems: ["Task 1 Essays", "Task 2 Essays"],
        },
        tips: { title: "IELTS Tips" },
        tools: { title: "IELTS Tools" },
      },
    },
    practiceAI: { title: "Practice with AI", path: "/ai-practice" },
    writing: { title: "Writing Exercise", path: "/writing" },
    pronunciation: { title: "Pronunciation", path: "/pronunciation" },
    dictation: { title: "Dictation/Shadowing", path: "/dictation" },
    flashcard: { title: "Flashcard", path: "/flashcard" },
    videos: { title: "Learn with Videos", path: "/videos" },
    tools: { title: "Tools", path: "/tools" },
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-600 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-white text-2xl font-bold">
            IELTS Trek
          </Link>

          <button
            className="text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:block absolute lg:relative top-16 lg:top-0 left-0 right-0 bg-blue-700 lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-1 p-4 lg:p-0">
              {Object.entries(navItems).map(([key, item]) => (
                <li key={key} className="relative group">
                  {item.subItems ? (
                    <div className="h-full">
                      <button className="text-white hover:bg-blue-800 px-3 py-2 rounded-md flex items-center gap-1 w-full lg:w-auto">
                        {item.title}
                        <ChevronDown size={16} />
                      </button>

                      <div className="hidden group-hover:block absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        <div className="relative py-2">
                          {" "}
                          {/* Added padding to create hover space */}
                          {Object.entries(item.subItems).map(
                            ([subKey, subItem]) => (
                              <div key={subKey} className="relative group/sub">
                                {subItem.subItems ? (
                                  <div>
                                    <button className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center justify-between w-full">
                                      {subItem.title}
                                      <ChevronDown size={16} />
                                    </button>
                                    <div className="hidden group-hover/sub:block absolute left-full top-0 w-48 bg-white rounded-md shadow-lg">
                                      <div className="py-1">
                                        {" "}
                                        {/* Added padding for hover space */}
                                        {subItem.subItems.map(
                                          (subSubItem, index) => (
                                            <Link
                                              key={index}
                                              to={`/${key}/${subKey}/${subSubItem
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}`}
                                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                              {subSubItem}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <Link
                                    to={`/${key}/${subKey}`}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                  >
                                    {subItem.title}
                                  </Link>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-white hover:bg-blue-800 px-3 py-2 rounded-md block"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
