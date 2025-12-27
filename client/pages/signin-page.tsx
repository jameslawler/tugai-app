import type { FC } from "hono/jsx";

import Layout from "../components/layout";
import AuthSignin from "../components/auth-signin";

const SigninPage: FC = () => {
  return (
    <Layout>
      <h1>Sign In</h1>
      <AuthSignin />
    </Layout>
  );
};

export default SigninPage;
