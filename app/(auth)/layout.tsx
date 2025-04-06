import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col items-center w-screen h-screen justify-center">
      <span className="text-3xl font-space-grotesk">DevFlow</span>
      <div className="pt-5 w-100">{children}</div>
      <SocialAuthForm />
    </main>
  );
};

export default AuthLayout;
