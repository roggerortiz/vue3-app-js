<script setup>
import { useRouter } from 'vue-router'
import { RouterLink } from "vue-router"
import { useUserStore } from "@/stores/user"

const router = useRouter()
const userStore = useUserStore()

const handleEdit = (id) => {
   router.push({ name: 'userForm', params: { id } })
}

const handleRemove = (id) => {
   userStore.removeUser(id)
}
</script>

<template>
   <table class="table table-bordered table-stripped table-hover">
      <thead>
         <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="user in userStore.users" :key="user.id">
            <td>{{ user.name }}</td>
            <td class="text-center">{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td class="text-center">
               <button class="btn btn-warning py-0 px-2" @click="() => handleEdit(user.id)">Edit</button>
            </td>
            <td class="text-center">
               <button class="btn btn-danger py-0 px-2" @click="() => handleRemove(user.id)">Remove</button>
            </td>
         </tr>
      </tbody>
   </table>
</template>