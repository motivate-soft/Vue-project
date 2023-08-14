<!-- =========================================================================================
    File Name: ButtonLink.vue
    Description: Button with link
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Motivate-Soft
    Author URL: http://www.themeforest.net/user/Motivate-Soft
========================================================================================== -->

<template>
  <vx-card title="Link" code-toggler>
    <p>You can specify for <code>window.location.href</code></p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <span>You can use the <code>target</code> property to window.open()</span>
    </vs-alert>

    <div class="demo-alignment">
      <vs-button color="primary" type="filled" href="https://Motivate-Soft.com/"
        >String literal</vs-button
      >
      <vs-button
        color="primary"
        type="filled"
        :href="{ url: 'https://Motivate-Soft.com/' }"
        >Object Path</vs-button
      >
      <vs-button
        color="primary"
        type="filled"
        target
        href="https://Motivate-Soft.com/"
        >Open New Tab</vs-button
      >
    </div>

    <template slot="codeContainer">
      &lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot;
      href=&quot;https://Motivate-Soft.com/&quot;&gt;String
      literal&lt;/vs-button&gt; &lt;vs-button color=&quot;primary&quot;
      type=&quot;filled&quot; :href=&quot;{url:
      'https://Motivate-Soft.com/'}&quot;&gt;Object Path&lt;/vs-button&gt;
      &lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; target
      href=&quot;https://Motivate-Soft.com/&quot;&gt;Open New
      Tab&lt;/vs-button&gt;
    </template>
  </vx-card>
</template>
