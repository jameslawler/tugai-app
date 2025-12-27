import type { FC } from "hono/jsx";

import Layout from "../components/layout";
import AuthSignup from "../components/auth-signup";

const SignupPage: FC = () => {
  return (
    <Layout>
      <h1>Sign Up</h1>
      <AuthSignup />
    </Layout>
  );
};

export default SignupPage;
