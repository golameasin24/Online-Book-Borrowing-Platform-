import { Button } from "@/components/ui/button";
// import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { GoBook } from "react-icons/go";
import { montserrat, playfair } from "@/app/layout";
import Link from "next/link";
import { ThemeToggle } from "./thme-toogle-button/theme-toggole-button";
import UserMenu from "./UserMenu/UserMenu";

const Navbar = () => {
  return (
    <nav className="h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* <Logo /> */}

        <div className="flex justify-between items-center gap-2">
          <button className="bg-[#005c45] p-3 rounded-3xl">
            <GoBook className="text-white font-bold text-xl" />
          </button>
          <Link href={"/"} className={`${playfair.className}`}>
            Mahfuj Store
          </Link>
        </div>
        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            className="hidden sm:inline-flex border-none px-5"
            variant="outline"
          >
            <UserMenu />
          </Button>
          <button>Cart</button>
          <ThemeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
