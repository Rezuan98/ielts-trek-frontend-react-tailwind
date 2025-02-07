const IELTSTests = () => {
  const tests = [
    {
      title: "IELTS Reading Tests",
      image: "/it1.webp",
      link: "#",
    },
    {
      title: "IELTS Listening Tests",
      image: "/it2.webp",
      link: "#",
    },
    {
      title: "IELTS Speaking Tests",
      image: "/it3.webp",
      link: "#",
    },
    {
      title: "IELTS Writing Tests",
      image: "/it4.webp",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Latest IELTS Tests
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tests.map((test, index) => (
          <div key={index} className="relative group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {/* Background Image */}
              <img
                src={test.image}
                alt={test.title}
                className="w-full h-48 object-cover"
              />

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>

            {/* Title Link Below Image */}
            <a
              href={test.link}
              className="block text-center mt-3 text-red-600 hover:text-red-700 font-semibold transition-colors duration-300"
            >
              {test.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IELTSTests;
