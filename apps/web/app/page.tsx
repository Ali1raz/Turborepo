import { Button } from "@workspace/ui/components/button";
import { auth } from "@workspace/auth/server";
import { headers } from "next/headers";
import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        {session ? (
          <div>
            <p>Signed In as {session.user.email}</p>
            <LogoutButton />
          </div>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
