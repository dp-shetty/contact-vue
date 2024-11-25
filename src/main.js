import './style.css'
import Vue from "vue";
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './Routes/routes';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(VueRouter)

Vue.use(Toast, {
    // General Options
    position: "top-right",         // Position of the toast (default: 'top-right')
    timeout: 5000,                 // Duration before the toast disappears (in ms, default: 5000)
    closeOnClick: true,            // Close the toast when clicked (default: true)
    pauseOnFocusLoss: true,        // Pause the timer when the browser loses focus (default: true)
    pauseOnHover: true,            // Pause the timer when hovering over a toast (default: true)
    draggable: true,               // Allow toasts to be dragged (default: true)
    draggablePercent: 0.6,         // Portion of the width required for drag dismissal (default: 0.6)
    showCloseButtonOnHover: false, // Show close button only when hovering (default: false)
    hideProgressBar: true,        // Hide the progress bar (default: false)
    closeButton: "button",         // Custom close button or 'false' to hide it (default: 'button')
    icon: true,                    // Show icons for toasts (default: true)
    rtl: false,                    // Support for right-to-left layouts (default: false)
  
    // Custom styles for toasts
    // style: {
    //   width: "300px",               // Set width of the toast
    //   height: "80px",               // Set height of the toast
    //   borderRadius: "10px",         // Rounded corners
    //   fontSize: "16px",             // Adjust font size
    //   padding: "15px",              // Add padding inside the toast
    //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional box shadow for a nicer look
    // }
  });

const router = new VueRouter({
    routes: routes
})

new Vue({
    render: (h) => h(App),
    router:router,
  }).$mount("#app");
