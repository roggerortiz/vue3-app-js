<script setup>
import { onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user"
import Card from "@/components/shared/Card.vue"
import UserTable from "@/components/views/users/UserTable.vue"

const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
   userStore.fetchUsers()
})

const handleCreate = () => {
   router.push({ name: 'userForm' })
}
</script>

<template>
   <Card header>
      <template #header>
         <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
               <h5 class="card-title m-0">Users</h5>
               <button class="btn btn-primary py-0" @click="handleCreate">Create</button>
            </div>
         </div>
      </template>
      <UserTable />
   </Card>
</template>