<script setup>
import BaseInput from "@/components/common/BaseInput.vue";
import BaseTypography from "@/components/common/BaseTypography.vue";

defineProps({
  type: {
    type: String,
    default: "text",
    validator: (value) => ["text", "email", "password"].includes(value),
  },
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
  placeholder: {
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
  <div :class="['flex flex-col gap-1', classes]">
    <BaseTypography :for="id">{{ name }}</BaseTypography>
    <BaseInput
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
