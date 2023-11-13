import { WordListModel } from '../../models/WordListModel';

export default defineEventHandler(async (event): Promise<WordListModel> => {
    // function should post and return with the updated list
    const { sentence } = await readBody(event);
    console.log('sentence', sentence);
});
