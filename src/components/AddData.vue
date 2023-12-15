<script setup lang="ts">
    import { emailValidator, requiredValidator } from '@validators'
    import { defineProps, defineEmits } from 'vue'

    export interface props{
        isSidebarOpen?: boolean
    }
    const props = withDefaults(defineProps<props>(),{
        isSidebarOpen:false,
    })

    const emit = defineEmits(['closeDrawer','addDataValues'])

    const userId =ref<number>()
    const title =ref<string>('')
    const dataVal =ref<string>('')

    function addDataValues(){
        const newValues ={
            id:Math.floor(Math.random() * 10),
            userid : userId.value,
            title : title.value,
            body : dataVal.value,
        }
        console.log("newValues" ,newValues)
       emit('addDataValues',newValues)
       emit('closeDrawer',false)
    }

</script>
<template>
    <VNavigationDrawer
      temporary
      :width="400"
      location="end"
      class="scrollable-content"
      v-model="props.isSidebarOpen"
      
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
                <!-- 👉 User Id -->
                <VCol cols="12">
                  <AppTextField
                    v-model="userId"
                    :rules="[requiredValidator]"
                    label="User Id"
                  />
                </VCol>

                 <!-- 👉 Title -->
                 <VCol cols="12">
                  <AppTextField
                    v-model="title"
                    :rules="[requiredValidator]"
                    label="Title"
                  />
                </VCol>
  
                <!-- 👉 Body -->
                <VCol cols="12">
                  <AppTextarea  
                    v-model="dataVal"
                    label="Body" />
                </VCol>

                <!-- 👉 Submit and Cancel -->
                <VCol cols="12">
                  <VBtn
                    type="submit"
                    class="me-3"
                    @click="addDataValues"
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