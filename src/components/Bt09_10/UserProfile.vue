<template>
  <div class="profile-container">
    <h2>Thông tin người dùng</h2>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const user = computed(() => store.getters.getLoggedInUser);
</script>

<style scoped></style>
