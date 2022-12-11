import {AdobeSpark, Canva, Crello, Visme} from "~/components/content/canva";

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
}

const MetaMapper = () => {
	return <><p>Introducing Meta-Mapper, the all-in-one design solution for creating stunning visuals in minutes. With
		our
		user-friendly interface and wide range of customizable templates, you can easily create professional-looking
		graphics for your blog, social media, or business.</p>

		<p>Whether you're a design pro or a complete beginner, Meta-Mapper has everything you need to create stunning
			visuals that stand out from the crowd. Our intuitive drag-and-drop editor lets you customize every aspect of
			your
			designs, from the layout and colors to the fonts and images. Plus, with our vast library of templates, you
			can
			quickly and easily create graphics that match your brand and aesthetic.</p>

		<p>With Meta-Mapper, you can create a wide range of visuals, including social media posts, blog headers,
			infographics, and more. We even have templates specifically designed for popular social media platforms like
			Facebook, Instagram, and Pinterest, so you can create visuals that are perfectly sized and formatted for
			each
			platform.</p>

		<p>So why settle for bland, generic graphics when you can create beautiful, unique visuals with Meta-Mapper? Try
			it
			out now and see for yourself how easy it is to create professional-looking designs in minutes. Visit <a
				href="http://www.meta-mapper.com">Meta-Mapper.com</a> to get started.</p>
	</>
}

const Pros = () => {
	return <ul>
		<li>User-friendly interface: Meta-Mapper has a user-friendly interface that is easy to navigate and use, even
			for beginners. This allows you to quickly and easily create stunning visuals without needing any design or
			coding skills.
		</li>

		<li>Customizable templates: Meta-Mapper offers a wide range of customizable templates, so you can create
			graphics that match your brand and aesthetic. Whether you're creating social media posts, blog headers,
			infographics, or something else, you can easily customize the templates to fit your needs.
		</li>

		<li>Drag-and-drop editor: Meta-Mapper's drag-and-drop editor lets you easily and intuitively customize
			your designs. You can move and resize elements, change the colors, fonts, and images, and add text
			and shapes to your designs with just a few clicks.
		</li>

		<li>Wide range of design options: Meta-Mapper offers a wide range of design options, so you can
			create visuals that are unique and eye-catching. You can choose from different layout options,
			color schemes, fonts, images, and more to create graphics that match your brand and style.
		</li>

		<li>Optimized for search engines: Meta-Mapper's features include keyword research and
			suggestion, grammar and spelling check, and readability analysis, so you can ensure that
			your content is not only well-written, but also optimized for search engines. This can help
			you improve your search engine rankings and drive more traffic to your website.
		</li>

	</ul>
}

export default function Index() {
	return <>
		<header>
			<img src="/logo.png"/><h1>Fast-Content.com</h1>
		</header>
		<Introduction/>
		<Canva/>
		<AdobeSpark/>
		<Visme />
		<Crello />
		<h2>Meta-Mapper.com</h2>
		<MetaMapper/>
		<Pros/>
	</>;
}
