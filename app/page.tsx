import Image from "next/image";
import { Inter } from "next/font/google";

const tagline = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div className="relative min-h-full flex-1 overflow-hidden">
      <Image
        src="/hero-high-res.png"
        alt=""
        fill
        preload
        unoptimized
        sizes="100vw"
        className="object-cover object-[72%_18%] sm:origin-right sm:scale-110 sm:object-right sm:object-center"
      />
      <div className="absolute inset-x-0 z-10 flex flex-col items-center px-8 max-sm:top-16 sm:inset-y-0 sm:left-0 sm:w-1/2 sm:justify-center">
        <Image
          src="/logo.png"
          alt="Ribbon"
          width={2103}
          height={748}
          preload
          unoptimized
          className="h-auto w-[min(240px,70vw)] sm:w-[min(280px,70vw)]"
        />
        <p
          className={`${tagline.className} mt-3 text-center text-lg font-bold tracking-tight text-[#5c2410] sm:mt-4 sm:text-xl`}
        >
          Mess-free nut butters. Coming soon.
        </p>
      </div>
    </div>
  );
}
