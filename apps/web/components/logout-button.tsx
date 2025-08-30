"use client";

import { Button } from "@workspace/ui/components/button";
import { signOut } from "@workspace/auth/client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  function handleLogout() {
    startTransition(async () => {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
          },
        },
      });
    });
  }
  return (
    <Button onClick={handleLogout} disabled={isPending}>
      {isPending ? "Loading..." : "Logout"}
    </Button>
  );
}
