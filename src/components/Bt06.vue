<template>
  <div>
    <h3>{{ store.state.company }}</h3>
    <button @click="handleChange">change state</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const handleChange = () => {
  store.commit("changeCompany", { amount: "RikkeiSoft" });
};
</script>
<style></style>
