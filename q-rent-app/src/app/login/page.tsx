import { LoginForm } from "@/components/Login/LoginForm";
import { cookies } from "next/headers";

type MyResponse = {
  message?: string;
  access_token?: string;
};

export default function LoginPage() {
  const handleLogin = async (formData: FormData) => {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/login`, {
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
    cookies().set("Authorization", `Bearer ${result.access_token}`);
    
    // return redirect("/");
  };
  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}
