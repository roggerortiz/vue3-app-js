<script setup>
import { MDBTable, MDBBtn, MDBIcon } from "mdb-vue-ui-kit";
import { useUserStore } from "@/stores/user"

const userStore = useUserStore()

const handleEdit = async (id) => {
   await userStore.fetchUserById(id)
   userStore.toggleForm()
}

const handleRemove = (id) => {
   userStore.removeUser(id)
}
</script>

<template>
   <MDBTable responsive striped hover border sm align="middle">
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
            <td class="td-btn">
               <MDBBtn color="warning" @click="handleEdit(user.id)">
                  <MDBIcon icon="edit" />
               </MDBBtn>
            </td>
            <td class="td-btn">
               <MDBBtn color="danger" @click="handleRemove(user.id)">
                  <MDBIcon icon="trash" />
               </MDBBtn>
            </td>
         </tr>
      </tbody>
   </MDBTable>
</template>