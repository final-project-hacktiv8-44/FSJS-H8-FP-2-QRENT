import { LoginForm } from "@/components/Login/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

type MyResponse = {
  message?: string;
  access_token?: string;
};

export default function LoginPage() {
  const handleLogin = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      cache: "no-store",
    });

    const result = (await response.json()) as MyResponse;

    if (!response.ok) {
      return redirect(`/login?error=${result.message}`);
    }

    cookies().set("Authorization", `Bearer ${result.access_token}`);

    return redirect("/");
  };
  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}
