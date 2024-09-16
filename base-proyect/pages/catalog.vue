<template>
  <page>
    <h2>Catalogo</h2>
    <!-- Button trigger modal -->
    
    <ExampleModalToggle />
    <ExampleModalToggle2 />
    <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>
  
    <Collapse />
    <div class="d-flex gap-3">
      <NuxtLink to="/" class="btn-primary">
        Index
      </NuxtLink>
      <NuxtLink to="/catalog" class="btn-primary">
        Catalogo
      </NuxtLink>
    </div>
  </page>
</template>
<script setup>
import page from '../src/components/page.vue';
import ExampleModalToggle from '../src/components/exampleModalToggle.vue';
import ExampleModalToggle2 from '../src/components/exampleModalToggle2.vue';
import Collapse from '../src/components/collapse.vue';
</script>
