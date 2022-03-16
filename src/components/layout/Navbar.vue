<script setup>
import { RouterLink } from "vue-router";
import { MDBContainer, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem } from 'mdb-vue-ui-kit'
import NavbarLink from "../shared/NavbarLink.vue";
</script>

<template>
   <MDBNavbar dark bg="dark" expand="lg">
      <MDBContainer>
         <RouterLink :to="{ name: 'home' }" class="navbar-brand">Vue 3</RouterLink>
         <MDBNavbarToggler target="navbarNav"></MDBNavbarToggler>
         <MDBNavbarNav collapse="navbarNav">
            <NavbarLink route="users">Users</NavbarLink>
         </MDBNavbarNav>
      </MDBContainer>
   </MDBNavbar>
</template>