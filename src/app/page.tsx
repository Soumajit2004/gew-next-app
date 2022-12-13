"use client"

import VideoBG from "../components/videoBg";
import 'material-symbols';
import Link from "next/link";

export default function HomePage() {
    return (

        <VideoBG source={"/video/videoBg.mp4"}>
            <Navbar/>
            <div className={"absolute top-0 prose h-screen min-w-full " +
                "flex flex-col justify-center mx-auto px-8"}>
                <p className={"font-pt text-3xl text-base-100 lg:text-xl"}>Our Moto,</p>
                <h1 className={"font-fira text-7xl text-neutral lg:text-6xl w-4/5 lg:w-3/5 xl:w-2/4"}>Sparking
                    your success with reliable, expert electrical service.
                </h1>
            </div>
        </VideoBG>
    );
}

function Navbar() {
    return (
        <nav className={"navbar absolute top-0 text-neutral z-20 p-0"}>
            <div className="flex-1 font-fira">
                <a className="normal-case text-xl tracking-wide px-8">Ghosh Electrical Works</a>
            </div>
            <div className="flex-none opacity-100 font-fira">
                <ul className="menu menu-horizontal">
                    <li tabIndex={0}>
                        <button className={"btn btn-lg btn-ghost no-animation"}>
                            <Link href={"/contact"}>
                                Contact
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className={"btn btn-lg btn-secondary no-animation"}>
                            <Link href={"/dashboard"}>
                                Dashboard
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
        ;
}