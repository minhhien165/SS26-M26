<template>
  <div>
    <h1>Header</h1>
    <p>giá trị count lấy trực tiếp {{ store.state.count }}</p>
    <p>giá trị count lấy qua getter {{ store.getters.getCount }}</p>
    <button @click="handleIncrease">increase</button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();

const handleIncrease = () => {
  store.commit("increasement", { amount: 5 });
};

console.log(store.state.count);
</script>
<style></style>
