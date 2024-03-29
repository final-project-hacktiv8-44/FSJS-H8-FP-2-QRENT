import { redirect } from "next/navigation";
import { RegisterForm } from "@/components/Register/RegisterForm";
export const dynamic = "force-dynamic";

type MyResponse<T = {}> = {
  message?: string;
  data?: T;
};

export default function RegisterPage() {
  const handleRegister = async (formData: FormData) => {
    "use server";
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const gender = formData.get("gender");

    const response = await fetch(`http://localhost:3000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        gender,
      }),
      cache: "no-store",
    });

    const result = (await response.json()) as MyResponse;

    if (!response.ok) {
      return redirect(`/register?error=${result.message}`);
    }

    return redirect("login");
  };

  return (
    <div>
      <RegisterForm handleRegister={handleRegister} />
    </div>
  );
}
