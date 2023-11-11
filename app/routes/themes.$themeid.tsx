import type { LoaderArgs , MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import type { PresetTag} from '~/routes/themes';
import { TagSection } from '~/routes/themes';
import { useLoaderData } from '@remix-run/react';
import React from 'react';
import { appendSeoPostfix } from '~/static';

export const loader = async ({params}: LoaderArgs) => {
    const id = params.themeid;
    const presets = await fetch('https://meta-mapper.com/cms/preset-tags?name=' + id).then(a => a.json<PresetTag[]>());

    return json(
        presets[0]
    );
};

export const meta: MetaFunction<typeof loader> = ({data}) => {
    return [
        {
            title: appendSeoPostfix(`${data.name} themes for meta-mapper`),
        },
        {
            property: "og:title",
            content: appendSeoPostfix(`${data.name} themes for meta-mapper`)
        },
        {
            name: "description",
            content: appendSeoPostfix(data.seoText.slice(0, 100))
        }
    ];
};

export default function Themes() {
    const data = useLoaderData<typeof loader>();

    return <div>
        <h1 className="text-2xl my-10">About the editor</h1>
        <TagSection p={data}/>
    </div>;
}