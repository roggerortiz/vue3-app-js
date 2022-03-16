<script setup>
import { onMounted } from 'vue'
import { MDBCardTitle, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit'
import { useUserStore } from "@/stores/user"
import Card from "@/components/shared/Card.vue"
import UserTable from "@/components/views/users/UserTable.vue"
import UserForm from '../components/views/users/UserForm.vue';

const userStore = useUserStore()

onMounted(() => {
   userStore.fetchUsers()
})

const handleCreate = () => {
   userStore.setUser({})
   userStore.toggleForm()
}
</script>

<template>
   <Card header>
      <template #header>
         <div class="d-flex justify-content-between align-items-center">
            <MDBCardTitle class="m-0">Users</MDBCardTitle>
            <MDBBtn color="primary" size="sm" @click="handleCreate()">
               <MDBIcon icon="plus-circle" class="me-2" />Create
            </MDBBtn>
         </div>
      </template>
      <UserTable />
      <UserForm />
   </Card>
</template>