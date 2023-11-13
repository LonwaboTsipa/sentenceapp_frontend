<template>
    <div>
        <UIDropdown :words="prepositionList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const prepositionList = ref<string[]>([]);
    const name = 'preposition';
    const updateValueClicked = (value: string) => {
        console.log('value noun',value);
        wordStore.updatePreposition(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            prepositionList.value = wordStore.wordList.preposition;
        }
    });
</script>