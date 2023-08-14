/*=========================================================================================
  File Name: moduleAuth.js
  Description: Auth Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Motivate-Soft
  Author URL: http://www.themeforest.net/user/Motivate-Soft
==========================================================================================*/

import state from "./moduleAuthState.js";
import mutations from "./moduleAuthMutations.js";
import actions from "./moduleAuthActions.js";
import getters from "./moduleAuthGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
};
