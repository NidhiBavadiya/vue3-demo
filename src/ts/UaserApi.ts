import {ref ,unref, isRef,watchEffect } from 'vue';
import axios from 'axios';
//single user data 
function getSingleUser(url:any , uid:number){
    const userdata:any = ref(null);
    const error:any = ref(null);

    const getsingledata = async() =>{
        userdata.value = null
        error.value=null

        try {
            const res = await axios(unref(url) + unref(uid));
            console.log("res",res);
            console.log("array" , res.data.data)
            userdata.value = res.data.data
        } catch(err){
            error.value = err
        }
    }
    if(isRef(url)){
        watchEffect(getsingledata)
    }else{
        getsingledata()
    }
    return {userdata , error}
}

// user list api jsonplaceholder (second page table)
function getUserList(url:any){
    const userlist:any = ref()
    const error:any = ref(null);

    const getuserdata = async() =>{
        userlist.value = []
        error.value=null

        try {
            const res = await axios(unref(url));
            console.log("res",res);
            console.log("array" , res.data)
            userlist.value = res.data
        userData = userlist.value
        } catch(err){
            error.value = err
        }
    }
    if(isRef(url)){
        watchEffect(getuserdata)
    }else{
        getuserdata()
    }
    return {userlist , error}
}

export {getUserList,getSingleUser}
