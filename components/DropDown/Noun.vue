<template>
    <div>
        <UIDropdown :words="nounList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const nounList = ref<string[]>([]);
    const name = 'noun';
    const updateValueClicked = (value: string) => {
        console.log('value noun',value);
        wordStore.updateNoun(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            nounList.value = wordStore.wordList.noun;
        }
    });
</script>