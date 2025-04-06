import SocialAuthForm from "@/components/forms/social-auth-form";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col items-center">
      <span className="text-2xl">DevFlow</span>
      <div className="pt-5">{children}</div>
      <SocialAuthForm />
    </main>
  );
};

export default AuthLayout;
