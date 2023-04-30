import BaseLayout from "../components/BaseLayout";
import MybukiLists from "./MybukiLists";
import Title from "./Title";

const Home = () => {
  return (
    <BaseLayout>
     <Title> </Title>
      <div>
        <div>
          <MybukiLists />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
