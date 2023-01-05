import Link from "next/link";

export default function Gallery() {
    return (
        <section className={"container mx-auto snap-start"} id={"services"}>
            <div className={"flex flex-col gap-10 min-w-full mx-auto prose-sm md:prose lg:prose-lg"}>
                <div className="flex justify-between ">
                    <h1 className={"text-white font-sans"}>
                        Our <span className={"text-primary"}>Gallery</span>
                    </h1>
                    <div className={"not-prose"}>
                        <Link className={"btn btn-sm md:btn-md lg:btn-lg btn-primary"} href={"#"}>
                            View Instagram
                        </Link>
                    </div>
                </div>
                <div
                    className={"grid md:grid-cols-2 md:grid-rows-2 gap-5 min-h-[80vh] w-auto"}>
                    <div className={"flex bg-accent rounded-lg px-8 py-10 row-span-2"}>
                        <h1>One</h1>
                    </div>
                    <div className={"flex bg-accent rounded-lg px-8 py-10"}>
                        <h1>Two</h1>
                    </div>
                    <div className={"flex bg-accent rounded-lg px-8 py-10"}>
                        <h1>Three</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

