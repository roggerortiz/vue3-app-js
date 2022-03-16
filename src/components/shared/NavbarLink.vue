<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { MDBNavbarItem } from 'mdb-vue-ui-kit'

defineProps({
   route: {
      type: String,
      required: true
   }
})
</script>

<template>
   <RouterLink :to="{ name: route }" custom v-slot="{ href, navigate, isActive }">
      <MDBNavbarItem class="nav-link" :href="href" :active="isActive" @click="navigate">
         <slot></slot>
      </MDBNavbarItem>
   </RouterLink>
</template>