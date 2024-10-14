<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>địa chỉ</th>
          <th>chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.birth }}</td>
          <td>{{ user.address }}</td>
          <td><button>Sửa</button><button>Xóa</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const users = ref([]);
const getUser = () => {
  users.value = store.getters.getUsers;
};

getUser();
</script>
<style></style>
