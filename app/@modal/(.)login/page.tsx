"use client";

import { myAction } from "@/app/actions/contact";
import Button from "@/components/button";
import { getPasswordLevel, getPasswordScore } from "@/components/passwordTest";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

export default function JoinNowModal() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [state, formAction, ispending] = useActionState(myAction, {
    success: false,
    error: {},
  });

  useEffect(() => {
    if (state.success) {
      setPassword("");
    }
  }, [state.success]);

  const score = getPasswordScore(password);
  const level = getPasswordLevel(score);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-sm text-gray-800">
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-3 text-sm font-semibold"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2 text-center">Join Now</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Create your account to get started.
        </p>
        <form action={formAction} className="space-y-4">
          <input
            type="text"
            name="UserName"
            placeholder="User Name"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor3"
            required
          />
          {state.error?.UserName && (
            <p className="text-red-400 text-sm pl-1">
              * {state.error.UserName?.join(", ")}
            </p>
          )}
          <input
            name="Email"
            type="email"
            placeholder="Email"
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor3"
            required
          />
          {state.error?.Email && (
            <p className="text-red-400 text-sm pl-1">
              * {state.error.Email?.join(", ")}
            </p>
          )}
          <input
            name="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor3"
            required
          />
          <p
            className={`font-semibold ${
              level === ""
                ? "hidden"
                : level === "weak"
                  ? "text-red-500"
                  : level === "medium"
                    ? "text-yellow-500"
                    : "text-green-500"
            }`}
          >
            Strength: {level}
          </p>
          {state.error?.Password && (
            <p className="text-red-400 text-sm pl-1">
              * {state.error.Password?.join(", ")}
            </p>
          )}
          <Button
            type="submit"
            intent="primary"
            size="normal"
            className="mx-auto"
            disabled={ispending || state.success}
          >
            {ispending ? (
              <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin block"></span>
            ) : state.success ? (
              "Account created successfully!"
            ) : (
              "Create Account"
            )}
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-4 text-center">
          By joining, you agree to our{" "}
          <Link href="#" className="underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
