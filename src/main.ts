import Vue from "vue";
import App from "@/App.vue";
import {castToVueI18n, createI18n} from "vue-i18n-bridge";
import VueI18n from "vue-i18n";

Vue.use(VueI18n, {bridge: true})
const i18n = setupI18n;
Vue.use(i18n);

new Vue({
    i18n,
    render: h => h(App)
}).$mount('#app');

function setupI18n() {
    return castToVueI18n(createI18n({
        locale: window.navigator.language || 'en-US',
        fallbackLocale: 'en-US',
        silentTranslationWarn: true,
        legacy: true,
        allowComposition: true,
    }, VueI18n));
}
