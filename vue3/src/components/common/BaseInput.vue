<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
    validator: (value) =>
      ["text", "email", "password", "checkbox", "radio"].includes(value),
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
  <input
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :value="modelValue"
    @input="
      $emit(
        'update:modelValue',
        type === checkbox ? $event.target.checked : $event.target.value
      )
    "
    :class="[
      'outline-none text-sm border-2 focus:border-blue-600 py-2 px-4 transition-all rounded-md',
      classes,
    ]"
  />
</template>
