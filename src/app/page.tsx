import VideoBG from "../components/videoBg";

export default function HomePage() {
    return (
        <VideoBG>
            <div className={"absolute top-0 prose lg:text-center h-screen min-w-full " +
                "flex items-center flex-col justify-center mx-auto px-8 lg:px-0"}>
                <p className={"font-pt text-3xl lg:text-xl w-full ease-in-out"}>Welcome to,</p>
                <h1 className={"font-fira text-8xl text-primary lg:text-7xl w-full ease-in-out"}>Ghosh Electrical Works</h1>
                <div className="flex gap-x-10">
                    <button className={"btn btn-primary btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg"}>
                        Contact
                    </button>
                    <button className={"btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"}>
                        Dashboard
                    </button>
                </div>

            </div>
        </VideoBG>
    );
}