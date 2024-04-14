import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex w-full justify-center items-center h-screen">
      <SignIn />
    </div>
  );
}
