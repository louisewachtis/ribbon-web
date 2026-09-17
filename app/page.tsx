import Image from "next/image";
import { Inter } from "next/font/google";

const tagline = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div className="relative min-h-full flex-1 overflow-hidden bg-[#f6eee0]">
      <Image
        src="/hero-high-res.png"
        alt=""
        fill
        preload
        unoptimized
        sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-y-0 left-0 z-10 flex w-full items-center justify-center px-8 sm:w-1/2">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="Ribbon"
            width={2103}
            height={748}
            preload
            unoptimized
            className="h-auto w-[min(280px,70vw)]"
          />
          <p
            className={`${tagline.className} mt-4 text-lg font-bold tracking-tight text-[#5c2410] sm:text-xl`}
          >
            Mess-free nut butters. Coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
