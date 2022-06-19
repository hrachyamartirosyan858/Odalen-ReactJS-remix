import { useState, Fragment } from "react";
import { useLoaderData } from "remix";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
// import { topMenuData } from "../data";
import topMenuData from "~/data/TopMenuData.json";
import { NavLink } from "remix";

export default function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [navigation, setNavigation] = useState([
    {
      text: "Գլխավոր",
      href: "/",
      current: true,
    },
    {
      text: "Ամրագրել",
      href: "/reserve",
      current: false,
    },
    {
      text: "Ճաշացանկ",
      href: "/forRender",
      current: false,
    },
    {
      text: "Նախահաշիվ",
      href: "/estimateB",
      current: false,
    },
    {
      text: "Ակցիաներ",
      href: "/promo",
      current: false,
    },
    {
      text: "Մեր Մասին",
      href: "/estimateC",
      current: false,
    },
  ]);

  return (
    <Disclosure as="nav" className="bg-[#FFFBE9] h-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 h-full sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-full">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    width="40px"
                    height="auto"
                    src="Group_17.svg"
                    alt="Odalen logo"
                  /> */}

                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="Group_17.svg"
                    alt="Odalen logo"
                  /> */}
                </div>
                <div className="absolute inset-y-0 left-0 pl-[10px] flex items-center">
                  <img
                    className="block h-8 w-auto"
                    width="40px"
                    height="auto"
                    src="Group_17.svg"
                    alt="Odalen logo"
                  />

                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="Odalen_logo.png"
                    alt="Odalen logo"
                  /> */}
                  {/* <img
                    className="hidden md:block h-8 w-auto"
                    width="40px"
                    height="auto"
                    src="Group_17.svg"
                    alt="Odalen logo"
                  /> */}
                </div>
                <div className="hidden md:block md:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.href}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg-[#5E5946B2] text-white"
                              : "text-[#42332B] hover:bg-gray-700 hover:text-white"
                          } font-normal px-2 py-2 rounded-md text-sm`
                        }
                        aria-current={({ isActive }) =>
                          isActive ? "page" : undefined
                        }
                      >
                        {item.text}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center justify-center w-14 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none ">
                  {open ? (
                    <XIcon
                      className="block h-[46px] w-[34px] text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-[46px] w-[54px] text-black"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <Disclosure.Panel className="md:hidden absolute z-50 bg-[#FFFBE9] right-0 w-full h-[56.8vh] pt-[4.5vh]">
              {/* <--- */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 top-20"
                enterTo="transform opacity-100 scale-[-490]"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-[-490]"
                leaveTo="transform opacity-0 top-20"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
                  {navigation.map((item, index) => (
                    <div className="w-fit">
                      <NavLink
                        key={index}
                        as="a"
                        to={item.href}
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "bg-[#5E5946B2] text-white"
                              : "text-[#42332B] hover:bg-gray-700 hover:text-white"
                          } font-normal block px-3 py-2 rounded-md text-center`
                        }
                        aria-current={({ isActive }) =>
                          isActive ? "page" : undefined
                        }
                      >
                        <Disclosure.Button className="text-2xl font-semibold">
                          {item.text}
                        </Disclosure.Button>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </Transition>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
