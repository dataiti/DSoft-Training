<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
import BaseTypography from "@/components/common/BaseTypography.vue";

const emit = defineEmits([
  "handleToggleCompleteTask",
  "handleSelectTask",
  "handleDeleteTask",
]);

defineProps({
  tasks: {
    type: Array,
    default: () => {},
  },
});
</script>

<template>
  <ul class="w-full flex flex-col">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="flex items-center justify-between gap-2 transition-all cursor-pointer rounded-md"
    >
      <div
        class="flex-1 flex items-center gap-3 p-2 hover:bg-slate-300 rounded-md"
        @click="emit('handleToggleCompleteTask', task.id)"
      >
        <div
          class="min-w-16 flex justify-center text-xs text-blue-500 border border-blue-500 rounded-sm py-[2px] bg-blue-100"
        >
          {{ task.priority }}
        </div>
        <BaseTypography :class="task.isCompleted && 'line-through'">
          {{ task.taskName }}</BaseTypography
        >
      </div>
      <div class="flex items-center gap-1">
        <BaseButton
          classes="text-xs bg-red-500"
          @click="emit('handleDeleteTask', task.id)"
          >Xoá</BaseButton
        >
        <BaseButton
          classes="text-xs bg-red-500"
          @click="emit('handleSelectTask', task.id)"
          >Sửa</BaseButton
        >
      </div>
    </li>
  </ul>
</template>
