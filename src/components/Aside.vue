<template>
    <aside>       
        <Navbar />
    </aside>
  </template>

<script lang="ts">
    import { defineComponent } from 'vue';   
    import Navbar from '@/components/Navbar.vue';   
    
    export default defineComponent({
      name: 'Content',
      components: {
        Navbar
      },
    });
    </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/aside.scss';
  </style>
  