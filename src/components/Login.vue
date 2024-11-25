<template>
  <div class="form-container">
    <form action="" @submit.prevent="handleLogin" class="glass-form">
      <h2>Login</h2>
      <div class="form-field">
        <input
          v-model="loginData.email"
          type="email"
          placeholder="Enter Email"
          @input="validateForm"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      <div class="form-field">
        <input
          type="password"
          v-model="loginData.password"
          placeholder="Enter Password"
          @input="validateForm"
        />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>
      <div class="form-controls">
        <button :disabled="!isValid">Login</button>
      </div>
    </form>
  </div>
</template>
  
  <script>
export default {
  name: "Login",
  data() {
    return {
      loginData: {
        email: "",
        password: "",
      },
      errors: {}, // To store validation errors
    };
  },
  computed: {
    isValid() {
      // Check if all inputs are valid
      return (
        this.loginData.email.trim() !== "" &&
        this.loginData.password.trim() !== ""
      );
    },
  },
  methods: {
    validateForm() {
      // Clear errors and dynamically validate each field
      this.errors = {};
      if (!this.loginData.email.trim()) {
        this.errors.email = "Email is required.";
      }
      if (!this.loginData.password.trim()) {
        this.errors.password = "Password is required.";
      }
    },
    handleLogin() {
      this.validateForm();

      if (Object.keys(this.errors).length > 0) {
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) =>
          user.email === this.loginData.email &&
          user.password === this.loginData.password
      );

      if (user) {
        this.$toast.success("Login successful.");
        this.$router.push("/users")
      } else {
        this.$toast.error("Invalid email or password.");
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #c33764, #1d2671);
  font-family: Arial, sans-serif;
}

.glass-form {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  width: 400px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.glass-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-field {
  margin-bottom: 15px;
}

.form-field input[type="text"],
.form-field input[type="email"],
.form-field input[type="password"] {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  color: #000;
}

.form-field input[type="text"]:focus,
.form-field input[type="email"]:focus,
.form-field input[type="password"]:focus {
  outline: none;
}

.form-controls {
  text-align: center;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #ff7e5f;
  color: white;
  cursor: pointer;
}

button:disabled {
  background: #999;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 12px;
}
</style>
