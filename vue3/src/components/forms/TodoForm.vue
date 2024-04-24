<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
import BaseInput from "@/components/common/BaseInput.vue";
import BaseSelect from "@/components/common/BaseSelect.vue";

import { PRIORITIES } from "@/constants/constant";

const emit = defineEmits(["handleSubmitForm", "handleClearForm"]);

defineProps({
  formValues: {
    type: Object,
    default: () => {},
  },
  isEditing: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <form
    @submit.prevent="emit('handleSubmitForm')"
    class="w-full flex items-center gap-1"
  >
    <div class="w-full flex items-center gap-1">
      <BaseInput
        name="task"
        v-model="formValues.taskValue"
        placeholder="Please enter task"
        classes="flex-1"
      />
      <BaseSelect
        name="priority"
        v-model="formValues.priorityValue"
        :options="PRIORITIES"
      />
    </div>
    <BaseButton v-if="isEditing" @click="emit('handleClearForm')"
      >Huỷ</BaseButton
    >
    <BaseButton type="submit">{{ isEditing ? "Update" : "Add" }}</BaseButton>
  </form>
</template>
