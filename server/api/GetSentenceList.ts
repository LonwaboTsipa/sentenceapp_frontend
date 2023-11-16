const url = process.env.NUXT_API_BASE_URL;
export default defineEventHandler(async (event): Promise<string[] | null> => {
    const data = await $fetch<string[]>(`${url}/api/Sentence/getAllSentences`, 
    {
        method: 'GET'
    });
    
    return data;
});
