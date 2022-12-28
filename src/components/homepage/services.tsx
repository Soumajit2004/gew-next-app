import Link from "next/link";

export default function Services() {
    return (
        <section className={"container mx-auto snap-start"} id={"services"}>
            <div className={"flex flex-col gap-10 h-[90vh] min-w-full mx-auto prose"}>
                <h1 className={"text-white text-xl md:text-3xl lg:text-5xl font-sans"}>
                    Our <span className={"text-primary"}>Services</span>
                </h1>
                <div className={"grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 auto-cols-max gap-5 min-h-[60vh] w-auto"}>
                    {
                        [1, 2, 3].map((value) => {
                            return (
                                <div className={"flex bg-accent rounded-lg px-8 py-10"} key={value}>
                                    <h1>Hi</h1>
                                </div>
                            )
                        })
                    }
                    <Link className={"flex bg-primary rounded-lg px-8 py-10 no-underline"} href={"#"}>
                        <h1 className={"text-white"}>View all</h1>
                    </Link>
                </div>

            </div>
        </section>
    );
}