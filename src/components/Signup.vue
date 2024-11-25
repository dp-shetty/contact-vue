<template>
  <div class="form-container">
    <form action="" @submit.prevent="handleSignup" class="glass-form">
      <h2>Signup Form</h2>
      <div class="form-field">
        <input
          v-model="formData.firstName"
          type="text"
          placeholder="Enter First Name"
        />
        <span v-if="errors.firstName" class="error">{{
          errors.firstName
        }}</span>
      </div>
      <div class="form-field">
        <input
          v-model="formData.lastName"
          type="text"
          placeholder="Enter Last Name"
        />
        <span v-if="errors.lastName" class="error">{{ errors.lastName }}</span>
      </div>
      <div class="form-field">
        <input
          v-model="formData.email"
          type="email"
          placeholder="Enter Email"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      <div class="form-field">
        <input
          type="password"
          v-model="formData.password"
          placeholder="Enter Your Password"
        />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>
      <div class="form-field role">
        <label>Your Role:</label>
        <div>
          <input
            id="web-dev"
            v-model="formData.role"
            type="radio"
            value="WEB-DEV"
          />
          <label for="web-dev">Web Developer</label>
        </div>
        <div>
          <input
            id="tester"
            v-model="formData.role"
            type="radio"
            value="TESTER"
          />
          <label for="tester">Tester</label>
        </div>
      </div>
      <span v-if="errors.role" class="error">{{ errors.role }}</span>

      <div class="form-field gender">
        <label>Gender:</label>
        <div>
          <input
            id="male"
            v-model="formData.gender"
            type="radio"
            value="male"
          />
          <label for="male">Male</label>
        </div>
        <div>
          <input
            id="female"
            v-model="formData.gender"
            type="radio"
            value="female"
          />
          <label for="female">Female</label>
        </div>
      </div>
      <span v-if="errors.gender" class="error">{{ errors.gender }}</span>

      <div class="form-controls">
        <button :disabled="userExists || !isValid">Submit Form!!</button>
        <button v-if="userExists" @click="redirectToLogin" type="button">
          Login
        </button>
      </div>
    </form>
  </div>
</template>
  
 <script>
export default {
  name: "Signup",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        gender: "",
      },
      errors: {},
      userExists: false,
    };
  },
  computed: {
    isValid() {
      return Object.keys(this.errors).length === 0;
    },
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.formData.firstName.trim()) {
        this.errors.firstName = "First Name is required.";
      }
      if (!this.formData.lastName.trim()) {
        this.errors.lastName = "Last Name is required.";
      }
      if (!this.formData.email.trim()) {
        this.errors.email = "Email is required.";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email.trim())
      ) {
        this.errors.email = "Invalid email format.";
      }
      if (!this.formData.password.trim()) {
        this.errors.password = "Password is required.";
      } else if (this.formData.password.length < 6) {
        this.errors.password = "Password must be at least 6 characters.";
      }
      if (!this.formData.role) {
        this.errors.role = "Please select a role.";
      }
      if (!this.formData.gender) {
        this.errors.gender = "Please select a gender.";
      }
    },
    handleSignup() {
      this.validateForm();

      if (!this.isValid) {
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];
      this.userExists = users.some(
        (user) => user.email === this.formData.email
      );

      if (this.userExists) {
        this.$toast.error("User already exists. Please login.");
      } else {
        users.push({ ...this.formData });
        localStorage.setItem("users", JSON.stringify(users));
        this.$toast.success("User Registered Successfully.");
        this.$router.push("/login");
      }
    },
    redirectToLogin() {
      this.$toast.info("Redirecting to login page...");
      this.$router.push("/login");
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
  width: 95%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  color: #000;
}

.form-field input[type="radio"] {
  width: 20px;
}

.form-field input[type="text"]:focus,
.form-field input[type="email"]:focus,
.form-field input[type="password"]:focus {
  outline: none;
}

.form-controls {
  text-align: center;
}

.role,
.gender {
  display: flex;
  gap: 2rem;
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
