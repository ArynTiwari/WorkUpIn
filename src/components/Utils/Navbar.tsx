/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import userAvtar from "../../../public/assets/userAvtar.svg";
import logoo from "../../../public/assets/logoo.png";
import { env } from "../../env/client.mjs";
import Button from "./Button";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "About", href: "/info/about", current: false },
];
const profileMenu = [
  { name: "Profile", href: "/profile" }
]


const Nav: React.FC = () => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="container mx-auto relative">
      <div className="container flex flex-row items-center justify-between">
        <Link href={'/'}>
          <Image src={logoo} alt="logo" height={100} width={100} quality={100} loading="lazy" />
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <ul className="flex space-x-4 items-center">
            {navigation.map((nav) => (
              <li key={nav.name} className="hover-link text-lg">
                <Link href={nav.href} className="">
                  {nav.name}
                </Link>
              </li>
            ))}
            {session ? <button className="primary-button" onClick={(e) => { e.preventDefault(); void signOut() }}>Sign Out</button> : <button className="primary-button" onClick={(e) => { e.preventDefault(); void signIn() }}>Sign In</button>}
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={isMenuOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="container glass mx-auto fixed inset-0 z-50 p-4 md:hidden flex flex-col"
            onClick={toggleMenu}
          >
            <div className="flex">
              <div className=""><button
                onClick={toggleMenu}
                className="absolute top-4 right-4 focus:outline-none"
              >
                <XMarkIcon className="h-6 w-6" color="purple" />
              </button></div>
              <div className="flex flex-col items-end space-y-2">
                <ul>
                  {navigation.map((nav) => (
                    <li key={nav.name} className="hover-link">
                      <Link
                        key={nav.name}
                        href={nav.href}
                        onClick={toggleMenu}
                      >
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};
export default Nav;
