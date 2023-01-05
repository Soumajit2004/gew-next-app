import Navbar from "./navbar";
import Hero from "./hero";
import Services from "./gallery";
import Contact from "./contact";

export default function Homepage() {
    return (
        <div className={"bg-line-pattern bg-repeat-y bg-cover"}>
            <Navbar/>
            <main>
                <Hero/>
                <Services/>
                <Contact/>
            </main>
        </div>
    )
}