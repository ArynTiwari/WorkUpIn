import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import userAvtar from "../../../public/assets/userAvtar.svg";
import logo from "../../../public/assets/logo.png";
import { env } from "../../env/client.mjs";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "About", href: "/info/about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Nav: React.FC = () => {
  const { data: session } = useSession();
  return (
    <Disclosure as="nav" className="my-auto rounded-sm bg-violet-500">
      {({}) => (
        <>
          <div className="mx-2 md:mx-6 lg:mx-12 ">
            <div className="relative flex h-12 items-center justify-between">
              <div className="absolute flex items-center lg:hidden">
                <Menu as="div" className="">
                  {({ open }) => (
                    <>
                      <div className="flex ml-2">
                        <Menu.Button className="text-white">
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6 bg-white text-violet-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <Menu.Items className="w-30 absolute z-50 mt-3 rounded-md bg-violet-500 py-1 shadow-lg ring-1 ring-violet-500 ring-opacity-75 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/"
                                className={classNames(
                                  active
                                    ? "rounded-lg bg-green-300 text-black"
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Home
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/info/about"
                                className={classNames(
                                  active
                                    ? "rounded-lg bg-green-300 text-black"
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                About
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="left-0 flex flex-shrink-0 items-center">
                  <Link href={"/"}>
                    <Image
                      className="hidden h-8 w-auto cursor-pointer lg:block"
                      src={logo}
                      alt=""
                      height={50}
                      width={50}
                    />
                  </Link>
                </div>
                <div className="z-50 ml-4 hidden lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white text-black"
                            : "text-white hover:bg-blue-700 hover:text-white",
                          "rounded-md px-3 py-2 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {!session && (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        void signIn();
                      }}
                      className="flex rounded-md px-3 py-2 text-lg text-white hover:bg-white hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      Sign In
                    </button>
                  </>
                )}
                {session && (
                  <>
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="rounded-full"
                            src={
                              (session.user?.image as string)
                                ? (session?.user?.image as string)
                                : (userAvtar as string)
                            }
                            alt="user"
                            height={50}
                            width={50}
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="w-30 absolute right-[0.25px] z-10 mt-4 origin-top-right rounded-md bg-violet-600 py-1 shadow-lg ring-1 ring-violet-500 ring-opacity-75 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/profile"
                                className={classNames(
                                  active
                                    ? "rounded-lg bg-green-300 text-black"
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/profile/blogs"
                                className={classNames(
                                  active
                                    ? "rounded-lg bg-green-300 text-black"
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Blogs
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={`${env.NEXT_PUBLIC_URL}/chat`}
                                className={classNames(
                                  active
                                    ? "rounded-lg bg-green-300 text-black"
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Inbox
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/profile/settings"
                                className={classNames(
                                  active
                                    ? "rounded-lg bg-green-300 text-black"
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  void signOut();
                                }}
                                className={classNames(
                                  active
                                    ? "rounded-lg bg-green-300 text-black"
                                    : "",
                                  "block px-4 py-2 text-sm text-white"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};
export default Nav;
