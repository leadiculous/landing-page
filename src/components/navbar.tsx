"use client";

import MenuIcon from "../assets/icons/menu.svg";
import { Logo } from "./logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#get-early-access", label: "Early Access" },
];

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <Logo as="h1" className="size-12 mt-1 w-fit" />
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg md:hidden">
              <Sheet>
                <SheetTrigger>
                  <MenuIcon className="text-white" />
                </SheetTrigger>
                <SheetContent onCloseAutoFocus={event => event.preventDefault()}>
                  <SheetHeader>
                    <SheetTitle>
                      <Logo as="p" className="size-12 w-fit" />
                    </SheetTitle>
                    <SheetDescription className="hidden">mobile navigation menu</SheetDescription>
                    <nav className="text-white gap-6 items-center flex flex-col">
                      {navLinks.map(({ href, label }) => (
                        <SheetClose key={label} asChild>
                          <a
                            href={href}
                            className="text-opacity-60 text-white hover:text-opacity-100 transition font-semibold text-lg"
                          >
                            {label}
                          </a>
                        </SheetClose>
                      ))}
                      <button className="bg-white py-2 px-4 rounded-lg text-black">
                        Dashboard
                      </button>
                    </nav>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <nav className="text-white gap-6 items-center hidden md:flex">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-opacity-60 text-white hover:text-opacity-100 transition"
                >
                  {label}
                </a>
              ))}
              <button className="bg-white py-2 px-4 rounded-lg text-black">
                Dashboard
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
