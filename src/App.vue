<script setup>
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
import Users from "./components/Users.vue";
import Welcome from "./components/Welcome.vue";
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    "welcome-page": Welcome,
    "signup-page": Signup,
    "login-page": Login,
    "users-page": Users,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>