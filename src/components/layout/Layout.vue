<script setup>
import Navbar from './Navbar.vue'
import Content from './Content.vue'
</script>

<template>
   <Navbar />
   <Content>
      <slot></slot>
   </Content>
</template>