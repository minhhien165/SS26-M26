<template>
  <div>
    Thông tin profile
    <p>{{ store.getters.getProfile }}</p>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>
<style></style>
