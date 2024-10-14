<template>
  <div>
    <h4>{{ store.state.language }}</h4>
    <button @click="handleChange">Đổi ngôn ngữ</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const handleChange = () => {
  store.commit("changeLanguage", "Language Togge");
};
</script>
<style></style>
