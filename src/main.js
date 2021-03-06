import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "normalize.css";
import "ant-design-vue/dist/antd.css";

let app = createApp(App);
app.use(store);
app.use(router);
app.use(Antd);
app.mount("#app");
