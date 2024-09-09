<script setup>
defineProps({
    itemName: {
        type: String,
        required: true
    },
    pollId: {
        type: String,
        required:true
    }
})
</script>

<template>
    <div class="poll">
        <p name="choice" class="pollChoice">
            <RouterLink :to="{name: 'previousPollResults', params: {pollId: pollId}}">{{ itemName }}</RouterLink>
        </p>
    </div>
</template>

<style scoped>
    .poll{
        border: 1px solid #f8f8f8;
        border-radius: 3px;
        margin: 10px auto;
        text-align: center;
        width: 60%;
    }
</style>