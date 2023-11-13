<template>
    <div class="container">
        <div>
            {{ dropdownName }}
        </div>
        <select v-model="selectedValue" class="selected-text">
            <option value="" disabled>Select {{ dropdownName }}</option>
            <option v-for="(value, index) in words" :key="index" :value="value" class="options">
                {{ value }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    dropdownName: String,
    words: Array,
    updateValueFunc: {
        type:Function,
        required: true
    }
});

const selectedValue = ref('');

watch(selectedValue, (newValue) => {
    updateValueClicked(newValue);
});

function updateValueClicked(value: string) {
    props.updateValueFunc(value);
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        font-size: 1.5em;
    }
    .selected-text {
        width: auto;
        height: auto;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 1em;
        padding: 5px;
        margin: 5px;
        outline: none;
    }
    .options {
        background-color: #fff;
        color: #000;
        line-height: 30px;
    }  

</style>