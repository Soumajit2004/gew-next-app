"use client"

import Navbar from "./navbar";
import Hero from "./hero";
import Services from "./services";
import Contact from "./contact";

export default function HomePage() {
    return (
        <main className={"bg-line-pattern bg-repeat-y bg-cover"}>
            <Navbar/>
            <Hero/>
            <Services/>
            <Contact/>
        </main>
    );
}
