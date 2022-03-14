<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
   <div class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
         <RouterLink :to="{ name: 'home' }" class="navbar-brand">Vue 3</RouterLink>
         <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#vue-navbar"
            aria-controls="vue-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="vue-navbar">
            <div class="navbar-nav">
               <RouterLink :to="{ name: 'users' }" class="nav-item nav-link">Users</RouterLink>
            </div>
         </div>
      </div>
   </div>
</template>