"use client";

import React, { useActionState, useEffect, useState } from "react";
import { myAction } from "@/app/actions/contact";
import Button from "@/components/button";
import { getPasswordLevel, getPasswordScore } from "../passwordTest";

export default function JoinUs() {
  const [state, formAction, ispending] = useActionState(myAction, {
    success: false,
    error: {},
  });
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (state.success) {
      setPassword("");
    }
  }, [state.success]);

  const score = getPasswordScore(password);
  const level = getPasswordLevel(score);

  return (
    <form action={formAction} className="space-y-4">
      <input
        type="text"
        name="UserName"
        placeholder="User Name"
        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6005c]"
        required
      />
      {state.error?.UserName && (
        <p className="text-red-400 text-sm">
          * {state.error.UserName?.join(", ")}
        </p>
      )}
      <input
        name="Email"
        type="email"
        placeholder="Work Email"
        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6005c]"
        required
      />{" "}
      {state.error?.Email && (
        <p className="text-red-400 text-sm">
          {" "}
          * {state.error.Email?.join(", ")}
        </p>
      )}
      <input
        name="WorkspaceName"
        type="text"
        placeholder="Workspace Name (optional)"
        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6005c]"
      />
      {state.error?.WorkspaceName && (
        <p className="text-red-400 text-sm">
          {" "}
          * {state.error.WorkspaceName?.join(", ")}
        </p>
      )}
      <input
        name="Password"
        type="password"
        placeholder="Create Password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6005c]"
        required
      />{" "}
      {state.error?.Password && (
        <p className="text-red-400 text-sm">
          * {state.error.Password?.join(", ")}
        </p>
      )}
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
      <Button
        type="submit"
        intent="primary"
        size="normal"
        disabled={ispending || state.success}
        className="mx-auto"
      >
        {ispending ? (
          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin block"></span>
        ) : state.success ? (
          "Account Created Successfully!"
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
