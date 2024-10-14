<template>
  <div class="register-container">
    <h2>Đăng ký</h2>
    <form @submit.prevent="register">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const email = ref("");
const password = ref("");

const register = () => {
  const user = { email: email.value, password: password.value };
  store.dispatch("registerUser", user);
  router.push({
    name: "Login",
    query: { email: user.email, password: user.password },
  });
};
</script>

<style scoped></style>
