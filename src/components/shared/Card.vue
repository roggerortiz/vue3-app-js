<script setup>
import { defineProps } from 'vue'
import { MDBCard, MDBCardHeader, MDBCardTitle, MDBCardBody, MDBCardFooter } from 'mdb-vue-ui-kit'

defineProps({
   title: {
      type: String,
      required: false
   },
   header: {
      type: Boolean,
      required: false,
   },
   footer: {
      type: Boolean,
      required: false,
   }
})
</script>

<template>
   <MDBCard>
      <MDBCardHeader bg="dark" class="text-white">
         <template v-if="header">
            <slot name="header"></slot>
         </template>
         <template v-else>
            <MDBCardTitle class="m-0">{{ title }}</MDBCardTitle>
         </template>
      </MDBCardHeader>
      <MDBCardBody>
         <slot></slot>
      </MDBCardBody>
      <MDBCardFooter class="text-end" v-if="footer">
         <slot name="footer"></slot>
      </MDBCardFooter>
   </MDBCard>
</template>