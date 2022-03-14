<script setup>
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
   <div class="card">
      <template v-if="header">
         <slot name="header"></slot>
      </template>
      <template v-else>
         <h5 class="card-header">{{ title }}</h5>
      </template>
      <div class="card-body">
         <slot></slot>
      </div>
      <div class="card-footer text-end" v-if="footer">
         <slot name="footer"></slot>
      </div>
   </div>
</template>