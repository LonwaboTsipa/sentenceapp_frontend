<template>
    <div>
        <UIDropdown :words="words" :updateValueFunc="updateValueClicked" :dropdownName="name" />
    </div>
</template>

<script setup lang="ts">
    const name = 'adjective';
    const words = ['one', 'two two two two twtot wt ', 'three', 'four', 'five'];
    const updateValueClicked = (value: string) => {
        console.log('value noun',value);
    }
</script>