import Button from "@/components/button";

export default function FullSignupPage() {
  return (
    <main className=" w-full h-screen pt-[3vh] md:pt-[6vh]  bg-bg1">
      <div className="max-w-md p-10 mx-auto ">
        <h2 className="text-2xl font-bold mb-2 text-center">Join Now</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Create your account to start using your workspace companion.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="User Name"
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6005c]"
            required
          />
          <input
            type="email"
            placeholder="Work Email"
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6005c]"
            required
          />
          <input
            type="password"
            placeholder="Create Password"
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6005c]"
            required
          />
          {/* Optional: Workspace name */}
          <input
            type="text"
            placeholder="Workspace Name (optional)"
            className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c6005c]"
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
          By joining, you acknowledge that you understand and agree to the{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </main>
  );
}
