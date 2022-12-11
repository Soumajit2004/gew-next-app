import React from "react";

export default function VideoBG({children}: { children: React.ReactNode; }) {
    return (
        <div className={"h-screen w-screen"}>
            <div className={"absolute top-0 z-1 w-full h-full bg-black opacity-40"}></div>
            <video src={"/video/videoBg.mp4"} className={"m-0 p-0 h-full w-full object-cover z-0"} autoPlay loop muted/>
            {children}
        </div>
    )
}