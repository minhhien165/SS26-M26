<template>
  <div>
    <p>Count: {{ store.state.count }}</p>
    <button @click="handleIncrease">Increase</button>
    <button @click="handleDecrease">Decrease</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const handleIncrease = () => {
  store.commit("increasement");
};

const handleDecrease = () => {
  store.commit("decreasement");
};
</script>
<style></style>
