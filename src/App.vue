<template>   
    <Header />
    <Aside />
    <Main />    
</template>

<script lang="ts"> 
  import { defineComponent } from 'vue';
  import Aside from '@/components/Aside.vue'
  import Header from '@/components/Header.vue'
  import Main from '@/components/Main.vue'
  
  export default defineComponent({
    name: 'HomeView', 
    components: {
      Aside,
      Header,
      Main
    },
  });
  </script>

<style lang="scss">
  @import '@/assets/css/style.css'
</style>
