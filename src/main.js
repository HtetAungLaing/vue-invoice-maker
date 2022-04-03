import { createApp } from 'vue';
import App from './App.vue';
import "../src/assets/style.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "bootstrap";
import "animate.css";

window.bootstrap = require("../node_modules/bootstrap/dist/js/bootstrap.bundle.min");
createApp(App).mount('#app')

