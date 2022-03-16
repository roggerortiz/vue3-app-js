<script setup>
import { MDBContainer, MDBRow, MDBCol } from 'mdb-vue-ui-kit'
</script>

<template>
   <MDBContainer fluid class="wrapper">
      <MDBRow class="justify-content-center">
         <MDBCol col="8">
            <slot></slot>
         </MDBCol>
      </MDBRow>
   </MDBContainer>
</template>