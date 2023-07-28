import Link from "next/link";
import Image from "next/image";
import { footerLinks } from '../../../public/constants';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="container footer">
        <div className="flex flex-col">
          <div className="mb-6 md:mb-0 ">
            <Link href="/"className="flex mx-auto">
                <Image
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="mr-3 h-8"
                  alt="WorkUp Logo"
                  width={30}
                  height={30}
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  WorkUp
                </span>
            </Link>
          </div>
          <div className="flex flex-col justify-center  md:flex-row md:justify-around mt-4 ">
            {footerLinks.map((footerLink) => (
              <div
                key={footerLink.title}
                className="flex flex-col my-4 ml-2 md:ml-0"
              >
                <h4 className="font-semibold text-lg">{footerLink.title}</h4>
                <ul>
                  {footerLink.links.map((links) => (
                    <li
                      key={links.id}
                      className="font-normal text-[16px] mt-1 ml-4 md:ml-0 cursor-pointer"
                    >
                      <Link href={`${links.id}`}>
                        {links.display}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <Link href="/" className="hover:underline">
              WorkUp™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6  sm:ml-6 justify-center  sm:mt-0">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block p-3 bg-violet-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
              <FaTwitter />
            </button>

            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block p-3 bg-violet-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
              <FaInstagram />
            </button>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block p-3 bg-violet-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg transition duration-150 ease-in-out mx-1"
            >
              <FaFacebookF />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
