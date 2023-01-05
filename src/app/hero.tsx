import Link from "next/link";

export default function Hero() {
    return (
        <section className={"h-[90vh] snap-start"} id={"hero"}>
            <div className={"mx-auto min-h-full flex items-center container"}>
                <div className={"prose-sm md:prose lg:prose-lg min-w-full h-auto"}>
                    <h1 className={"font-sans text-white"}>
                        Expert Services,<br/>
                        guarantied results &<br/>
                        <span className={"text-primary"}>complete peace of mind.</span>
                    </h1>
                    <p className={"hidden md:block font-mono w-3/5"}>
                        we are dedicated to providing top-notch electrical services to our customers. Our team of
                        skilled electricians has years of experience and is fully licensed and insured. We pride
                        ourselves
                        on our attention to detail, prompt service, and customer satisfaction. Whether you need a simple
                        repair or a complex installation, we have the expertise to get the job done right. Our goal is
                        to make
                        sure your home or business is safe and properly wired, so you can have peace of mind. Contact us
                        today to schedule an appointment and let us be your hero in all of your electrical needs.
                    </p>
                    <div className={"flex gap-x-5 not-prose"}>
                        <Link className={"btn btn-sm md:btn-md lg:btn-lg btn-primary"} href={"/contact"}>
                            Get in touch
                        </Link>
                        <Link className={"btn btn-sm md:btn-md lg:btn-lg btn-outline btn-ghost"} href={"/payments"}>
                            Payments
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}