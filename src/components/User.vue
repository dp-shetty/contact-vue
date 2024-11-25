<template>
    <div class="user-details">
      <h2>Edit User Details</h2>
      <div v-if="user">
        <div class="form-field">
          <label>First Name:</label>
          <input v-model="userData.firstName" type="text" />
        </div>
        <div class="form-field">
          <label>Last Name:</label>
          <input v-model="userData.lastName" type="text" />
        </div>
        <div class="form-field">
          <label>Role:</label>
          <select v-model="userData.role">
            <option value="WEB-DEV">Web Developer</option>
            <option value="TESTER">Tester</option>
          </select>
        </div>
        <div class="form-field">
          <label>Gender:</label>
          <select v-model="userData.gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="actions">
          <button @click="updateUser">Save</button>
          <button @click="deleteUser">Delete</button>
          <button @click="$router.push('/users')">Back</button>
        </div>
      </div>
      <p v-else>No user found.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "User",
    data() {
      return {
        user: null, 
        userData: {},
      };
    },
    created() {
      const id = this.$route.params.id;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      this.user = users[id] || null;
      if (this.user) {
        this.userData = { ...this.user };
      }
    },
    methods: {
      updateUser() {
        const id = this.$route.params.id;
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users[id] = { ...this.userData };
        localStorage.setItem("users", JSON.stringify(users));
        this.$toast.success("User updated successfully.");
      },
      deleteUser() {
        const id = this.$route.params.id;
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.splice(id, 1);
        localStorage.setItem("users", JSON.stringify(users));
        this.$toast.success("User deleted successfully.");
        this.$router.push("/users");
      },
    },
  };
  </script>
  
  <style scoped>
  .user-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #c33764, #1d2671);
    font-family: Arial, sans-serif;
    color: #fff;
    padding: 20px;
  }
  
  .form-field {
    margin-bottom: 15px;
  }
  
  input,
  select {
    padding: 8px;
    border: none;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
  }
  
  .actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: #ff7e5f;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background: #ff6a4d;
  }
  </style>
  