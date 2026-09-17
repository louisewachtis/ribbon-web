import Image from "next/image";
import { Inter } from "next/font/google";

const tagline = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#f6eee0]">
      <div className="relative z-10 flex flex-col items-center px-8 pt-14 pb-5 sm:absolute sm:inset-y-0 sm:left-0 sm:w-1/2 sm:justify-center sm:py-0">
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
      <div className="relative min-h-0 flex-1 sm:absolute sm:inset-0">
        <Image
          src="/hero-high-res.png"
          alt=""
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-[70%_32%] sm:origin-right sm:scale-110 sm:object-right sm:object-center"
        />
      </div>
    </div>
  );
}
