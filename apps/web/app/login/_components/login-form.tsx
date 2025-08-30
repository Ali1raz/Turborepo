"use client";

import { Github, Loader } from "lucide-react";
import { useTransition } from "react";
import { Button } from "@workspace/ui/components/button";
import { signIn } from "@workspace/auth/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { toast } from "sonner";
import Link from "next/link";

export default function LoginForm() {
  const [githubPending, startGithubTrasnition] = useTransition();

  async function signInWithGitHub() {
    startGithubTrasnition(async () => {
      await signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Successfully signed in with GitHub! Redirecting...");
          },
          onError: () => {
            toast.error("Internal server error");
          },
        },
      });
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>Login with your GitHub Account</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          disabled={githubPending}
          onClick={signInWithGitHub}
          className="w-full"
          variant="outline"
        >
          {githubPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <Github className="size-4" />
              Sign in with GitHub
            </>
          )}
        </Button>
        <Button asChild>
          <Link href="/">Go back</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
