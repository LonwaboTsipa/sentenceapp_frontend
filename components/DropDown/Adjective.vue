<template>
    <div>
        <UIDropdown :words="adjectiveList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const adjectiveList = ref<string[]>([]);
    const name = 'adjective';
    const updateValueClicked = (value: string) => {
        wordStore.updateAdjective(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            adjectiveList.value = wordStore.wordList.adjective;
        }
    });
</script>