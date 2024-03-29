import { useLoaderData } from '@remix-run/react';
import type { LoaderArgs } from '@remix-run/cloudflare';
import { json } from '@remix-run/cloudflare';
import tools from '../../public/tools.json';
import type { ITool } from '~/routes/tool.$toolid';
import React from 'react';
import { ToolGrid } from '~/components/toolGrid';

const Introduction = () => {
    return <div className="text-sm">
        <h1 className="text-3xl">What is <span className="text-primary">fast-content.com</span>?</h1>
        <p className="my-5">Are you tired of spending hours on end writing and editing your content? Do you wish
        there was a way to
        create high-quality, engaging content without all the hassle and time investment? Look no further, because the
        solution is here! Introducing a range of tools that can help you create content quickly and easily.</p>

        <p className="my-5">These user-friendly interfaces and powerful features, you can craft engaging and informative
            content that
            captivates your audience. Whether you're a writer, blogger, or content marketer, these tools have everything
            you
            need to take your content to the next level.</p>

        <p className="my-5">These tools cover every step of the content creation process, from brainstorming and
            organization to writing
            and
            editing. With features like keyword research and suggestion, grammar and spelling check, and readability
            analysis,
            you can ensure that your content is not only well-written, but also optimized for search engines and easy to
            read.</p>

        <p className="my-5">But that's not all – these tools also offer a range of customizable templates and design
            options, so you can
            create
            visually appealing content that stands out from the crowd. From social media posts and infographics to blog
            headers and email newsletters, you can create a wide range of visuals that match your brand and
            aesthetic.</p>

        <p className="my-5">And best of all, these tools are designed to be intuitive and user-friendly, so you don't
            need any design or
            coding
            skills to use them. Whether you're a design pro or a complete beginner, you can easily create stunning
            visuals in
            minutes.</p>

        <p className="my-5">So why waste time and effort on tedious content creation tasks? Try these tools now and see
            how easy it is to
            create fast, high-quality content that gets results. With these powerful features and user-friendly
            interfaces, you
            can create engaging and informative content that captivates your audience and drives traffic to your
            website.</p>
    </div>;
};

export const loader = async ({params}: LoaderArgs) => {
    return json<ITool[]>(tools);
};

export default function Index() {
    const data = useLoaderData<typeof loader>();
    return <>
        <header className="flex items-center gap-3 text-primary text-3xl m-5">
            <img className="w-10" alt="Shows logo of fast-content.com" src="/logo.png"/>
            <h1>Fast-Content.com</h1>
        </header>
        <Introduction/>
        <ToolGrid tools={data}/>
    </>;
}
