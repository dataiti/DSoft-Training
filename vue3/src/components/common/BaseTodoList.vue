<script setup>
import { computed, reactive, ref } from "vue";
import { toast } from "vue3-toastify";

import BaseTextField from "@/components/forms/BaseTextField.vue";
import BaseCheckboxField from "@/components/forms/BaseCheckboxField.vue";
import TodoForm from "@/components/forms/TodoForm.vue";

import BaseInput from "@/components/common/BaseInput.vue";
import BaseTypography from "@/components/common/BaseTypography.vue";
import BaseTodoListItem from "@/components/common/BaseTodoListItem.vue";

import { findIndexTask, taskExists } from "@/helpers/helper";

const searchValue = ref("");
const validMessage = ref("");
const isEditing = ref(false);
const selectedTask = ref({});
const tasks = reactive([
  {
    id: 1,
    taskName: "Learn props",
    priority: "medium",
    isCompleted: true,
  },
  {
    id: 2,
    taskName: "Learn Events",
    priority: "high",
    isCompleted: true,
  },
  {
    id: 3,
    taskName: "Learn Slots",
    priority: "high",
    isCompleted: true,
  },
  {
    id: 4,
    taskName: "Learn Vuex(vue2) Pinnia(Vue3)",
    priority: "high",
    isCompleted: false,
  },
  {
    id: 5,
    taskName: "Learn EvenBus",
    priority: "low",
    isCompleted: false,
  },
  {
    id: 6,
    taskName: "Learn Provide/Inject",
    priority: "low",
    isCompleted: false,
  },
]);

const formValues = reactive({
  taskValue: "",
  priorityValue: "high",
});

const filteredTasks = computed(() => {
  const keyword = searchValue.value.toLowerCase();

  if (!keyword) {
    return tasks;
  } else {
    return tasks.filter((task) =>
      task.taskName.toLowerCase().includes(keyword)
    );
  }
});

const handleSelectTask = (taskId) => {
  const findTask = tasks.find((task) => task.id === taskId);

  if (findTask) {
    isEditing.value = true;
    formValues.taskValue = findTask.taskName;
    formValues.priorityValue = findTask.priority;
    selectedTask.value = findTask;
  }
};

const handleClearForm = () => {
  isEditing.value = false;
  formValues.taskValue = "";
  formValues.priorityValue = "high";
  validMessage.value = "";
};

const handleAddTask = (data) => {
  if (taskExists(tasks, data.taskName)) {
    validMessage.value = "Task already exists!";
    return;
  }

  tasks.push(data);
  handleClearForm();
  toast.success("Add task successfully !");
};

const handleUpdateTask = (taskId, data) => {
  const taskIndex = findIndexTask(tasks, taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = data;
    toast.success("Update task successfully !");
  }
};

const handleDeleteTask = (taskId) => {
  const taskIndex = findIndexTask(tasks, taskId);
  if (taskIndex !== -1 && confirm("Are you sure to delete this task?")) {
    tasks.splice(taskIndex, 1);
    toast.success("Delete task successfully !");
    handleClearForm();
  }
};

const handleToggleCompleteTask = (taskId) => {
  const taskIndex = findIndexTask(tasks, taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;
  }
};

const handleSubmitForm = () => {
  if (!formValues.taskValue) {
    validMessage.value = "Task name is required !";
    return;
  }

  const data = {
    id: selectedTask.value.id ? selectedTask.value.id : tasks.length + 1,
    taskName: formValues.taskValue,
    priority: formValues.priorityValue,
    isCompleted: selectedTask.value.isCompleted
      ? selectedTask.value.isCompleted
      : false,
  };

  if (isEditing.value) {
    handleUpdateTask(selectedTask.value.id, data);
  } else {
    handleAddTask(data);
  }
};
</script>

<template>
  <div class="h-screen w-screen flex items-center justify-center">
    <div
      class="bg-slate-100 flex flex-col gap-4 items-center py-10 px-4 w-[600px] rounded-3xl shadow-md"
    >
      <BaseTypography tag="h2" classes="text-xl font-semibold"
        >Todo App</BaseTypography
      >
      <BaseTextField
        v-model.trim="searchValue"
        name="search"
        placeholder="Enter something to search"
        classes="w-full"
      />
      <div class="w-full h-[300px] overflow-y-auto">
        <BaseTodoListItem
          :tasks="filteredTasks"
          @handleToggleCompleteTask="handleToggleCompleteTask"
          @handleSelectTask="handleSelectTask"
          @handleDeleteTask="handleDeleteTask"
        />
      </div>
      <TodoForm
        :formValues="formValues"
        :isEditing="isEditing"
        @handleSubmitForm="handleSubmitForm"
        @handleClearForm="handleClearForm"
      />
      <p v-if="validMessage" class="text-xs font-semibold text-red-500">
        {{ validMessage }}
      </p>
    </div>
  </div>
</template>
