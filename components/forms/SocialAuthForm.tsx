"use client";

import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);
      toast("Sign-In Failed!", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
      });
    }
  };
  return (
    <div className="flex gap-2 pt-5">
      <Button onClick={() => handleSignIn("github")}>Login with Github</Button>
      <Button onClick={() => handleSignIn("google")}>Login with Google</Button>
    </div>
  );
};

export default SocialAuthForm;
