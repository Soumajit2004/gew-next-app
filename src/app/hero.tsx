export default function Hero() {
    return (
        <section className={"h-screen"} id={"hero"}>
            <div className={"mx-auto min-h-full flex items-center container"}>
                <div className={"prose min-w-full h-auto"}>
                    <h1 className={"text-5xl w-4/5 lg:w-3/5 xl:w-2/4 font-sans text-white"}>
                        Expert Services,<br/>
                        guarantied results &<br/>
                        <span className={"text-primary"}>complete peace of mind.</span>
                    </h1>
                    <p className={"text-sm lg:w-2/5 font-mono w-1/2"}>
                        we are dedicated to providing top-notch electrical services to our customers. Our team of
                        skilled electricians has years of experience and is fully licensed and insured. We pride
                        ourselves
                        on our attention to detail, prompt service, and customer satisfaction. Whether you need a simple
                        repair or a complex installation, we have the expertise to get the job done right. Our goal is
                        to make
                        sure your home or business is safe and properly wired, so you can have peace of mind. Contact us
                        today to schedule an appointment and let us be your hero in all of your electrical needs.
                    </p>
                    <div className={"flex gap-x-5"}>
                        <button className={"btn btn-lg  btn-primary"}>
                            Get in touch
                        </button>
                        <button className={"btn btn-lg btn-outline btn-ghost"}>
                            Payments
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}