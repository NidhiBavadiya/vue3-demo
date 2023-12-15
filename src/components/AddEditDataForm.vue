<script setup lang="ts">
    import { emailValidator, requiredValidator } from '@validators'
    import { defineProps, defineEmits } from 'vue'

export interface Props {
  isDrawerOpen?: Boolean
}

const props = withDefaults(defineProps<Props>(), {
  isDrawerOpen: false,
})

const emit = defineEmits(['closeDrawer','addData'])

const firstName =ref<string>('')
const lastName =ref<string>('')
const email = ref<string>('')

// add data in table 
function addData(){
 const input ={
  id: Math.floor(Math.random() * 100),
  first_name:firstName.value,
  last_name:lastName.value,
  email:email.value
 }
 emit('addData', input)
 emit('closeDrawer', false)

}

</script>
<template>
    <VNavigationDrawer
      temporary
      :width="400"
      location="end"
      class="scrollable-content"
      v-model="props.isDrawerOpen"
      
    >
      <!-- 👉 Title -->
      <AppDrawerHeaderSection
        title="Add User"
        @cancel="closeNavigationDrawer"
      />
  
      <PerfectScrollbar :options="{ wheelPropagation: false }">
        <VCard flat>
          <VCardText>
            <!-- 👉 Form -->
            <VForm
              ref="refForm"
              v-model="isFormValid"
              @submit.prevent="onSubmit"
            >
              <VRow>
                <!-- 👉 First name -->
                <VCol cols="12">
                  <AppTextField
                    v-model="firstName"
                    :rules="[requiredValidator]"
                    label="First Name"
                  />
                </VCol>

                 <!-- 👉 last name -->
                 <VCol cols="12">
                  <AppTextField
                    v-model="lastName"
                    :rules="[requiredValidator]"
                    label="Last Name"
                  />
                </VCol>
  
                <!-- 👉 Email -->
                <VCol cols="12">
                  <AppTextField
                    v-model="email"
                    :rules="[requiredValidator, emailValidator]"
                    label="Email"
                  />
                </VCol>

                <!-- 👉 Submit and Cancel -->
                <VCol cols="12">
                  <VBtn
                    type="submit"
                    class="me-3"
                    @click="addData"
                  >
                    Submit
                  </VBtn>
                  <VBtn
                    type="reset"
                    variant="tonal"
                    color="secondary"
                    @click="emit('closeDrawer', false)"
                  >
                    Cancel
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </PerfectScrollbar>
    </VNavigationDrawer>
  </template>