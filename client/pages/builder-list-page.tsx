import type { FC } from "hono/jsx";

import Layout from "../components/layout";

const BuilderListPage: FC<{ plans: string[] }> = (props: {
  plans: string[];
}) => {
  return (
    <Layout>
      <h1>List</h1>
      <form method="post" action="/plans/new">
        <button
          type="submit"
          class="mb-4 rounded bg-blue-600 px-4 py-2 text-white"
        >
          ➕ New plan
        </button>
      </form>

      <div class="flex h-full">
        <div class="w-full">
          { props.plans.map((plan) => (
            <div>{plan}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BuilderListPage;
