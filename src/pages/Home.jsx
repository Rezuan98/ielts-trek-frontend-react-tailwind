import Hero from "../components/Hero";
import Articles from "../components/Articles";
import LearningTools from "../components/LearningTools";
import AIConversations from "../components/AIConversations";
import WritingSamples from "../components/WritingSamples";
import IELTSTips from "../components/IELTSTips";
import IELTSTests from "../components/IELTSTests";

const Home = () => {
  return (
    <div>
      <Hero />
      <IELTSTests />
      <WritingSamples />
      <AIConversations />
      <IELTSTips />
      <LearningTools />
      <Articles />
    </div>
  );
};

export default Home;
