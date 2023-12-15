
<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import data from "@/ts/DataValue";
import { useUserListStore } from "@/ts/DataValue";
import AddData from "@/components/AddData.vue";
import {getUserList} from "@/ts/UaserApi";

const test = ref<any>()
let url = ref('http://localhost:3000/userlist')
const {userlist , error} = getUserList(url);
console.log(userlist,'userlist')
test.value = userlist
console.log(test.value.value,'test.value')
// console.log("data" , userlist)   


const headers = [
  { title: "ID",  key: "id" },
  { title: "TITLE", key: "title" },
  { title: "DATA", key: "body" },
  { title: "ACTIONS", key: "actions" }
];

const isSidebarOpen = ref<boolean>(false);
console.log("object",isSidebarOpen.value)
const userListStore = useUserListStore();

function closeDrawer(val:any){
  isSidebarOpen.value = val
}

function addDataValues(newData:any){
  userlist.value.push(newData)
}

//delete user
const deleteUser = (id: number) => {
  console.log("object delete")
  userlist.deleteUser(id);
  // userListStore.deleteUser(id);
  console.log("delete" , id);
};

</script>
<template>
  <div>
    <div class="flex justify-end mb-5">
    <VBtn @click="isSidebarOpen = true">Add Data</VBtn>
    </div>
    {{ userlist }}
    <!-- <VDataTable :headers="headers" :items="test" :items-per-page="10" class="p-10">
      <template #item.actions="{item}">
        <VIcon @click="deleteUser(item.id)" size="20" icon="tabler-trash" class="mr-3"></VIcon>
        <VIcon size="20" icon="tabler-edit"></VIcon>
      </template>
    </VDataTable> -->
    <AddData :isSidebarOpen="isSidebarOpen"  @closeDrawer="closeDrawer" @addDataValues="addDataValues"/>
  </div>
</template>
