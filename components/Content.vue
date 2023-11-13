<template>
    <div class="content-container">
        <div class="dropdown-container">
            <DropDownNoun />
            <DropDownAdjective />
            <DropDownVerb />
            <DropDownAdverb />
            <DropDownPreposition />
            <DropDownConjunction />
            <DropDownDetermine />
            <DropDownPronoun />
            <DropDownExclamation />
        </div>
    </div>
</template>

<script setup lang="ts">
const wordStore = useWordStore();
await wordStore.getWordList();

</script>

<style scoped>
    .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .dropdown-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

</style>