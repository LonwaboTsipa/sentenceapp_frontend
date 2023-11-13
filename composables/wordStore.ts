import { defineStore } from "pinia";
import type { WordListModel } from "~/models/WordListModel";

const activeNoun = ref<string>('');
const activeVerb = ref<string>('');
const activeAdjective = ref<string>('');
const activeAdverb = ref<string>('');
const activePreposition = ref<string>('');
const activeConjunction = ref<string>('');
const activePronoun = ref<string>('');
const activeExclamation = ref<string>('');
const activeDeterminer = ref<string>('');
const sentence = ref<string>('');
const wordList = ref<WordListModel | null>(null);



export const useWordStore = defineStore('wordStore', () => {
    return {
        async updateNoun(noun: string) {
            activeNoun.value = noun;
        },
        async updateVerb(verb: string) {
            activeVerb.value = verb;
        },
        async updateAdjective(adjective: string) {
            activeAdjective.value = adjective;
        },
        async updateAdverb(adverb: string) {
            activeAdverb.value = adverb;
        },
        async updatePreposition(preposition: string) {
            activePreposition.value = preposition;
        },
        async updateConjunction(conjunction: string) {
            activeConjunction.value = conjunction;
        },
        async updatePronoun(pronoun: string) {
            activePronoun.value = pronoun;
        },
        async updateExclamation(exclamation: string) {
            activeExclamation.value = exclamation;
        },
        async updateDeterminer(determiner: string) {
            activeDeterminer.value = determiner;
        },
        async updateSentence(value: string) {
            sentence.value = value;
        },
        async clearSentence() {
            sentence.value = '';
        },
        async getWordList() {
            const {data} = await useFetch<WordListModel>('/api/GetWordList');
            if (data.value) {
                wordList.value = data.value;
            }
        },
        wordList,
        activeNoun,
        activeVerb,
        activeAdjective,
        activeAdverb,
        activePreposition,
        activeConjunction,
        activePronoun,
        activeExclamation,
        activeDeterminer,
        sentence
    };
}); 