<script setup lang="ts">

import {ref} from "vue";
import axios from 'axios';
import { VDataTable } from "vuetify/labs/VDataTable";
import AddEditDataForm from "@/components/AddEditDataForm.vue";
// import {getSingleUser } from "@/ts/UaserApi";

const userList1 = ref()
const isDrawerOpen = ref<boolean>(false)

//single user
// let url = ref('https://reqres.in/api/users/')
// const uid = ref(4);
// const {userdata , error} = getSingleUser(url , uid);
// console.log("data" , userdata) 

// close side bar
function closeDrawer(val: any){
    isDrawerOpen.value = val
}

// list api function
async function getList(){
    const res = await axios.get('https://reqres.in/api/users?page=1')
    userList1.value  = res.data.data
    console.log("object",userList1.value)
}
// function for push data in array
function addData(data:any){
    console.log('data',data.email)
    userList1.value.push(data)
}

onMounted(()=>{
getList()
})
const headers = [
  { title: "",  key: "id" },
  { title: "FIRST NAME", key: "first_name" },
  { title: "LAST NAME", key: "last_name" },
  { title: "EMAIL", key: "email" },
  { title: "ACTIONS", key: "action"}
];
</script>   

<template>
    
 <div>
    <div class="flex justify-end mb-5">
        <VBtn @click="isDrawerOpen = true">Add Data</VBtn>
    </div>
    <VDataTable :headers="headers" :items="userList1" class="p-10">
        <template #item.action>
        <VIcon size="20" icon="tabler-trash" class="mr-3"></VIcon>
        <VIcon size="20" icon="tabler-edit"></VIcon>
      </template>
    </VDataTable>
    <add-edit-data-form :isDrawerOpen="isDrawerOpen" @closeDrawer="closeDrawer" @addData="addData" />
    </div>
</template>

<style>

</style>