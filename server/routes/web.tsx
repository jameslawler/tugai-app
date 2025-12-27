import { Hono } from "hono";
import { AuthUser, AuthSession } from "../auth";
import HomePage from "../../client/pages/home-page";
import SignupPage from "../../client/pages/signup-page";
import SigninPage from "../../client/pages/signin-page";

const web = new Hono<{
  Bindings: CloudflareBindings;
  Variables: {
    user: AuthUser | null;
    session: AuthSession | null;
  };
}>();

web.get("/", async (c) => {
  const user = c.get("user");

  return c.html(<HomePage userName={user?.name} />);
});

web.get("/signup", (c) => {
  return c.html(<SignupPage />);
});

web.get("/signin", (c) => {
  return c.html(<SigninPage />);
});

export default web;
