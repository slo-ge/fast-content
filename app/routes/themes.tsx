import type { LoaderArgs } from '@remix-run/cloudflare';
import { json, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import React from 'react';
import { appendSeoPostfix } from '~/static';

const title = 'Meta-Mapper is your ticket to a creative';
const description = '    Step back in time and embrace the nostalgia of the Windows 95 era with Meta-Mapper, a design tool that takes you on\n' +
    '    a journey to the vaporwave-inspired cyberworld of the past. Meta-Mapper is not just a canvas; it\'s a time machine\n' +
    '    for your creative visions.';

const Intro = () => <div className="p-4 bg-gray-200 rounded-lg">
    {description}
    <br/>
    <br/>
    Meta-Mapper's unique charm lies in its collection of stunning presets that transport your designs to the halcyon
    days of Windows 95 and the mesmerizing aesthetic of vaporwave. Create visually striking images, posters, and
    digital art that exude the neon-lit streets, pixelated graphics, and geometric shapes of a bygone era.
    <br/>
    <br/>
    With a user-friendly interface reminiscent of the classic Windows 95 desktop, you'll find yourself lost in a
    world of vintage inspiration. The drag-and-drop simplicity of Meta-Mapper makes it accessible to both
    seasoned designers and newcomers alike. Customize your projects with nostalgic icons, glitchy fonts, and
    pastel colors that will transport your audience back to the '90s internet age.
    <br/>
    <br/>
    Meta-Mapper is your ticket to a creative playground that bridges the gap between the past and the
    present. Let your imagination soar as you design with the flair of Windows 95 and the chill vibes of
    vaporwave, all in one extraordinary tool.
</div>;

export interface PresetItem {
    title: string;
    id: string;
    preview: {
        url: string;
        formats: {
            thumbnail: {
                url: string;
            }
        }
    };
}

export interface PresetTag {
    name: string;
    seoText: string;
    presets: PresetItem[];
}

export const loader = async ({params}: LoaderArgs) => {
    const presets = await fetch('https://meta-mapper.com/cms/preset-tags').then(a => a.json<PresetTag[]>());

    return json(
        presets.filter(i => !!i.seoText)
    );
};

export const meta: MetaFunction<typeof loader> = () => {
    return [
        {
            title: appendSeoPostfix(title),
        },
        {
            property: "og:title",
            content: appendSeoPostfix(title)
        },
        {
            name: "description",
            content: appendSeoPostfix(description)
        }
    ];
};


export function TagSection({p, shortenText}: { p: PresetTag, shortenText?: boolean }) {
    const prestes = p.presets.map(_p => <a key={_p.title} className="p-4 bg-gray-200 rounded-lg"
                                           href={'https://meta-mapper.com/editor?adapter=lorem-ipsum&data=&presetId=' + _p.id}>
            <div className="text-md">{_p.title}</div>
            <div><img className="aspect-square object-cover w-64" src={'https://meta-mapper.com/cms' + _p.preview?.url}/>
            </div>
        </a>
    );

    return <div className="my-10">
        <a href={'themes/' + p.name}><h2 className="text-2xl underline">{p.name}</h2></a>
        <p className="p-4 bg-gray-200 rounded-lg whitespace-pre-wrap my-3">
            {shortenText ? p.seoText.slice(0, 400) + '...' : p.seoText}
        </p>
        <h3 className="text-xl my-3">{p.name.toUpperCase()} Themes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">{prestes}</div>
    </div>;
}

export default function Themes() {
    const data = useLoaderData<typeof loader>();
    const tags = data.map((p, index) => <TagSection shortenText={true} key={index} p={p}/>);

    return <div>
        <h1 className="text-2xl my-10">About the editor</h1>
        <Intro/>
        {tags}
    </div>;
}