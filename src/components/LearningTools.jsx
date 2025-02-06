const tools = [
  {
    title: "IELTS Academic Writing Task 1 Evaluation",
    icon: "/lt1.png",
    path: "/tools/academic-writing-task1-eval",
  },
  {
    title: "IELTS General Writing Task 1 Evaluation",
    icon: "/lt2.png",
    path: "/tools/general-writing-task1-eval",
  },
  {
    title: "IELTS Writing Task 2 Evaluation",
    icon: "/lt3.png",
    path: "/tools/writing-task2-eval",
  },
  {
    title: "IELTS Academic Writing Task 1 Generator",
    icon: "/lt4.png",
    path: "/tools/academic-writing-task1-gen",
  },
  {
    title: "IELTS General Writing Task 1 Generator",
    icon: "/lt5.png",
    path: "/tools/general-writing-task1-gen",
  },
  {
    title: "IELTS Writing Task 2 Generator",
    icon: "/lt6.png",
    path: "/tools/writing-task2-gen",
  },
  {
    title: "IELTS Speaking Part 1 Evaluation",
    icon: "/lt1.png",
    path: "/tools/speaking-part1-eval",
  },
  {
    title: "IELTS Speaking Part 2 Evaluation",
    icon: "/lt2.png",
    path: "/tools/speaking-part2-eval",
  },
  {
    title: "IELTS Speaking Part 3 Evaluation",
    icon: "/lt5.png",
    path: "/tools/speaking-part3-eval",
  },
  {
    title: "IELTS Speaking Part 1 Generator",
    icon: "/lt6.png",
    path: "/tools/speaking-part1-gen",
  },
  {
    title: "IELTS Speaking Part 2 Generator",
    icon: "/lt1.png",
    path: "/tools/speaking-part2-gen",
  },
  {
    title: "IELTS Speaking Part 3 Generator",
    icon: "/lt1.png",
    path: "/tools/speaking-part3-gen",
  },
  {
    title: "IELTS Overall Band Score Calculator",
    icon: "/lt2.png",
    path: "/tools/overall-band-calculator",
  },
  {
    title: "IELTS Listening Band Score Calculator",
    icon: "/lt1.png",
    path: "/tools/listening-band-calculator",
  },
  {
    title: "IELTS Reading Band Score Calculator",
    icon: "/lt2.png",
    path: "/tools/reading-band-calculator",
  },
  {
    title: "IELTS Writing Band Score Calculator",
    icon: "/lt3.png",
    path: "/tools/writing-band-calculator",
  },
  {
    title: "IELTS Speaking Band Score Calculator",
    icon: "/lt4.png",
    path: "/tools/speaking-band-calculator",
  },
  {
    title: "Flashcards",
    icon: "/lt5.png",
    path: "/tools/flashcards",
  },
  {
    title: "Advanced Translator",
    icon: "/lt6.png",
    path: "/tools/translator",
  },
  {
    title: "Grammar Correctness Checker",
    icon: "/lt4.png",
    path: "/tools/grammar-checker",
  },
];

const LearningTools = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Learning Tools
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Boost your English learning success with our all-in-one toolkit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.path}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 w-16 h-16">
                <img
                  src={tool.icon}
                  alt={tool.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-blue-600 font-semibold hover:text-blue-700">
                {tool.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTools;
