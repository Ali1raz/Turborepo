import { auth } from "@workspace/auth/server";
import { headers } from "next/headers";
import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";
import { Card, CardContent } from "@workspace/ui/components/card";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const data = await fetch("http://localhost:3001/hello");
  const res = await data.json();
  console.log(res.data);

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
        <Card>
          <CardContent>{JSON.stringify(res, null, 2)}</CardContent>
        </Card>
      </div>
    </div>
  );
}
