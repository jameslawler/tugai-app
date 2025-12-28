import type { FC } from "hono/jsx";

import Layout from "../components/layout";

const HomePage: FC<{ userName?: string }> = (props: { userName?: string }) => {
  return (
    <Layout>
      <h1>Portuguese AI</h1>
      {props.userName && (
        <>
          <ul>Hello {props.userName}!</ul>
          <div>
            <a
              href="#"
              hx-post="/api/auth/sign-out"
              hx-trigger="click"
              hx-swap="none"
            >
              Sign out
            </a>
          </div>
        </>
      )}
      {!props.userName && (
        <>
          <ul>Hello friend!</ul>
          <div>
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
          </div>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
