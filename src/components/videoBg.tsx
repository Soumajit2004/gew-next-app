import React from "react";

export default function VideoBG({
                                    children,
                                    source
                                }: {
    children: React.ReactNode;
    source: string;
}) {
    return (
        <div className={"h-screen w-screen"}>
            <div className={"absolute top-0 z-1 w-full h-full bg-black opacity-40"}></div>
            <video src={source} className={"m-0 p-0 h-full w-full object-cover z-0"} autoPlay loop muted/>
            {children}
        </div>
    )
}