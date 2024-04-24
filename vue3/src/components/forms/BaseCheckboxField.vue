<script setup>
import BaseInput from "@/components/common/BaseInput.vue";
import BaseTypography from "@/components/common/BaseTypography.vue";

defineProps({
  id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div :class="['flex gap-2', classes]">
    <BaseInput
      type="checkbox"
      :id="id"
      :name="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <BaseTypography :for="id">{{ name }}</BaseTypography>
  </div>
</template>
