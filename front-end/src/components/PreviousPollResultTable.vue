<script setup>
defineProps({
    tableData:{
        type: Array,
        required: true
    },
    headers:{
        type: Array,
        required: true
    },
    poll:{
        type: Object,
        required: true
    },
    pollHeaders:{
        type:Array,
        required:true
    },
    pollDataList:{
        type:Array,
        required:true
    }
})
</script>

<template>
    <div class="table-wrapper">
        <div class="key-table-div">
            <table class="table">
                <thead class="table-head">
                    <tr>
                        <th v-for="header in headers":key="header.id">{{ header.name }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tableData":key="item.id">
                        <td>
                            {{ item.choice }}
                        </td>
                        <td>
                            {{ item.timestamp }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="table-div">
            <table>
                <thead class="table-head">
                        <tr>
                            <th v-for="pollHeader in pollHeaders":key="pollHeader.id">{{ pollHeader.name }}</th>
                        </tr>
                </thead>
                <tbody>
                    <tr v-for="pollData in pollDataList":key="pollData.id">
                        <td>
                            {{ pollData.id }}
                        </td>
                        <td>
                            {{ pollData.name }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
    th, td{
        border: 1px solid #f8f8f8;
        padding-left: 5px;
        padding-right: 5px;
    }
    
    .key-table-div{
        float:left;
    }

    .table-div{
        float:right;
    }
</style>