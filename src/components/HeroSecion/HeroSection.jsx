import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import heroImg from "../../../public/image.jpg";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Subtle Background Glows for Depth */}
      <div className="absolute top-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
      <div className="absolute right-1/4 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[128px]" />

      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-16 px-6 py-20 lg:grid-cols-12 lg:items-center lg:py-0">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-6">
          <div>
            <Badge
              asChild
              className="inline-flex items-center gap-1 rounded-full border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
              variant="outline"
            >
              <Link href="#">
                Just released v1.0.0
                <ArrowUpRight className="size-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Badge>
          </div>

          <h1 className="mt-6 font-bold text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Your complete{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              UI building toolkit
            </span>
          </h1>

          <p className="mt-6 max-w-[54ch] text-muted-foreground text-lg/relaxed sm:text-xl/relaxed">
            Explore a collection of Shadcn UI blocks and components, ready to
            preview and copy. Streamline your development workflow with
            easy-to-implement examples.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              className="group rounded-full px-6 shadow-md transition-all hover:shadow-lg hover:shadow-primary/10"
              size="lg"
            >
              Get Started
              <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button
              className="rounded-full px-6 shadow-none transition-colors"
              size="lg"
              variant="outline"
            >
              <CirclePlay className="mr-2 size-4 opacity-80" /> Watch Demo
            </Button>
          </div>
        </div>

        {/* Right Column: Visual Mockup */}
        <div className="relative lg:col-span-5 xl:col-span-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted/30 p-2 shadow-2xl shadow-shadow/5 backdrop-blur-xs lg:aspect-square xl:aspect-video">
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-border/50 bg-accent">
              <Image
                fill
                priority
                src={heroImg}
                alt="UI Toolkit Preview"
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
