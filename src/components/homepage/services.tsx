export default function Services() {
    return (
        <section className={"container mx-auto snap-start"} id={"services"}>
            <div className={"h-[90vh] min-w-full mx-auto prose"}>
                <h1 className={"text-white text-5xl font-sans"}>
                    Our <span className={"text-primary"}>Services</span>
                </h1>
                <div className={"grid gap-10 min-h-full grid-cols-3 grid-rows-2 overflow-visible"}>
                    {
                        [1, 2, 3].map((value) => {
                            return (
                                <div className="card w-96 bg-base-100 shadow-xl image-full " key={value}>
                                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"/></figure>
                                    <div className="card-body max-h-20 overflow-clip">
                                        <h2 className="card-title">Shoes!</h2>
                                        <p className={"truncate whitespace-normal"}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
                                            ultrices nulla. Fusce et viverra dui. Quisque ultricies nisl vitae massa
                                            tristique, sed faucibus risus iaculis. Sed tempor odio euismod tincidunt
                                            vehicula. Quisque bibendum lacus eu mi sagittis, eu vulputate tellus auctor.
                                            Nullam imperdiet, urna sed feugiat pellentesque, magna libero efficitur
                                            odio, sit amet porta nulla lacus non purus. Nam consectetur neque dui, et
                                            feugiat eros pretium ac. Quisque at odio erat. Morbi ut venenatis quam.
                                            Suspendisse potenti. Praesent tristique massa egestas felis aliquam, non
                                            mollis nunc feugiat. Sed pulvinar lectus sed risus semper mattis.
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <button className={"btn btn-lg btn-primary font-mono col-span-3"}>
                        View all services
                    </button>
                </div>
            </div>
        </section>
    );
}