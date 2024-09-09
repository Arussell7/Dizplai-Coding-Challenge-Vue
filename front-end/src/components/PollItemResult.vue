<script setup>
defineProps({
    itemName: {
        type: String,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="pollItemResult">
        <p name="choice" class="pollChoice">{{itemName}} - {{ percentage }}%</p>
    </div>
</template>

<style>
    .pollItemResult{
        border: 1px solid #f8f8f8;
        border-radius: 3px;
        margin: 10px auto;
        text-align: center;
        width: 60%;
    }
</style>