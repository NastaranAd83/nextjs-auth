import { redirect } from "next/navigation";
import { auth } from "@/auth";
import AuthPanel from "@/components/auth-panel";
import { LoginForm } from "@/components/login-form";

export default async function LoginPage() {
  const session = await auth();

  if (session) redirect("/");

  return (
    <div className="min-h-screen">
      <div className="relative mx-auto mt-8 min-h-96 max-w-2xl space-y-4 p-6">
        <h1 className="text-xl font-bold text-brand-primary">Login</h1>
        <p className="text-brand-secondary/70">
          Please log in to access your account.
        </p>
        <AuthPanel session={session} />
        <LoginForm />
      </div>
    </div>
  );
}
