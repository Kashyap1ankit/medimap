"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import cn from "classnames";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { socialLinks } from "@/lib/constants/icons";
import { socialLinksType } from "@/generic-types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { montserrat } from "@/lib/fonts";

export default function AuthRightComp({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        className,
        "p-4 lg:p-12 flex flex-col items-center justify-center gap-12 bg-[#f5f5f5]",
      )}
    >
      <div className="flex flex-col gap-4 items-center">
        <p className={`${montserrat.className} text-3xl md:text-4xl font-bold`}>
          Welcome Back !
        </p>
        <p
          className={`${montserrat.className} lg:w-1/2 text-gray-400 text-center`}
        >
          Start your great journey with Medimap . Choose any one of the
          convinent method you want get started
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <Button
          className="bg-[#1877F2] hover:bg-[#1877F2] px-4 py-2 w-fit min-w-80 py-6 px-12 shadow-md"
          onClick={() => signIn("facebook")}
        >
          <FaFacebook />
          <p>Continue with Facebook</p>
        </Button>

        <Button
          className="bg-white  hover:bg-white  px-4 py-2 w-fit min-w-80 py-6 px-12 shadow-md border border-neutral-200"
          onClick={() => signIn("google")}
        >
          <FcGoogle />
          <p className="text-gray-500 font-bold">Continue with Google</p>
        </Button>
      </div>

      <Link href={"/"} className="flex gap-2 items-center text-gray-400">
        <p className={`${montserrat.className}`}>Go Back to Home</p>
        <ArrowRight className="size-4" />
      </Link>

      <div className="sm:hidden flex gap-4">
        {socialLinks.map((e: socialLinksType, i: number) => {
          return (
            <Link href={e.link} key={i}>
              <e.icon className="size-6" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
