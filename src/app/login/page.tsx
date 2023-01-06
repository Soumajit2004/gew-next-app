export default function LoginPage() {
    return (
        <main className={"h-screen flex items-center justify-center bg-swril-lines-pattern bg-repeat-y bg-cover"}>
            <div className={"container h-4/5 w-full bg-neutral mx-auto rounded-3xl p-10"}>
                <div className="prose-sm md:prose lg:prose-lg font-sans">
                    <h1>Login</h1>
                </div>
                <div className={"grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-4/5 mt-8"}>
                    <EmailLogin/>
                    <PhoneLogin/>
                </div>
            </div>
        </main>
    )
}

function EmailLogin() {
    return (
        <div className={"bg-red-100"}>
            <h1>Email</h1>
        </div>
    )
}

function PhoneLogin() {
    return (
        <div className={"bg-black"}>

        </div>
    )
}