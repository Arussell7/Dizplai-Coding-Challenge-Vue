<script setup>
import PreviousPollResultTable from './PreviousPollResultTable.vue'
import axios from 'axios';
</script>

<script>
export default {
    data() {
        return {
            poll: Object,
            headers:[
                { id:'2', name: 'Choice'},
                { id:'3', name: 'Timestamp'}
            ],
            pollHeaders:[
                { id: '1', name: 'Choice ID'},
                { id: '2', name: 'Name'}
            ]
        }
    },
    async created(){
        const response = await axios.get(`http://localhost:8000/api/poll/${this.$route.params.pollId}`);
        this.poll = response.data;
    }
}
</script>

<template>
    <h1>{{ poll.event }}</h1>
    <PreviousPollResultTable 
    :headers="headers" 
    :tableData="poll.results"
    :poll="poll"
    :pollHeaders="pollHeaders"
    :pollDataList="poll.pollItems"/>
</template>

<style scoped>
    h1{
        text-align: center;
        padding-bottom: 20px;
    }
</style>