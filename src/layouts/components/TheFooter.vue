<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Motivate-Soft
    Author URL: http://www.themeforest.net/user/Motivate-Soft
========================================================================================== -->

<template functional>
  <footer class="the-footer flex-wrap justify-between" :class="classes">
    <p>
      <span>COPYRIGHT &copy;</span>
      <span>{{ new Date().getFullYear() }} </span>
      <a
        href="https://1.envato.market/vuexy_admin"
        target="_blank"
        rel="nofollow"
        >Motivate-Soft</a
      >
      <span class="hidden sm:inline-block">, All rights Reserved</span>
    </p>
    <span class="md:flex hidden items-center">
      <span>Hand-crafted & Made with</span>
      <feather-icon
        icon="HeartIcon"
        svgClasses="stroke-current text-danger w-6 h-6"
        class="ml-2"
      />
    </span>
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String,
    },
  },
};
</script>
