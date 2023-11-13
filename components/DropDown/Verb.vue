<template>
    <div>
        <UIDropdown :words="verbList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const verbList = ref<string[]>([]);
    const name = 'verb';
    const updateValueClicked = (value: string) => {
        wordStore.updateVerb(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            verbList.value = wordStore.wordList.verb;
        }
    });
</script>