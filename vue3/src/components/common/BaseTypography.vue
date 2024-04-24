<script setup>
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "p",
    validator: (value) =>
      ["h1", "h2", "h3", "h4", "p", "span", "label"].includes(value),
  },
  for: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    required: false,
  },
});

const forProp = computed(() => (props.tag === "label" ? props.for : null));
</script>

<template>
  <component
    :is="tag"
    :for="forProp"
    :class="['text-sm font-semibold text-teal-600', classes]"
  >
    <slot />
  </component>
</template>
