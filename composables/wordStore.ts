import { defineStore } from "pinia";

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



export const useWoordStore = defineStore('woordStore', () => {
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