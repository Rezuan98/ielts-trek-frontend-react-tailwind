import Hero from "../components/Hero";
import Articles from "../components/Articles";
import LearningTools from "../components/LearningTools";
import AIConversations from "../components/AIConversations";
import WritingSamples from "../components/WritingSamples";

const Home = () => {
  return (
    <div>
      <Hero />
      <WritingSamples />
      <AIConversations />

      <LearningTools />
      <Articles />
    </div>
  );
};

export default Home;
