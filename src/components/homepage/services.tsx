import Link from "next/link";

export default function Services() {
    return (
        <section className={"container mx-auto snap-start"} id={"services"}>
            <div className={"flex flex-col gap-10 h-[90vh] min-w-full mx-auto prose"}>
                <h1 className={"text-white text-5xl font-sans"}>
                    Our <span className={"text-primary"}>Services</span>
                </h1>
                <div className={"grid grid-cols-3 gap-10 min-h-[60vh] w-auto"}>
                    {
                        [1, 2].map((value) => {
                            return (
                                <div className={"flex bg-secondary rounded-lg"}>
                                    <h1>Hi</h1>
                                </div>
                            )
                        })
                    }
                    <Link className={"flex bg-primary rounded-lg"} href={"#"}>
                        <h1>View all</h1>
                    </Link>
                </div>

            </div>
        </section>
    );
}