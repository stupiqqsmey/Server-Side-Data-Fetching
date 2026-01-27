import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <div className="size-16 overflow-hidden rounded-full bg-white flex items-center justify-center">
                <img src="https://i.pinimg.com/originals/06/64/06/066406b6f24d80dae6bd697e2a56a3be.gif" alt="Logo" />
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link className="text-white-500 transition hover:text-white-500/75" href="/about-us"> About </Link>
                </li>

                <li>
                  <Link className="text-white-500 transition hover:text-white-500/75" href="/contact-us"> Contact </Link>
                </li>

                <li>
                  <Link className="text-white-500 transition hover:text-white-500/75" href="/products"> Products </Link>
                </li>

                <li>
                  <Link className="text-white-500 transition hover:text-white-500/75" href="/user"> User </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>

              <div className="hidden sm:flex">
                <Button variant="outline" asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            </div>

            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                      Navigate to different sections.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-4">
                    <Link className="text-white-500 transition hover:text-white-500/75" href="/about-us">About</Link>
                    <Link className="text-white-500 transition hover:text-white-500/75" href="/contact-us">Contact</Link>
                    <Link className="text-white-500 transition hover:text-white-500/75" href="/products">Products</Link>
                    <Link className="text-white-500 transition hover:text-white-500/75" href="/user">User</Link>
                    <Button asChild className="mt-4">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/register">Register</Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}