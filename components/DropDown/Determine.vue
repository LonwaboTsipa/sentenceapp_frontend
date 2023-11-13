<template>
    <div>
        <UIDropdown :words="detemineList" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const wordStore = useWordStore();
    const detemineList = ref<string[]>([]);
    const name = 'detemine';
    const updateValueClicked = (value: string) => {
        wordStore.updateDeterminer(value);
    }

    watchEffect(() => {
        if (wordStore.wordList) {
            detemineList.value = wordStore.wordList.determiner;
        }
    });
</script>