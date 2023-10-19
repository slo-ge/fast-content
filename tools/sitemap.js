const {SitemapStream, streamToPromise} = require('sitemap');
const {Readable} = require('stream');
const fs = require('fs');

const BASE_URL = 'https://fast-content.com';

const STATIC_URLS = [
    {url: BASE_URL, changefreq: 'daily', priority: 1},
    {url: `${BASE_URL}/imprint`, changefreq: 'monthly', priority: 1},
    {url: `${BASE_URL}/themes`, changefreq: 'daily', priority: 1},
];

async function create() {
    const data = fs.readFileSync('./public/tools.json', 'utf8');
    const list = JSON.parse(data);


    const links = STATIC_URLS;
    for (const item of list) {
        if (item.shortName) {
            links.push({
                url: `${BASE_URL}/tool/${item.shortName}`,
                priority: 0.8,
                changefreq: "monthly"
            })
        }
    }
    const stream = new SitemapStream({hostname: 'https://...'});
    const d2 = await streamToPromise(Readable.from(links).pipe(stream));

    fs.writeFile('./public/sitemap.xml', d2.toString(), () => {
    });
}

void create();


