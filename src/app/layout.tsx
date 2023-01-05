import '../styles/globals.css'
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html>
        <head>
            <title>Ghosh Electrical Works</title>
            <meta property="og:title" content="Ghosh Electrical Works" key="title"/>
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}