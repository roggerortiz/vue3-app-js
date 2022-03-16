<script setup>
import { defineProps, defineEmits } from 'vue'
import { MDBModal, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBBtn, MDBIcon } from 'mdb-vue-ui-kit'

defineProps({
   id: {
      type: String,
      required: true
   },
   show: {
      type: Boolean,
      required: true,
   },
   title: {
      type: String,
      required: false,
   },
   buttons: {
      type: Boolean,
      required: false,
   }
})

const emits = defineEmits(['close', 'save'])

const handleClose = () => emits('close')

const handleSave = () => emits('save')
</script>

<template>
   <MDBModal
      :id="id"
      tabindex="-1"
      labelledby="exampleModalCenterTitle"
      v-model="show"
      centered
      size="sm"
      :keyboard="false"
      :staticBackdrop="true"
   >
      <MDBModalHeader :close="false">
         <MDBModalTitle :id="`${id}-title`" class="lh-sm">{{ title }}</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
         <slot></slot>
      </MDBModalBody>
      <MDBModalFooter>
         <template v-if="buttons">
            <slot name="buttons"></slot>
         </template>
         <template v-else>
            <MDBBtn color="danger" size="sm" @click="handleClose()">
               <MDBIcon icon="times" class="me-2"></MDBIcon>Close
            </MDBBtn>
            <MDBBtn color="primary" size="sm" @click="handleSave()">
               <MDBIcon icon="save" class="me-2"></MDBIcon>Save
            </MDBBtn>
         </template>
      </MDBModalFooter>
   </MDBModal>
</template>