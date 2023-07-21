import type { ITool } from '~/routes/tool.$toolid';

export class ToolsClient {
    private tools: ITool[];

    constructor(tools: ITool[]) {
        this.tools = tools;
    }

    public searchTools(searchTerm: string): ITool[] {
        const searchInTerms = (resultTerm?: string) => {
            return resultTerm?.toLowerCase().includes(searchTerm.toLowerCase());
        };

        return this.tools.filter(t => {
            return searchInTerms(t.mainCategory)
                || searchInTerms(t.shortName)
                || searchInTerms(t.content)
                || searchInTerms(t.heading);
        });
    }
}