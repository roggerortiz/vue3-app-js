import { defineStore } from 'pinia'

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
         if (this.isFetched) return
         const url = 'https://jsonplaceholder.typicode.com/users'
         const response = await fetch(url)
         const data = await response.json()
         this.users = data
         this.isFetched = true
      },
      async fetchUserById (id) {
         const url = `https://jsonplaceholder.typicode.com/users/${id}`
         const response = await fetch(url)
         const data = await response.json()
         this.user = data
      },
      toggleForm() {
         this.showForm = !this.showForm
      },
      setUser (user) {
         this.user = user
      },
      inputUser ({ name, value }) {
         this.user = { ...this.user, [name]: value }
      },
      saveUser () {
         this.users = !this.user.id ? [...this.users, this.user] :
            this.users.map(user => (user.id === this.user.id ? this.user : user))
         this.user = {}
      },
      removeUser (id) {
         this.users = this.users.filter((user) => user.id !== id)
      }
   }
})