<template>
    <header>
      <h1 id="logo">
        <img src="@/assets/img/logo.jpg" alt="Gatinder">
      </h1>
      <div id="top">
        <h2>{{ pageTitle }}</h2>   
      </div>
    </header>
  </template>

<script lang="ts">
    import { defineComponent, computed } from 'vue';   
    import { useStore } from 'vuex';   
    
    export default defineComponent({
      name: 'Header',
      setup() {
        const store = useStore()
        const pageTitle = computed(() => store.state.pageTitle)
        
        return {
          pageTitle
        }
      },
      components: {
        
      },
    });
    </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/header.scss';
  </style>
  