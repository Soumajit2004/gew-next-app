import Navbar from "../components/homepage/navbar";
import Hero from "../components/homepage/hero";
import Services from "../components/homepage/services";
import Contact from "../components/homepage/contact";

export default function HomePage() {
    return (
        <main className={"bg-line-pattern bg-repeat-y bg-cover scroll-smooth snap-y"}>
            <Navbar/>
            <Hero/>
            <Services/>
            <Contact/>
        </main>
    );
}