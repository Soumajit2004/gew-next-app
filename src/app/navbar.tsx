"use client"

import {Menu} from "@headlessui/react";
import Link from "next/link";

const links = [
    {href: '/contact', label: 'Contact'},
    {href: '/services', label: 'Services'},
    {href: '/dashboard', label: 'Dashboard'},
]

export default function Navbar() {
    return (
        <nav className={"navbar absolute top-0 h-10 z-20 p-0 font-mono bg-neutral"}>
            <div className={"container mx-auto"}>
                <div className="flex-1">
                    <a className="normal-case text-sm md:text-base lg:text-xl tracking-wide">Ghosh Electrical Works</a>
                </div>
                <NavLinksMobile/>
                <NavLinksDesktop/>
            </div>
        </nav>
    );
}

function NavLinksDesktop() {
    return <div className="hidden md:block opacity-100" id="navbar-default">
        <ul className="menu menu-horizontal">
            <li tabIndex={0}>
                <button
                    className={"btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost no-animation rounded-none"}>
                    <Link href={"/contact"}>
                        Contact
                    </Link>
                </button>
            </li>
            <li>
                <button
                    className={"btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost no-animation rounded-none"}>
                    <Link href={"#contact"}>
                        Services
                    </Link>
                </button>
            </li>
            <li>
                <button
                    className={"btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost no-animation rounded-none text-white"}>
                    <Link href={"/dashboard"}>
                        Dashboard
                    </Link>
                    <span className="material-symbols-rounded">
                        double_arrow
                    </span>
                </button>
            </li>
        </ul>
    </div>;
}

function NavLinksMobile() {

    return (
        <div className={"md:hidden"}>
            <Menu>
                {({open}) => (
                    <>
                        <Menu.Button>
                            <span className="material-symbols-rounded">
                                {open ? "menu_open" : "menu"}
                            </span>
                        </Menu.Button>
                        <Menu.Items className={"flex flex-col mt-16 absolute top-0 right-0"}>
                            {
                                links.map(({href, label}, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                                <Link href={href} className={`btn rounded-none w-screen 
                                                ${(links.length - 1) == index ? "text-white" : ""}`}>
                                                    {label}
                                                </Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu.Items>
                    </>
                )}
            </Menu>
        </div>

    )
}