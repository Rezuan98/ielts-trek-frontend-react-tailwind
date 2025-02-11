import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = {
    courses: { title: "Courses", path: "/courses" },

    tests: { title: "Test", path: "/test" },
    vocabulary: { title: "Vocabulary", path: "/vocabulary" },
    reading: {
      title: "Reading",
      subItems: {
        tests: {
          title: "Reading Tests",
          path: "/reading-test",
        },
        samples: {
          title: "Reading Samples",
          path: "/reading-samples",
        },
        tips: {
          title: "Reading Tips",
          path: "/reading/tips",
        },
      },
    },
    writing: {
      title: "Writing",
      subItems: {
        tests: {
          title: "Writing Tests",
          path: "/writing-test",
        },
        samples: {
          title: "Writing Samples",
          path: "/writing-task1-samples",
        },
        tips: {
          title: "Writing Tips",
          path: "/writing/tips",
        },
      },
    },
    speaking: {
      title: "Speaking",
      subItems: {
        tests: {
          title: "Speaking Tests",
          path: "/speaking/tests",
        },
        samples: {
          title: "Speaking Samples",
          path: "/speaking/samples",
        },
        tips: {
          title: "Speaking Tips",
          path: "/speaking/tips",
        },
      },
    },
    listening: {
      title: "Listening",
      subItems: {
        tests: {
          title: "Listening Tests",
          path: "/listening/tests",
        },
        samples: {
          title: "Listening Samples",
          path: "/listening/samples",
        },
        tips: {
          title: "Listening Tips",
          path: "/listening/tips",
        },
      },
    },
    practiceAI: { title: "Practice with AI", path: "/ai-practice" },
    tools: { title: "Tools", path: "/tools" },
    blog: { title: "Blog", path: "/blog" },
    login: { title: "Login", path: "/login" },
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
                          {Object.entries(item.subItems).map(
                            ([subKey, subItem]) => (
                              <Link
                                key={subKey}
                                to={subItem.path}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                              >
                                {subItem.title}
                              </Link>
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
