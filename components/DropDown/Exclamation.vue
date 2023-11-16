<template>
    <div>
        <UIDropdown :words="exclamationList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const exclamationList = ref<string[]>([]);
    const name = 'exclamation';
    const updateValueClicked = (value: string) => {
        wordStore.updateExclamation(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            exclamationList.value = wordStore.wordList.exclamation;
        }
    });
</script>