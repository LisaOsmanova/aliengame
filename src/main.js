import { createApp } from "vue"; //function to create s vue instance
import App from "./App.vue"; //import component

import store from "./store/index.js";

const app = createApp(App); // Create a Vue instance and assign it to the variable 'app'

app.use(store); // connect vuex store to vue instance

app.mount("#app"); // Mount the Vue instance to the DOM element with the ID 'app'
