import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { IoLogoTwitter } from "react-icons/io";
import { RiGlobalFill } from "react-icons/ri";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { playfair } from "@/app/layout";

const footerLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "All Books",
    href: `/all-book/${"00"}`,
  },
  {
    title: "Sign In",
    href: "/signin",
  },
  {
    title: "Sign Up",
    href: "/signup",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="border-t mt-10  bg-green-800">
      <div className=" container mx-auto text-white">
        <div className="flex flex-col items-start justify-between gap-x-8 gap-y-10 px-6 py-12 sm:flex-row xl:px-0">
          <div>
            <div className="flex  items-center gap-2">
              <button className="bg-gray-500 p-3 rounded-3xl">
                <GoBook className="text-white font-bold text-xl" />
              </button>
              <Link href={"/"} className={`${playfair.className}`}>
                Mahfuj Store
              </Link>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    className="text-muted-foreground hover:text-foreground"
                    href={href}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Newsletter */}
          <div className="w-full max-w-xs">
            <h6 className="font-medium">Stay up to date</h6>
            <form className="mt-6 flex items-center gap-2">
              <Input placeholder="Enter your email" type="email" />
              <Button className={`border border-white`}>Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" target="_blank">
              Shadcn UI Blocks
            </Link>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="#" target="_blank">
              <IoLogoTwitter className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <FaGithub className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
