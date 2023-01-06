"use client"

import {Menu} from "@headlessui/react";
import Link from "next/link";

const links = [
    {href: '/contact', label: 'Contact', prefetch: false},
    {href: '/services', label: 'Services', prefetch: false},
    {href: '/login', label: 'Dashboard', prefetch: true},
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
            {links.map(({href, label, prefetch}, index) => {
                return (
                    <li key={index}>
                        <Link className={"btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost no-animation rounded-none"}
                              href={href}>
                            {label}
                            {(links.length - 1) == index ?
                                <span className="material-symbols-rounded">double_arrow</span> : ""}
                        </Link>
                    </li>
                )
            })}
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
                                links.map(({href, label, prefetch}, index) => {
                                    return (
                                        <Menu.Item key={index}>
                                            <Link href={href}
                                                  className={`btn rounded-none w-screen 
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