<template>
  <div>
    <p>[{{ store.state.numberRandom }}]</p>
    <button @click="handleRandom">Random number</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const handleRandom = () => {
  store.commit("randomNumber", { amount: Math.floor(Math.random() * 100) });
};
</script>
<style></style>
