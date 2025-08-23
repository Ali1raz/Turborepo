import { Button } from "@workspace/ui/components/button";
import { prisma } from "@repo/db";

export default async function Page() {
  const user = await prisma.user.findFirst();
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        {user ? (
          <h1 className="text-2xl font-bold">{user?.name}</h1>
        ) : (
          <h1>No User added.</h1>
        )}
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
