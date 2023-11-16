import { WordListModel } from '../../models/WordListModel';

const url = process.env.NUXT_API_BASE_URL;
export default defineEventHandler(async (event): Promise<WordListModel> => {
    const data = await $fetch<WordListModel>(`${url}/api/Words/getAll`, 
    {
        method: 'GET'
    });
    
    return data;
});
