<template>
  <pageVue>
    <h1>
      Hello Nuxt !
    </h1>
    <div class="d-flex gap-3">
      <NuxtLink to="/home" class="btn-primary">
        Home
      </NuxtLink>
      <NuxtLink to="/catalog" class="btn-primary">
        Catalogo
      </NuxtLink>
    </div>
  </pageVue>

</template>
<script setup>
import pageVue from '../src/components/page.vue';
</script>