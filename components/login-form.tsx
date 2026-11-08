"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    const result = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials");
    } else {
      setError(null);
      router.push("/");
      router.refresh();
    }
  }

  return (
    <form action={handleSubmit} className="space-y-3">
      <label htmlFor="username" className="sr-only">
        Username
      </label>
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        required
      />
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        required
      />
      <Button type="submit">Sign In</Button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
