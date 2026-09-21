import Image from "next/image";
import { Inter } from "next/font/google";

const sans = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Home() {
  return (
    <div className="relative min-h-full flex-1 overflow-hidden bg-[#FEF8ED]">
      <Image
        src="/squizzle-tube-background.png"
        alt=""
        fill
        preload
        unoptimized
        sizes="100vw"
        className="hidden object-contain object-center scale-[0.81] translate-y-[3%] sm:block"
      />
      <div className="absolute inset-0 flex items-center justify-center sm:hidden">
        <Image
          src="/squizzle-tube-background.png"
          alt=""
          width={1672}
          height={941}
          preload
          unoptimized
          className="h-auto w-[min(68vh,32rem)] max-w-none translate-y-8 rotate-90"
        />
      </div>
      <div className="absolute inset-x-0 top-16 z-10 flex flex-col items-center px-8 sm:top-20">
        <Image
          src="/squizzle-logo.png"
          alt="Squizzle"
          width={2172}
          height={724}
          preload
          unoptimized
          className="h-auto w-[min(180px,46vw)] sm:w-[240px]"
        />
        <p
          className={`${sans.className} mt-3 text-center text-sm font-semibold tracking-tight text-[#442209] sm:mt-4 sm:text-lg`}
        >
          Mess-free nut butters. Coming soon.
        </p>
      </div>
      <a
        href="mailto:hello@squizzlefoods.com"
        className={`${sans.className} absolute inset-x-0 bottom-20 z-10 text-center text-sm font-semibold tracking-tight text-[#442209] sm:bottom-24 sm:text-base`}
      >
        hello@squizzlefoods.com
      </a>
    </div>
  );
}
