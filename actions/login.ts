"use server";

import { signIn } from "@/auth";
import { SigninValues, signinSchema } from "@/lib/schema/UserSchema";
import { DEFAULT_ROUTE_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const credentialsLogin = async (values: SigninValues) => {
  const result = signinSchema.safeParse(values);
  if (!result.success) return { error: "Invalid credentials" };
  const { email, password } = result.data;
  try {
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirectTo: DEFAULT_ROUTE_REDIRECT, // Do not redirect, so we can handle the result ourselves
    });
    console.log(result);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};

export const providerLogin = async (provider: "google" | "github") => {
  try {
    const result = await signIn(provider);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "EmailSignInError":
          return { error: "Invalid email" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
