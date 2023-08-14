/*=========================================================================================
  File Name: moduleEmail.js
  Description: Email Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Motivate-Soft
  Author URL: http://www.themeforest.net/user/Motivate-Soft
==========================================================================================*/

import state from "./moduleEmailState.js";
import mutations from "./moduleEmailMutations.js";
import actions from "./moduleEmailActions.js";
import getters from "./moduleEmailGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
};
