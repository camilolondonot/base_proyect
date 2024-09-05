<template>
  <pageVue>
    <h2>Home</h2>
    <ul class="list-group">
      <li class="list-group-item active" aria-current="true">An active item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
      <li class="list-group-item">A fourth item</li>
      <li class="list-group-item">And a fifth one</li>
    </ul>
    <div class="d-flex gap-3">
      <NuxtLink to="/" class="btn-primary">
        Index
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