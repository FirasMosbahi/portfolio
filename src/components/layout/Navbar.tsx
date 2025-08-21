"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

const theme = {
  "root": {
    "base": "z-50 bg-white px-2 py-2.5 sm:px-4 dark:border-gray-700 dark:bg-gray-800",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
    "bordered": {
      "on": "border",
      "off": ""
    },
    "inner": {
      "base": "z-50 mx-auto flex flex-wrap items-center justify-between",
      "fluid": {
        "on": "",
        "off": "container"
      }
    }
  },
  "brand": {
    "base": "z-50 flex items-center"
  },
  "collapse": {
    "base": "z-50 w-full md:block md:w-auto z-20",
    "list": "z-50 mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "z-50 block py-2 pl-3 pr-4 md:p-0",
    "active": {
      "on": "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-white",
      "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-primary-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "z-50 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    "icon": "h-6 w-6 shrink-0",
    "title": "sr-only"
  }
}

export default function HomeNavbar() {
  return (
    <Navbar theme={theme} fluid rounded className="z-50">
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Firas Mosbehi
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="/about-me">About me</NavbarLink>
        <NavbarLink href="/education">Education</NavbarLink>
        <NavbarLink href="/experience">Professional Experience</NavbarLink>
        <NavbarLink href="/projects">Projects</NavbarLink>

        <NavbarLink href="/skills">Skills</NavbarLink>
        <NavbarLink href="/contacts">Contacts</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
