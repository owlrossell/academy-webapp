import {useState} from "react";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type {LinksFunction, MetaFunction} from "@remix-run/node";

import {cssBundleHref} from "@remix-run/css-bundle";
import animate from '~/styles/animate.css';
import global from '~/styles/global.css';
import styles from './styles/root.module.css';
import Header from "~/components/header";
import Footer from "~/components/footer/Footer";

export const meta: MetaFunction = () => [
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, user-scalable=no',
    }
]
export const links: LinksFunction = () => [
    {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap',
    },
    {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
        integrity: 'sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==',
        crossOrigin: 'anonymous',
        referrerPolicy: 'no-referrer',
    },
    {rel: 'stylesheet', href: animate},
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
        <body className={`${isDarkMode ? styles.darkTheme : styles.lightTheme} ${styles.body}`}>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <Outlet/>
        <Footer isDarkMode={isDarkMode}/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
