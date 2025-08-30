"use client";

import { redirect } from "next/navigation";
import LoginForm from "./_components/login-form";
import { useSession } from "@workspace/auth/client";

export default function LoginPage() {
  const { data } = useSession();

  if (data?.user) {
    return redirect("/");
  }
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
