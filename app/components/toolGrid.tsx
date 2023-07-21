import type { ITool } from '~/routes/tool.$toolid';
import { Link } from '@remix-run/react';
import React, { ChangeEvent, useState } from 'react';
import { ToolsClient } from '~/core/clients/tools';


export function ToolGrid({tools}: { tools: ITool[] }) {
    const [searchResults, setSearchResults] = useState(tools);
    const searchClient = new ToolsClient(tools);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setSearchResults(searchClient.searchTools(value));
    };


    return <>
        <div className="relative mt-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-primary dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>

            <input type="search" id="search"
                   onChange={handleInputChange}
                   className="block w-full p-4 pl-10 text-sm text-gray-900 border border-primary rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search Tool here..." required />
        </div>

        <div className="grid grid-cols-2 gap-3">
            {searchResults.map((t, i) => <div key={i + 'outer'}>
                <Link className="" to={`/tool/${t.shortName}`}>
                    <div>
                        <h2 className="text-2xl text-primary mt-3 underline">{t.heading}</h2>
                    </div>
                </Link>
                <div>
                    {t.mainCategory && <div
                        className="text-sm inline-block my-2 py-1.5 px-2 bg-primary border-none rounded-full text-white">{t.mainCategory}</div>}
                </div>
                <p>
                    <div dangerouslySetInnerHTML={{__html: t.content.slice(0, 250) + '...'}}></div>
                </p>
            </div>)}
        </div>
    </>;
}