<template>
  <div class="login-container">
    <h2>Đăng nhập</h2>
    <form @submit.prevent="login">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

const email = ref("");
const password = ref("");

onMounted(() => {
  email.value = route.query.email || "";
  password.value = route.query.password || "";
});

const login = () => {
  const user = { email: email.value, password: password.value };
  store.dispatch("loginUser", user);
  router.push({ name: "UserProfile" });
};
</script>

<style scoped>
</style>
