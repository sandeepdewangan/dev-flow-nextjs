import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col items-center">
      <span className="text-2xl">DevFlow</span>
      <div className="pt-5">{children}</div>
      <div className="flex gap-2 pt-5">
        <Button>Login with Github</Button>
        <Button>Login with Google</Button>
      </div>
    </main>
  );
};

export default AuthLayout;
