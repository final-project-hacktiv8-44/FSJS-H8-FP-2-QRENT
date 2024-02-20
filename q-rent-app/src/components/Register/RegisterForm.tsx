import Link from "next/link";
import ClientFlashComponent from "../Validation/ClientFlashComponent";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { SubmitButton } from "./submitButton";

type RegisterProps = {
  handleRegister: (formData: FormData) => Promise<never>;
};

export function RegisterForm({ handleRegister }: RegisterProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <Image src={logo} alt="Logo" className="w-60 h-40 mb-4" />
      </div>
      <ClientFlashComponent />
      <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
        <form
          action={handleRegister}
          className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6"
        >
          {/* Username Input */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 mb-1">
              Username
            </label>
            <input
              className="border rounded-md bg-white px-3 py-2 text-black"
              type="text"
              name="username"
              placeholder="Enter your Username"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 mb-1">
              Email Address
            </label>
            <input
              className="border rounded-md bg-white px-3 py-2 text-black"
              type="email"
              name="email"
              placeholder="Enter your Email Address"
            />
          </div>
          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 mb-1">
              Password
            </label>
            <input
              className="border rounded-md bg-white px-3 py-2 text-black"
              type="password"
              name="password"
              placeholder="Enter your Password"
            />
          </div>
          {/* Gender Input */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 mb-1">
              Gender
            </label>
            <input
              className="border rounded-md bg-white px-3 py-2 text-black"
              type="text"
              name="gender"
              placeholder="Enter your gender"
            />
          </div>
          {/* Remember me Checkbox */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label className="text-gray-600">Remember me</label>
            </div>
            <div>
              <a href="#" className="text-indigo-600">
                Remember Your Account
              </a>
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <SubmitButton />
          </div>
        </form>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register to your account
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or -&gt;
          <Link
            href="/login"
            className="font-medium text-indigo-600 border-b border-indigo-600"
          >
            Login To Your Account
          </Link>
        </p>
      </div>
    </main>
  );
}
