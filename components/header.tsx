import { auth, signOut } from "@/auth";
import NavLink from "@/components/nav-link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex items-center justify-between border-b px-6 py-3">
      <div className="flex items-center gap-2">
        <NavLink href="/" name="Home" />
        {session ? (
          <>
            <NavLink
              href="/dashboard"
              name="Dashboard"
              matchPattern="dashboard"
            />
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button variant="ghost">Logout</Button>
            </form>
          </>
        ) : (
          <NavLink href="/login" name="Login" />
        )}
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            session ? "bg-green-700" : "bg-red-700"
          )}
        />
        <span>{session ? "Authenticated" : "Not authenticated"}</span>
      </div>
    </header>
  );
}
