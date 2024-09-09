<script setup>
import PollItemResult from './PollItemResult.vue'
import axios from 'axios';
</script>

<script>
export default {
    data(){
        return {
            poll: Object,
            percentage: Number
        }
    },
    async created(){
        const response = await axios.get('http://localhost:8000/api/activePollResults');
        this.poll = response.data;
    }
}
</script>

<template>
    <h1 class="pollTitle">{{  poll.event }}</h1>
    <h3 class="pollDescription">Thank you for your Response!</h3>
    <PollItemResult v-for="pollItem in poll.pollItems":key="pollItem.id" :itemName="pollItem.name" :percentage="pollItem.percentage"/>
</template>
