<script setup>
import { useUserStore } from "@/stores/user"
import Modal from '@/components/shared/Modal.vue'

const userStore = useUserStore()

const handleInput = (event) => {
   const { name, value } = event.target
   userStore.inputUser({ name, value })
}

const handleSave = () => {
   userStore.saveUser()
   userStore.toggleForm()
}
</script>

<template>
   <Modal
      id="user-form"
      :show="userStore.showForm"
      :title="userStore.formTitle"
      @close="userStore.toggleForm()"
      @save="handleSave()"
   >
      <form>
         <div class="form-group mb-3">
            <label for="userName">Name</label>
            <input
               type="text"
               name="name"
               id="userName"
               class="form-control"
               placeholder="Enter name"
               :value="userStore.user.name"
               @input="handleInput"
            />
         </div>
         <div class="form-group mb-3">
            <label for="userUsername">Username</label>
            <input
               type="text"
               name="username"
               id="userUsername"
               class="form-control"
               placeholder="Enter username"
               :value="userStore.user.username"
               @input="handleInput"
            />
         </div>
         <div class="form-group">
            <label for="userEmail">Email</label>
            <input
               type="email"
               name="email"
               id="userEmail"
               class="form-control"
               placeholder="Enter email"
               :value="userStore.user.email"
               @input="handleInput"
            />
         </div>
      </form>
   </Modal>
</template>