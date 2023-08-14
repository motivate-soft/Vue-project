/*=========================================================================================
  File Name: i18n.js
  Description: i18n configuration file. Imports i18n data.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Motivate-Soft
  Author URL: http://www.themeforest.net/user/Motivate-Soft
==========================================================================================*/

import Vue from "vue";
import VueI18n from "vue-i18n";
import i18nData from "./i18nData";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en", // set default locale
  messages: i18nData,
});
