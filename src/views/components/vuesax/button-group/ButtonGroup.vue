<!-- =========================================================================================
  File Name: Button.vue
  Description: Buttons - Imports all page portions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Motivate-Soft
  Author URL: http://www.themeforest.net/user/Motivate-Soft
========================================================================================== -->

<template>
  <div id="button-demo">
    <button-group-basic></button-group-basic>
    <button-group-toolbar></button-group-toolbar>
    <button-group-size></button-group-size>
    <button-group-vertical></button-group-vertical>
  </div>
</template>

<script>
import ButtonGroupBasic from "./ButtonGroupBasic.vue";
import ButtonGroupToolbar from "./ButtonGroupToolbar.vue";
import ButtonGroupSize from "./ButtonGroupSize.vue";
import ButtonGroupVertical from "./ButtonGroupVertical.vue";

export default {
  components: {
    ButtonGroupBasic,
    ButtonGroupToolbar,
    ButtonGroupSize,
    ButtonGroupVertical,
  },
};
</script>
