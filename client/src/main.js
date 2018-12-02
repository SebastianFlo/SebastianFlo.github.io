import Vue from 'vue'
import Buefy from 'buefy'
import Chat from 'vue-beautiful-chat'
import { reduxStorePlugin } from 'redux-vue';

// Data Layer
import store from './data/store';

// Config
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

// Buefy
Vue.use(Buefy)

// Redux
Vue.use(reduxStorePlugin);

// Chat
Vue.use(Chat)

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
