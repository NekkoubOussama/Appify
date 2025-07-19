"use client";

import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function JoinNowModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-sm text-gray-800">
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-2 text-sm"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2 text-center">Join Now</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Create your account to get started.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="User Name"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor3"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor3"
            required
          />
          <Button
            type="submit"
            intent="primary"
            size="normal"
            className="mx-auto"
          >
            Create Account
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">
          By joining, you agree to our{" "}
          <a href="#" className="underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
