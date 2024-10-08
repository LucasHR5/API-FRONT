<template>

</template>

<script setup lang="ts">

import { ref } from 'vue';
import http from "../services/users";
import { useRouter } from 'vue-router';

const router = useRouter()
const email = ref()
const password = ref()
const token = ref()

const login = async () => {
  const data = {
    email: email.value,
    password: password.value
  }

  http.login(data).then((res: any)=>{
    console.log(res);
    sessionStorage.setItem('token', res.data.acessToken)
    
    if (res.status === 201){
      router.push({path: '/user'})
    }

    token.value = sessionStorage.getItem('token')
  }) 
}

</script>

<style scoped>

</style>