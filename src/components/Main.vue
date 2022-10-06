<template>
    <main>                
        <router-view />
    </main>
  </template>

<script lang="ts">
    import { defineComponent } from 'vue';      
    export default defineComponent({
      name: 'Content',
      components: {
        
      },
    });
    </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/main.scss';
  </style>
  