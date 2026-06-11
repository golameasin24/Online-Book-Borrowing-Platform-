import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import heroImg from "../../../public/image.jpg";
import { IoMdLogIn } from "react-icons/io";
import { format } from "date-fns";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-background py-30">
      {/* Subtle Background Glows for Depth */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
      <div className="absolute right-1/4 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[128px]" />

      <div className="container mx-auto grid w-full  gap-16 px-6 py-20 lg:grid-cols-12 lg:items-center lg:py-0">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-6">
          <div>
            <Button className="border border-green-800">
              {format(new Date(), "EE/MM/dd/yyyy")}
            </Button>
          </div>

          <h1 className="mt-6 font-bold text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Find Your <span className="text-[#005C45]"> Next Read</span>
          </h1>

          <p className="mt-6 max-w-[54ch] text-muted-foreground text-lg/relaxed sm:text-xl/relaxed">
            Borrow from a thoughtfully curated collection of fiction,
            technology, and science. No fees, no friction — just the joy of
            finding the right book.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              className="group rounded-full px-6 shadow-md transition-all hover:shadow-lg hover:shadow-primary/10  bg-green-800 text-white dark:bg-white hover:bg-green-500 dark:text-slate-700 hover:text-white"
              size="lg"
            >
              <Link href={`/all-book/${"00"}`}> Browse Now</Link>
              <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button
              className=" bg-green-800 hover:bg-orange-400  border-0 dark:text-white hover:text-white rounded-2xl"
              size="lg"
              variant="outline"
            >
              <Link href={`/signup`}> Become a member</Link> <IoMdLogIn />
            </Button>
          </div>
        </div>

        {/* Right Column: Visual Mockup */}
        <div className="relative lg:col-span-5 xl:col-span-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-green-800 bg-muted/30 p-2 shadow-2xl shadow-shadow/5 backdrop-blur-xs lg:aspect-square xl:aspect-video">
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-green-800 bg-accent">
              <Image
                fill
                priority
                src={heroImg}
                alt="UI Toolkit Preview"
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
