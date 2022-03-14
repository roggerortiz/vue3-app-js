<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import Card from "@/components/shared/Card.vue";
import UserForm from "@/components/views/users/UserForm.vue";

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()

onMounted(() => {
   if (!route.params.id)
      userStore.setUser({})
   else
      userStore.fetchUserById(route.params.id)
})

const handleCancel = () => {
   router.replace({ name: 'users' })
}

const handleSave = () => {
   userStore.saveUser()
   router.replace({ name: 'users' })
}
</script>

<template>
   <div class="row justify-content-center">
      <div class="col-4">
         <Card :title="userStore.formTitle" footer>
            <UserForm />
            <template #footer>
               <button class="btn btn-secondary py-0 me-2" @click="handleCancel">Cancel</button>
               <button class="btn btn-primary py-0" @click="handleSave">Save</button>
            </template>
         </Card>
      </div>
   </div>
</template>