import { useState } from 'react';
// import { navLinks } from './data';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import tempImg from "../public/images/user.png";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
export default function Navbar() {

  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <Disclosure as="nav" className="bg-white shadow-lg  md:h-16">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-around">
          <div className="flex space-x-7">
            {/* Logo */}
            <Link href="/">
              <div>
                <Image  width={180} height={200} src={logoDark} alt="logoDark" />
              </div>
            </Link>

            {/* Menu Items */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Home</a>
              <a href="/blog" className="px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Blog</a>
              <a href="/about" className="px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">About</a>
              <a href="/privacy" className="px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Privacy</a>
              <a href="/contact" className="px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Contact</a>
            </div>
          </div>
          {/* user login */}
          <div className="flex items-center gap-4 text-lg">
            <div className="flex items-center gap-1">
              <img
                className="w-8 h-8 rounded-full"
                src={
                  session?.user?.image
                    ? session.user.image
                    : "https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
                }

                alt="logo"
              />
              <p className="text-sm font-semibold text-slate-600">
                {session?.user?.name || 'Hello Stranger'}
              </p>
            </div>
            {
              session ? (<button onClick={() => signOut()}
                className="uppercase text-xs text-slate-600 border-[1px] border-primaryColor hover:border-secondaryColor px-2 py-1 
                font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
                Sign Out
              </button>
              ) : (
                <button onClick={() => signIn()}
                className="uppercase w-auto text-xs text-slate-600 border-[1px] border-primaryColor hover:border-secondaryColor px-2 py-1 
                  font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
                  Sign In
                </button>
              )
            }
          </div>

          <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-cyan-700 
              hover:bg-secondaryColor hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white 
              lg:hidden">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>

        </div>
      </div>


      {/* Mobile menu */}
      <Disclosure.Panel className="lg:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 list-item	">
          <a href="/" className="block  px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Home</a>
          <a href="/blog" className="block  px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Blog</a>
          <a href="/about" className="block  px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">About</a>
          <a href="/contact" className="block  px-3 py-2 rounded-md text-base uppercase font-semibold text-cyan-700
              hover:bg-secondaryColor hover:text-white">Contact</a>
        </div>
      </Disclosure.Panel>

    </Disclosure>
  );
}


