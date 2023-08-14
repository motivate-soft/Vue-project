/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Motivate-Soft
  Author URL: http://www.themeforest.net/user/Motivate-Soft
==========================================================================================*/

import axios from "../../http/axios/index.js";

export default {
  SET_BEARER(state, accessToken) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
  },
};
