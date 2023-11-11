import type { ITool } from '~/routes/tool.$toolid';
import { Link } from '@remix-run/react';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import { toolsSearchHook } from '~/core/clients/tools';

const colors = ['to-blue-300', 'to-red-300', 'to-green-300', 'to-yellow-300'];

export function ToolGrid({tools}: { tools: ITool[] }) {
    const [searchResults, setSearchResults] = useState(tools);
    const search = toolsSearchHook(tools);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setSearchResults(search(value));
    };

    const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

    return <>
        <div className="relative mt-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-primary dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>

            <input type="search" id="search"
                   onChange={handleInputChange}
                   className="block w-full p-4 pl-10 text-sm text-gray-900 border border-primary rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Search Tool here..." required/>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-3">
            {searchResults.map((t, i) => <div key={i + 'outer'}>
                <Link className="hover:bg-amber-100" to={`/tool/${t.shortName}`}>
                    <div
                        className={`bg-gradient-to-r from-primary ${randomColor()} pt-3 pl-2 pb-3 border-t rounded-t-md mb-3`}>
                        <h2 className="text-xl text-white mt-3 ">{t.heading}</h2>
                    </div>
                    <div className="p-2 bg-white text-sm">
                        <p>
                            <div dangerouslySetInnerHTML={{__html: t.content.slice(0, 250) + '...'}}></div>
                        </p>
                        <div>
                            {t.mainCategory &&
                                <div className="my-2"><span className="font-bold">Category</span>: {t.mainCategory}</div>}
                        </div>
                    </div>
                </Link>
            </div>)}
        </div>
    </>;
}