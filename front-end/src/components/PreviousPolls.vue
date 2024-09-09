<script setup>
import PreviousPollItem from './PreviousPollItem.vue'
import axios from 'axios';
</script>

<script>
export default {
        data(){
                return {
                        polls: [],
                }
        },
        async created(){
                const response = await axios.get('http://localhost:8000/api/polls');
                const polls = response.data;
                this.polls = polls;
        }
}
</script>

<template>
        <h1 class="pollTitle">Select Poll</h1>
        <PreviousPollItem v-for="poll in polls":key="poll.id" :itemName="poll.event" :pollId="poll.id"/>
</template>