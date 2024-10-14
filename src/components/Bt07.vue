<template>
  <div :class="darkModeClass" class="p-5 rounded-md">
    <label>
      <input type="checkbox" v-model="isDarkMode" @change="toggleMode" />
      <span>{{ isDarkMode ? "Tối" : "Sáng" }}</span>
    </label>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isDarkMode = computed({
  get: () => store.getters.isDarkMode,
  set: () => store.dispatch("toggleDarkMode"),
});

const darkModeClass = computed(() =>
  isDarkMode.value ? "dark-mode" : "light-mode"
);

const toggleMode = () => {
  store.dispatch("toggleDarkMode");
  document.body.classList.toggle("dark-mode", isDarkMode.value);
};
</script>

<style scoped>
.light-mode {
  background-color: #ffffff;
  color: #000000;
}

.dark-mode {
  background-color: #121212;
  color: #f1f1f1;
}

input {
  margin-right: 8px;
}

.p-5 {
  padding: 1.25rem;
}

.rounded-md {
  border-radius: 0.375rem;
}
</style>
