import BaseLayout from "../components/BaseLayout";
import MybukiList from "./MybukiList";
import Title from "./Title";

const Home = () => {
  return (
    <BaseLayout>
     <Title> </Title>
      <div>
        <div>
          <MybukiList />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
