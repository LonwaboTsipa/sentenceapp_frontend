<template>
    <div>
        <UIDropdown :words="conjunctionList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const conjunctionList = ref<string[]>([]);
    const name = 'conjunction';
    const updateValueClicked = (value: string) => {
        wordStore.updateConjunction(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            conjunctionList.value = wordStore.wordList.conjunction;
        }
    });
</script>