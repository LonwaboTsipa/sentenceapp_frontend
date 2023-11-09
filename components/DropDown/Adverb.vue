<template>
    <div>
        <UIDropdown :words="words" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const name = 'adverb';
    const words = ['one', 'two', 'three', 'four', 'five'];
    const updateValueClicked = (value: string) => {
        console.log('value noun',value);
    }
</script>