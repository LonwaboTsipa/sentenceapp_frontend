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
        console.log('value noun',value);
        wordStore.updateAdjective(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            adjectiveList.value = wordStore.wordList.adjective;
        }
    });
</script>