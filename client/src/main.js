import Vue from 'vue'
import Buefy from 'buefy'
import { reduxStorePlugin } from 'redux-vue';

// Data Layer
import store from './data/store';

// Config
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.use(Buefy)
Vue.use(reduxStorePlugin);

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
