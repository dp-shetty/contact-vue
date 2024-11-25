<template>
  <div>
    <h2>THIS IS A WELCOME PAGE</h2>
    <div>
      <h3>Continue with the details, Click below</h3>
      <p>
        Already a USER??
        <button>Login</button>
      </p>
      <p>
        New User??
        <button @click="handleSignup()">Signup</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
    
  data() {
    return {}
  },
  methods: {
    handleSignup(){
        console.log("hii");
        this.$router.push("/register")
    }
  },
  computed: {},
};
</script>

<style>
</style>