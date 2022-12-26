import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={"navbar absolute top-0 h-10 z-20 p-0 font-mono bg-neutral"}>
            <div className={"container mx-auto"}>
                <div className="flex-1">
                    <a className="normal-case text-xl tracking-wide">Ghosh Electrical Works</a>
                </div>
                <div className="flex-none opacity-100">
                    <ul className="menu menu-horizontal">
                        <li tabIndex={0}>
                            <button className={"btn btn-lg btn-ghost no-animation rounded-none"}>
                                <Link href={"/contact"}>
                                    Contact
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button className={"btn btn-lg btn-ghost no-animation rounded-none"}>
                                <Link href={"#contact"}>
                                    Services
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button className={"btn btn-lg btn-ghost no-animation rounded-none text-white"}>
                                <Link href={"/dashboard"}>
                                    Dashboard
                                </Link>
                                <span className="material-symbols-rounded">
                                    double_arrow
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}