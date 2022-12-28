import '../styles/external.css'
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Ghosh Electrical Works</title>
                <meta property="og:title" content="Ghosh Electrical Works" key="title"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}