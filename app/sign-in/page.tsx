import AuthLeftComp from "@/components/native/Auth/auth-left";
import AuthRightComp from "@/components/native/Auth/auth-right";

export default function Signin() {
  return (
    <div className="min-h-screen flex mx-auto ">
      <AuthLeftComp className="hidden sm:block sm:w-1/2 lg:w-1/3" />
      <AuthRightComp className="sm:w-1/2 lg:w-2/3" />
    </div>
  );
}
