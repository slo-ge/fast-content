import type { HeadersFunction, MetaFunction } from '@remix-run/cloudflare';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, } from '@remix-run/react';
import stylesheet from '~/tailwind.css';
import { SEO_DESCRIPTION, SEO_TITLE } from '~/static';
import { Header } from '~/components/header';
import React from 'react';

export const meta: MetaFunction = () => {
    return [
        {charSet: 'utf-8'},
        {title: SEO_TITLE},
        {description: SEO_DESCRIPTION},
    ];
};

export function links() {
    return [
        {rel: 'stylesheet', href: stylesheet}
    ];
}

export const headers: HeadersFunction = () => ({
    'X-Stretchy-Pants': 'its for fun',
    'Cache-Control': 'max-age=300, s-maxage=3600',
});

export default function App() {
    return (
        <html lang="en">

        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
        <main className="m-5 md:m-10 max-w-2xl">
            <Header/>
            <Outlet/>
            <ScrollRestoration/>
            <Scripts/>
            <LiveReload/>
        </main>
        </body>
        </html>
    );
}
