/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import { getLocale } from "./i18n/locale";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareFacebook, faSquareTwitter, faDiscord, faTwitch, faSquareYoutube, faShopify } from '@fortawesome/free-brands-svg-icons';
library.add(faSquareFacebook, faSquareTwitter, faDiscord, faTwitch, faSquareYoutube, faShopify);


import VueI18n from 'vue-i18n';

import {messages as enMessages} from "./i18n/en";
import {messages as frMessages} from "./i18n/fr";
Vue.use(VueI18n);

const messages = {
  en: enMessages,
  fr: frMessages
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: getLocale(), // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
})

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
