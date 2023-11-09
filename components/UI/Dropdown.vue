<template>
    <div>
        <select v-model="selectedValue">
            <option value="" disabled>Select {{ dropdownName }}</option>
            <option v-for="(value, index) in words" :key="index" :value="value">
                {{ value }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    dropdownName: String,
    words: Array,
    updateValueFunc: Function
});

const selectedValue = ref('');

watch(selectedValue, (newValue) => {
    updateValueClicked(newValue);
});

function updateValueClicked(value: string) {
    props.updateValueFunc(value);
}
</script>