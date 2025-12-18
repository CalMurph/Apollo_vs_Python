

import Image from "next/image";
import Link from "next/link";
import { Caesar_Dressing, Montserrat } from "next/font/google";

const caesar = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex justify-center px-3 py-3">
      <div className="w-full border-[3px] border-[#E0AA3A] rounded-sm p-8">

        {/* HERO WITH PILLARS */}
        <div className="flex items-center justify-center gap-8">

          {/* LEFT PILLAR */}
          <div className="hidden md:block relative w-50 xl:w-80 h-[520px] flex-shrink-0">
            <Image
              src="/images/column.png"
              alt="Ancient column"
              fill
              className="object-contain"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="flex flex-col items-center gap-6 max-w-3xl text-center px-4">

            <h1
              className={`${caesar.className} text-6xl sm:text-7xl md:text-8xl text-[#E0AA3A] tracking-wide`}
            >
              Apollo vs Python
            </h1>

            <h2
              className={`${montserrat.className} text-lg sm:text-xl text-neutral-300`}
            >
              A 2D educational platformer for learning Python programming fundamentals
            </h2>

            <p
              className={`${montserrat.className} text-base sm:text-lg text-neutral-400 leading-relaxed`}
            >
              Take control of Apollo as he journeys across ancient Greece,
              collecting scrolls of knowledge needed to defeat the serpent
              Python. Each level presents short, focused Python programming
              challenges that must be solved to unlock scrolls and progress
              through the game.
            </p>

            <Link
              href="https://apollovspython.netlify.app/"
              target="_blank"
              className={`${caesar.className} mt-4 mb-14 rounded-xl bg-[#E0AA3A] px-8 py-4 text-2xl text-black hover:bg-yellow-400 transition`}
            >
              Play Game
            </Link>
          </div>

          {/* RIGHT PILLAR */}
          <div className="hidden md:block relative w-50 xl:w-80 h-[520px] flex-shrink-0">
            <Image
              src="/images/column.png"
              alt="Ancient column"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <hr className="text-[#E0AA3A]"></hr>

        {/* MECHANICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-6">
         
            <div
              
              className="relative aspect-video border border-[#E0AA3A] rounded-xl overflow-hidden"
            >
              <Image
                src={`/images/Level_1.png`}
                alt={`Level 1`}
                fill
                className="object-cover object-[center_64%]"
              />
            </div>
            <div
              
              className="relative aspect-video border border-[#E0AA3A] rounded-xl overflow-hidden"
            >
              <Image
                src={`/images/Level_3.png`}
                alt={`Level 1`}
                fill
                className="object-cover object-[center_64%]"
              />
            </div>
            <div
              
              className="relative aspect-video border border-[#E0AA3A] rounded-xl overflow-hidden"
            >
              <Image
                src={`/images/Scroll.png`}
                alt={`Level 1`}
                fill
                className="object-cover object-[center_64%]"
              />
            </div>
            <div
              
              className="relative aspect-video border border-[#E0AA3A] rounded-xl overflow-hidden"
            >
              <Image
                src={`/images/Python.png`}
                alt={`Level 1`}
                fill
                className="object-cover object-[center_64%]"
              />
            </div>
            

         
        </div>
        {/* FOOTER */}
<footer className="mt-16 pt-8 border-t border-[#E0AA3A] text-center">
  <p
    className={`${caesar.className} text-xl text-[#E0AA3A] tracking-wide`}
  >
    Apollo vs Python
  </p>

  <p
    className={`${montserrat.className} mt-2 text-sm text-neutral-400`}
  >
    Game and website designed by{" "}
    <Link
      href="https://calummurphy.dev"
      target="_blank"
      className="text-[#E0AA3A] hover:underline"
    >
      calummurphy.dev
    </Link>
  </p>

  <p
    className={`${montserrat.className} mt-1 text-sm text-neutral-400`}
  >
    Game assets and third-party elements credited{" "}
    <Link
      href="https://github.com/CalMurph/Apollo_vs_Python/blob/main/README.txt"
      target="_blank"
      className="text-[#E0AA3A] hover:underline"
    >
      here
    </Link>
    .
  </p>
</footer>

        

      </div>
    
      
    </main>
  );
}
