import type { ITool } from '~/routes/tool.$toolid';

export function toolsSearchHook(tools: ITool[]) {
    return  (searchTerm: string) =>  {
        const searchInTerms = (resultTerm?: string) => {
            return resultTerm?.toLowerCase().includes(searchTerm.toLowerCase());
        };

        return tools.filter(t => {
            return searchInTerms(t.mainCategory)
                || searchInTerms(t.shortName)
                || searchInTerms(t.content)
                || searchInTerms(t.heading);
        });
    }
}