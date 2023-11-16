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
const sentenceList = ref<string[]>([]);
const wordList = ref<WordListModel | null>(null);



export const useWordStore = defineStore('wordStore', () => {
    return {
        async updateNoun(noun: string) {
            const newSentence = updateSentence(sentence.value, noun, activeNoun.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activeNoun.value = noun;
        },
        async updateVerb(verb: string) {
            const newSentence = updateSentence(sentence.value, verb, activeVerb.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activeVerb.value = verb;
        },
        async updateAdjective(adjective: string) {
            const newSentence = updateSentence(sentence.value, adjective, activeAdjective.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activeAdjective.value = adjective;
        },
        async updateAdverb(adverb: string) {
            const newSentence = updateSentence(sentence.value, adverb, activeAdverb.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activeAdverb.value = adverb;
        },
        async updatePreposition(preposition: string) {
            const newSentence = updateSentence(sentence.value, preposition, activePreposition.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activePreposition.value = preposition;
        },
        async updateConjunction(conjunction: string) {
            const newSentence = updateSentence(sentence.value, conjunction, activeConjunction.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activeConjunction.value = conjunction;
        },
        async updatePronoun(pronoun: string) {
            const newSentence = updateSentence(sentence.value, pronoun, activePronoun.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activePronoun.value = pronoun;
        },
        async updateExclamation(exclamation: string) {
            const newSentence = updateSentence(sentence.value, exclamation, activeExclamation.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activeExclamation.value = exclamation;
        },
        async updateDeterminer(determiner: string) {
            const newSentence = updateSentence(sentence.value, determiner, activeDeterminer.value);
            const formattedSentence = formatToSentence(newSentence);
            sentence.value = formattedSentence;
            activeDeterminer.value = determiner;
        },
        async clearSentence() {
            sentence.value = '';
        },
        async getWordList() {
            const {data} = await useFetch<WordListModel>('/api/GetWordList',  {
                method: 'GET'
            });
            if (data.value) {
                wordList.value = data.value;
            }
        },
        async submitSentence(value: string) {
            const {data} = await useFetch<string[]>('/api/SubmitSentence', {
                method: 'POST',
                body: {
                    sentence: value
                }
            });

            if (data.value) {
                sentenceList.value = data.value;
                sentence.value = '';
            }
        },
        async getSentenceList() {
            const {data} = await useFetch<string[]>('/api/GetSentenceList', {
                method: 'GET',
            });
            if (data.value) {
                sentenceList.value = data.value;
            }

            return data.value;
        },
        sentenceList,
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

function updateSentence (currentSentence:string, newlySelected:string, oldWord:string){
    if(oldWord.trim() === ""){
        if(currentSentence.trim() !== ""){
            const newSentence = `${currentSentence} ${newlySelected}`;
            return newSentence;
        }else {
            return newlySelected;
        }
    } 
    
    if(currentSentence.includes(oldWord)){
        const replacedSentence = currentSentence.replace(oldWord, newlySelected);
        return replacedSentence;
    }
    else{
        const newSentence = `${currentSentence} ${newlySelected}`;
        return newSentence;
    }
}

function formatToSentence(sentence:string) {
    const sentenceSplit = sentence.split(/(?<=[.?!])\s+/);

    const uppercaseSentence = sentenceSplit.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const val = uppercaseSentence.join(' ');

    return val;
}