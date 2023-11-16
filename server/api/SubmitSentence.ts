const url = process.env.NUXT_API_BASE_URL;
export default defineEventHandler(async (event): Promise<string[]> => {
    const { sentence } = await readBody(event);
    const data = await $fetch<string[]>(`${url}/api/Sentence/addSentence`, 
    {
        method: 'POST',
        body: {
            sentence: sentence
        }
    });
    
    return data;
});
