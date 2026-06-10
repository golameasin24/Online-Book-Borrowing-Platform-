import { fetured_book } from "@/lib/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  BookOpen,
  ShoppingBag,
  CheckCircle,
  XCircle,
} from "lucide-react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const data = await fetured_book();
  const detailsData = data.find((db) => db.id === id);

  // যদি কোনো কারণে বই খুঁজে না পাওয়া যায়
  if (!detailsData) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h2 className="text-2xl font-bold text-destructive mb-2">
          Book Not Found!
        </h2>
        <p className="text-muted-foreground mb-6">
          The book you are looking for doesn't exist or has been removed.
        </p>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" /> Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  const isAvailable = detailsData.available_quantity > 0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl animate-in fade-in duration-300">
      {/* Back Button */}
      <Button
        asChild
        variant="ghost"
        className="mb-6 pl-2 text-muted-foreground hover:text-foreground"
      >
        <Link href="/">
          <ArrowLeft className="mr-2 size-4" /> Back to Books
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 bg-card border-2 border-dotted border-green-800 rounded-xl p-6 lg:p-8 shadow-sm relative overflow-hidden">
        {/* Left Side: Book Cover Image */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
          <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-lg shadow-md overflow-hidden border bg-muted group">
            <Image
              alt={detailsData.title || "Book Cover"}
              fill
              priority
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              src={detailsData.image_url}
            />
          </div>

          {/* Availability Badge below image on desktop / general */}
          <div className="mt-4 flex items-center gap-2 text-sm font-medium">
            {isAvailable ? (
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
                <CheckCircle className="size-4" />{" "}
                {detailsData.available_quantity} Copies Left
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-destructive bg-destructive/10 px-3 py-1 rounded-full border border-destructive/20">
                <XCircle className="size-4" /> Out of Stock
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Book Details Information */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Category Badge */}
            <div>
              <Badge
                variant="outline"
                className={`text-xs font-semibold px-2.5 py-0.5 ${
                  detailsData.category === "Story"
                    ? "border-emerald-600/30 text-emerald-700 bg-emerald-50/50 dark:bg-emerald-950/20 dark:text-emerald-400"
                    : "border-purple-600/30 text-purple-700 bg-purple-50/50 dark:bg-purple-950/20 dark:text-purple-400"
                }`}
              >
                {detailsData.category}
              </Badge>
            </div>

            {/* Title & Author */}
            <div className="space-y-1.5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                {detailsData.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-medium">
                by{" "}
                <span className="text-foreground/80 hover:underline cursor-pointer">
                  {detailsData.author}
                </span>
              </p>
            </div>

            <hr className="border-border" />

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
                Description
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
                {detailsData.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              className="flex-1 sm:flex-none px-8 h-11 font-medium shadow-sm transition-all"
              disabled={!isAvailable}
            >
              <ShoppingBag className="mr-2 size-4" />
              {isAvailable ? "Borrow This Book" : "Unavailable"}
            </Button>

            <Button
              variant="outline"
              className="flex-1 sm:flex-none px-6 h-11 text-muted-foreground hover:text-foreground"
            >
              <BookOpen className="mr-2 size-4" /> Read Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
