import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import ClientFlashComponent from "../Validation/ClientFlashComponent";

type LoginProps = {
  handleLogin: (formData: FormData) => Promise<never>;
};

export function LoginForm({ handleLogin }: LoginProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-10 py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h1>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or -&gt;
          <Link
            href="/register"
            className="font-medium text-indigo-600 border-b border-indigo-600">
            register your FREE account
          </Link>
        </p>
      </div>

      <ClientFlashComponent />

      <div className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
        <form
          action={handleLogin}
          className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6">
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 mb-1">
              Email
            </label>
            <input
              className="border rounded-md bg-white px-3 py-2 text-black"
              type="email"
              name="email"
              placeholder="Enter your Email Address"
            />
          </div>
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
          <div className="flex justify-between text-sm">
            <div className="flex items-center space-x-2">
              <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label>Remember me</label>
            </div>
            <div>
              <a className="text-indigo-600">Forgot your Password?</a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md p-2">
              Sign in
            </button>
          </div>
        </form>

        <div className="relative pb-2">
          <div className="absolute top-0 left-0 w-full border-b"></div>
          <div className="absolute -top-3 left-0 w-full text-center">
            <span className="bg-white px-3 text-sm">or continue via</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-xl">
          <div className="flex justify-center border-2 rounded-md p-3 text-center cursor-pointer hover:border-gray-600">
            <FaXTwitter />
          </div>
          <div className="flex justify-center border-2 rounded-md p-3 text-center cursor-pointer hover:border-gray-600">
            <FaGoogle />
          </div>
          <div className="flex justify-center border-2 rounded-md p-3 text-center cursor-pointer hover:border-gray-600">
            <FaInstagram />
          </div>
        </div>
      </div>
    </main>
  );
}