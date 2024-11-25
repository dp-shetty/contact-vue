<template>
  <div class="main-card">
    <div class="users">
      <h2>Registered Users</h2>
      <div v-if="users.length > 0" class="user-cards">
        <div v-for="(user, index) in users" :key="user.email" class="user-card">
          <h3>
            <router-link :to="`/users/${index}`">
              {{ user.firstName }} {{ user.lastName }}
            </router-link>
          </h3>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Role:</strong> {{ user.role }}</p>
          <p><strong>Gender:</strong> {{ user.gender }}</p>
        </div>
      </div>
      <p v-else class="no-users">No users registered yet.</p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Users",
  data() {
    return {
      users: JSON.parse(localStorage.getItem("users")) || [],
    };
  },
};
</script>

          
<style scoped>
.main-card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #c33764, #1d2671);
  font-family: Arial, sans-serif;
  color: #fff;
  padding: 20px;
}

.users {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.users h2 {
  margin-bottom: 20px;
}

.user-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.user-card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px;
  width: 250px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: left;
}

.user-card h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.user-card p {
  margin: 5px 0;
  font-size: 14px;
}

.no-users {
  margin-top: 20px;
  font-size: 18px;
  color: #f8d7da;
}
</style>
  