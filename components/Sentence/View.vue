<template>
    <div class="sentence-container">
        <textarea readonly v-model="sentence" rows="8" cols="50" placeholder="Select words to display a sentence here."></textarea>
        <button @click="submitSentecnce">Submit</button>
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const sentence = ref<string>('');

    watchEffect(() => {
        if (wordStore.sentence) {
            sentence.value = wordStore.sentence;
        }
    });

    const submitSentecnce = () => {
        if (sentence.value.trim() !== '') {
            wordStore.submitSentence(sentence.value);
        }
    }
</script>

<style scoped>
    textarea {
        font-size: 2em;
        width: 100%;
        resize: none;
    }

    .sentence-container{
        margin-top: 1em;
        margin-bottom: 1em;
        padding: 0em 3em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    button {
        border: none;
        font-size: 2.4rem;
        text-transform: uppercase;
        font-weight: 900;
        color: #fff;
        background: #415e5a;
        padding: 0.5em 2em;
        margin: 20px 0 0 0;
        border-radius: 10px;
        cursor: pointer;
    }
</style>