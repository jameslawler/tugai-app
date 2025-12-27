import type { FC } from "hono/jsx";

import Layout from "../components/layout";

const HomePage: FC<{ userName?: string }> = (props: {
  userName?: string;
}) => {
  return (
    <Layout>
      <h1>TugAI</h1>
      <ul>
        Hello {props.userName}
      </ul>
    </Layout>
  );
};

export default HomePage;
