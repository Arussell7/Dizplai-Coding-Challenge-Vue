<script setup>
import PollItem from './PollItem.vue';
import axios from 'axios';
import router from '@/router';
</script>

<script>
export default {
    data(){
        return {
            poll: Object,
            date: String
        }
    },
    async created(){
        const response = await axios.get('http://localhost:8000/api/activePoll');
        this.poll = response.data;
    },
    methods: {
        async castVote(pollItem){
            await axios.post('http://localhost:8000/api/castVote', {
                pollItem: pollItem,
                timestamp: new Date().toLocaleString()
            }, this.newPage());
        },
        async newPage(){
            router.replace({ path: '/currentResults'});
        }
    }
}
</script>

<template>
    <h1 class="pollTitle">{{  poll.event }}</h1>
    <h3 class="pollDescription">{{ poll.question }}</h3>
    <PollItem @click="castVote(pollItem)" v-for="pollItem in poll.pollItems":key="pollItem.id" :itemName="pollItem.name"/>
</template>

<style>
    .pollTitle, .pollDescription{
        text-align: center;
        padding-bottom: 5px;
    }
</style>