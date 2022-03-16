<script setup>
import { RouterView } from "vue-router";
import Layout from "@/components/layout/Layout.vue";
</script>

<template>
   <Layout>
      <RouterView />
   </Layout>
</template>

<style>
#app {
   font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>