import type { MetaFunction } from '@remix-run/cloudflare';
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';


import defaultStyle from 'public/style/default.css';
import { SEO_DESCRIPTION, SEO_TITLE } from '~/static';
import { Header } from '~/components/header';
import React from 'react';

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: SEO_TITLE,
    viewport: 'width=device-width,initial-scale=1',
    description: SEO_DESCRIPTION
});


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: defaultStyle
        }
    ];
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-FPQ3K7G5QW"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
		var doNotTrack = false;
		if (!doNotTrack) {
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-FPQ3K7G5QW', { 'anonymize_ip': false });
		}`
            }}
            />
            <Meta/>
            <Links/>
        </head>
        <body>
        <Header/>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
