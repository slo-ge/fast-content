import tools from 'public/tools.json';
import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

export interface ITool {
    heading: string;
    url: string;
    shortName: string;
    content: string;
    imageUrl?: string;
}

export const loader = async ({params}: LoaderArgs) => {
    const toolId = params.toolid;
    const tool = (tools as ITool[]).find(t => t.shortName === toolId);

    if (!tool) {
        throw new Response('{"error": "Not found"}');
    }

    return json(tool);
};

export const meta: MetaFunction<typeof loader> = ({data}) => {
    return [
        {
            title: data.heading,
        },
        {
            property: "og:title",
            content: data.heading
        },
        {
            name: "description",
            content: data.content.slice(0, 100).trim()
        }
    ];
};

export default function Tool() {
    const data = useLoaderData<typeof loader>();

    return <div>
        <h1 className="text-3xl text-primary my-5">{data.heading}</h1>
        {data.imageUrl && <img className="object-cover p-10" src={data.imageUrl + '?w=200'}/>}
        <div className="whitespace-pre-line" dangerouslySetInnerHTML={{__html: data.content}}></div>
        <a className="block text-2xl text-primary my-10 underline" href={data.url}>{data.heading}</a>
    </div>;
}