import {useState} from "react";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type {LinksFunction} from "@remix-run/node";

import {cssBundleHref} from "@remix-run/css-bundle";
import global from '~/styles/global.css';
import styles from './styles/root.module.css';
import Header from "~/components/header";

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
        integrity: 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==',
        crossOrigin: 'anonymous',
        referrerPolicy: 'no-referrer',
    },
    {rel: 'stylesheet', href: global},
    ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : []),
];

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);


    return (
        <html lang="es">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body className={isDarkMode ? styles.darkTheme : styles.lightTheme}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
