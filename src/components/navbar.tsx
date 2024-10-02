import MenuIcon from "../assets/icons/menu.svg";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <Logo as="h1" className="size-12 mt-1 w-fit">
              Leadiculous
            </Logo>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <MenuIcon className="text-white" />
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a
                href="#features"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Features
              </a>
              <a
                href="#showcase"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Showcase
              </a>
              <a
                href="#pricing"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                FAQ
              </a>
              <a
                href="#get-early-access"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Early Access
              </a>
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
