import { defineStore } from 'pinia'
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '@/services/user.service'

export const useUserStore = defineStore({
   id: 'user',
   state: () => ({
      isFetched: false,
      showForm: false,
      users: [],
      user: {}
   }),
   getters: {
      formTitle () {
         return this.user.id ? 'Edit User' : 'Create User'
      }
   },
   actions: {
      async fetchUsers () {
         const data = await getUsers()
         this.users = data.map(item => ({ ...item, id: item._id }))
      },
      async fetchUserById (id) {
         const data = await getUserById(id)
         this.user = { ...data, id: data._id }
      },
      toggleForm () {
         this.showForm = !this.showForm
      },
      setUser (user) {
         this.user = user
      },
      inputUser ({ name, value }) {
         this.user = { ...this.user, [name]: value }
      },
      async saveUser () {
         if (!this.user.id)
            await createUser(this.user)
         else
            await updateUser(this.user)
         this.user = {}
      },
      async deleteUser (id) {
         await deleteUser(id)
      }
   }
})