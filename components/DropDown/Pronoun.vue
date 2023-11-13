
<template>
    <div>
        <UIDropdown :words="pronounList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const pronounList = ref<string[]>([]);
    const name = 'pronoun';
    const updateValueClicked = (value: string) => {
        wordStore.updatePronoun(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            pronounList.value = wordStore.wordList.pronoun;
        }
    });
</script>