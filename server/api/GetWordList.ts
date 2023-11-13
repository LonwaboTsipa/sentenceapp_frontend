import { WordListModel } from '../../models/WordListModel';

export default defineEventHandler(async (event): Promise<WordListModel> => {
    return {
        noun: ['dog', 'cat', 'house', 'car', 'book'],
        verb: ['run', 'eat', 'sleep', 'study', 'sing'],
        adjective: ['happy', 'big', 'green', 'smart', 'beautiful'],
        adverb: ['quickly', 'slowly', 'loudly', 'always', 'never'],
        preposition: ['in', 'on', 'under', 'behind', 'between'],
        conjunction: ['and', 'but', 'or', 'because', 'although'],
        pronoun: ['I', 'you', 'he', 'she', 'it'],
        exclamation: ['Wow!', 'Oh no!', 'Bravo!', 'Yikes!', 'Ouch!'],
        determiner: ['a', 'an', 'the', 'some', 'any'],
    }
});
