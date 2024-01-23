"use client";

import Link from "@/node_modules/next/link";
import { useState } from "react";
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// 예를 들어, "Menu" 아이콘을 사용하는 경우
import { OutlineMenu, SolidMenu, TwotoneMenu } from "@heroicons/react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-12 w-auto"
              src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+lego+white.png?format=1500w"
              alt=""
            />
          </Link>
        </div>

        <div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
