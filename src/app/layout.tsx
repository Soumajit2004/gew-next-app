import React from "react";
import '../styles/external.css';
import '../styles/globals.css';

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}