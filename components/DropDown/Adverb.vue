<template>
    <div>
        <UIDropdown :words="adverbList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const adverbList = ref<string[]>([]);
    const name = 'adverb';
    const updateValueClicked = (value: string) => {
        wordStore.updateAdverb(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            adverbList.value = wordStore.wordList.adverb;
        }
    });
</script>