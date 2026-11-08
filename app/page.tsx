import { auth } from "@/auth";
import AuthPanel from "@/components/auth-panel";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen">
      <div className="relative mx-auto mt-8 min-h-96 max-w-2xl space-y-4 p-6">
        <h1 className="text-xl font-bold text-brand-primary">
          Welcome to our app
        </h1>
        <p className="text-brand-secondary/70">
          This is a public page accessible to everyone.
        </p>
        <AuthPanel session={session} />
      </div>
    </div>
  );
}
