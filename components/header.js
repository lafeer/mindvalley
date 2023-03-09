import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Container from "../components/container";
import SearchBar from "../components/searchbar";
import Button from "../components/button";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Community", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Events", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);

  //change navbar color on scroll with useEffect and clean up
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 90 ? setNavBg(true) : setNavBg(false);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-10 border-b-1 border-primary/10 ${
          navBg ? "bg-white" : ""
        }`}
      >
        <Container>
          <nav
            className="flex items-center justify-between pt-5.5 pb-4.5"
            aria-label="Global"
          >
            <div className="flex items-center lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <Image src="logo.svg" width={143} height={34} alt="logo" />
              </a>
              <div className="hidden lg:flex lg:gap-x-8 ml-18">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-gray font-semibold leading-6 hover:text-dark-gray"
                  >
                    {item.name}
                    {item.name === "Community" && (
                      <ChevronDownIcon className="h-4 w-4 inline-block ml-1" />
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
              <SearchBar />
              <Button
                text="Log in"
                size="sm"
                className={`font-normal text-xs`}
              />
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <Image src="logo.svg" width={143} height={34} alt="logo" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </Container>
      </header>
    </>
  );
}
