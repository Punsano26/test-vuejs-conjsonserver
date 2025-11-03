import { createRouter, createWebHistory, createMemoryHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import TheWelcome from "../components/TheWelcome.vue";
const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/page2",
            name: "TheWelcome",
            component: TheWelcome
        }
    ]
})
export default routes;