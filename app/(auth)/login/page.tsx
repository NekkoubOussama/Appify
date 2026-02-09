import JoinUs from "@/components/Globalhome/joinUs";
import Link from "next/link";

export default function FullSignupPage() {
  return (
    <main className=" w-full h-screen pt-[3vh] md:pt-[6vh]  bg-bg1">
      <div className="max-w-md p-10 mx-auto ">
        <h2 className="text-2xl font-bold mb-2 text-center">Join Now</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Create your account to start using your workspace companion.
        </p>
        <JoinUs />
        <p className="text-xs text-gray-500 mt-4 text-center">
          By joining, you acknowledge that you understand and agree to the
          <Link href="#" className="underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
