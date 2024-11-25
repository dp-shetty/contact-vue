import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import User from "../components/User.vue";
import Users from "../components/Users.vue";
import Welcome from "../components/Welcome.vue";


export default [
  { path: "/", component: Welcome },
  { path: "/register", component: Signup },
  { path: "/login", component: Login },
  { path: "/users", component: Users },
  { path: "/users/:id", component: User },
];