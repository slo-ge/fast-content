import tools from 'public/tools.json';
import type { LoaderArgs, MetaFunction } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import { appendSeoPostfix } from '~/static';

export interface ITool {
    heading: string;
    url: string;
    shortName: string;
    content: string;
    imageUrl?: string;
    mainCategory?: string;
}

export const loader = async ({params}: LoaderArgs) => {
    const toolId = params.toolid;
    const tool = (tools as ITool[]).find(t => t.shortName === toolId);

    if (!tool) {
        throw new Response('{"error": "Not found"}');
    }

    return json(tool);
};

const sliceDescription = (description: string) => {
    return description.slice(0, 100);
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    return [
        {
            title: appendSeoPostfix(data.heading),
        },
        {
            property: "og:title",
            content: appendSeoPostfix(data.heading)
        },
        {
            name: "description",
            content: appendSeoPostfix(sliceDescription(data.content))
        }
    ];
};

export default function Tool() {
    const data = useLoaderData<typeof loader>();

    return <div>
        <h1 className="text-3xl text-primary my-5">{data.heading}</h1>
        {data.imageUrl && <img className="object-cover p-10" alt={`Teaser image of ${data.heading}`} src={data.imageUrl + '?w=200'}/>}
        <div className="whitespace-pre-line" dangerouslySetInnerHTML={{__html: data.content}}></div>
        <a className="block text-2xl text-primary my-10 underline" target="_blank" href={data.url}>Website: {data.heading}</a>
        <Link className="text-sm my-2" to={'/'}>Back</Link>
    </div>;
}