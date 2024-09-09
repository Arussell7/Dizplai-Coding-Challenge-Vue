<script setup>
defineProps({
    itemName: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="pollItem">
        <p name="choice" class="pollChoice">{{itemName}}</p>
    </div>
</template>

<style>
    .pollItem{
        border: 1px solid #f8f8f8;
        border-radius: 3px;
        margin: 10px auto;
        text-align: center;
        width: 60%;
    }

    .pollChoice:hover{
        cursor:pointer;
    }
</style>