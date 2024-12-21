import cn from "classnames";
import Image from "next/image";
import { socialLinksType } from "@/generic-types";
import { socialLinks } from "@/lib/constants/icons";
import Link from "next/link";
import { montserrat } from "@/lib/fonts";

export default function AuthLeftComp({ className }: { className?: string }) {
  return (
    <div className={cn(className, "relative")}>
      <Image
        src={"/medical.jpg"}
        width={500}
        height={500}
        alt="auth-logo"
        className="absolute h-full z-[-1] w-full opacity-70"
      />
      <div className="flex flex-col gap-4 justify-end h-full p-4  lg:p-12">
        <div className="flex gap-2 items-center">
          <Image
            src={"/mm.svg"}
            width={500}
            height={500}
            alt="auth-logo"
            className="w-8 md:w-12  border-2 border-neutral-700 h-fit rounded-full"
          />
          <p
            className={`${montserrat.className} text-2xl md:text-3xl font-bold`}
          >
            MediMap
          </p>
        </div>
        <p className="text-gray-600 font-bold text-sm md:text-md  ">
          Get to know about medicine availability near you in seconds . Just
          Search for medicine name & get update
        </p>

        <div className="flex gap-4 ">
          {socialLinks.map((e: socialLinksType, i: number) => {
            return (
              <Link href={e.link} key={i}>
                <e.icon className="size-6" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
