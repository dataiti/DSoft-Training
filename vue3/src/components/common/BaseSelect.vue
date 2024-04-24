<script setup>
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
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <select
    :id="id"
    :name="name"
    :class="[
      'cursor-pointer text-sm outline-none border-2 focus:border-blue-600 py-2 px-4 transition-all rounded-md',
      classes,
    ]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="option in options"
      :key="option.id"
      :value="option.value"
      class="text-xs"
    >
      {{ option.name }}
    </option>
  </select>
</template>
