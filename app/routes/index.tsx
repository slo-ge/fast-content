import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { json, LoaderArgs } from '@remix-run/cloudflare';
import tools from '../../public/tools.json';
import { ITool } from '~/routes/tool.$toolid';

const Introduction = () => {
    return <><p>Are you tired of spending hours on end writing and editing your content? Do you wish there was a way to
        create high-quality, engaging content without all the hassle and time investment? Look no further, because the
        solution is here! Introducing a range of tools that can help you create content quickly and easily.</p>

        <p>These user-friendly interfaces and powerful features, you can craft engaging and informative content that
            captivates your audience. Whether you're a writer, blogger, or content marketer, these tools have everything
            you
            need to take your content to the next level.</p>

        <p>These tools cover every step of the content creation process, from brainstorming and organization to writing
            and
            editing. With features like keyword research and suggestion, grammar and spelling check, and readability
            analysis,
            you can ensure that your content is not only well-written, but also optimized for search engines and easy to
            read.</p>

        <p>But that's not all – these tools also offer a range of customizable templates and design options, so you can
            create
            visually appealing content that stands out from the crowd. From social media posts and infographics to blog
            headers and email newsletters, you can create a wide range of visuals that match your brand and
            aesthetic.</p>

        <p>And best of all, these tools are designed to be intuitive and user-friendly, so you don't need any design or
            coding
            skills to use them. Whether you're a design pro or a complete beginner, you can easily create stunning
            visuals in
            minutes.</p>

        <p>So why waste time and effort on tedious content creation tasks? Try these tools now and see how easy it is to
            create fast, high-quality content that gets results. With these powerful features and user-friendly
            interfaces, you
            can create engaging and informative content that captivates your audience and drives traffic to your
            website.</p>
    </>;
};

export const loader = async ({params}: LoaderArgs) => {
    return json<ITool[]>(tools);
};

export default function Index() {
    const data = useLoaderData<typeof loader>();
    return <>
        <header>
            <img alt="Shows logo of fast-content.com" src="/logo.png"/>
            <h1>Fast-Content.com</h1>
        </header>
        <Introduction></Introduction>
        <div className="tools-preview">
        {data.map((t, i) => <div key={i + 'outer'}>
            <Link to={`/tool/${t.shortName}`}>
                <div>
                    <h2>{t.heading}</h2>
                    <div dangerouslySetInnerHTML={{__html: t.content.slice(0, 150) + '...'}}></div>
                </div>
            </Link>
        </div>)}
        </div>
    </>;
}
