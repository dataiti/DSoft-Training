<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
    validator: (value) => ["button", "submit", "reset"].includes(value),
  },
  classes: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  click: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="click"
    :class="[
      'bg-teal-600 text-sm active:bg-teal-700 hover:bg-teal-500 px-4 py-2 rounded-md text-white transition-all',
      classes,
    ]"
  >
    <slot />
  </button>
</template>
