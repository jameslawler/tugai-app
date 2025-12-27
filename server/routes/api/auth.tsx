import { Hono } from "hono";

import { getDb } from "../../db";
import { getAuth } from "../../auth";
import AuthSignup from "../../../client/components/auth-signup";
import AuthSignin from "../../../client/components/auth-signin";

const auth = new Hono<{ Bindings: CloudflareBindings }>();

auth.post("/sign-up/email", async (c) => {
  const db = getDb(c.env.DB);
  const auth = getAuth(db);

  const formData = await c.req.formData();
  const body = Object.fromEntries(formData.entries()) as {
    name: string;
    email: string;
    password: string;
  };

  try {
    await auth.api.signUpEmail({ body });

    return c.body(null, 200, {
      "HX-Redirect": "/",
    });
  } catch (err: any) {
    return c.html(
      <AuthSignup
        errorMessage={err.message}
        defaultName={body.name}
        defaultEmail={body.email}
      />
    );
  }
});

auth.post("/sign-in/email", async (c) => {
  const db = getDb(c.env.DB);
  const auth = getAuth(db);

  const formData = await c.req.formData();
  const body = Object.fromEntries(formData.entries()) as {
    email: string;
    password: string;
  };

  try {
    const response = await auth.api.signInEmail({
      body,
      asResponse: true,
      headers: c.req.raw.headers
    });

    response.headers.set("HX-Redirect", "/");

    return response;
  } catch (err: any) {
    return c.html(
      <AuthSignin errorMessage={err.message} defaultEmail={body.email} />
    );
  }
});

export default auth;
