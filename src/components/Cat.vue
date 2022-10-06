<template>
    <section>
        {{cat}}
    </section>
  </template>

<script lang="ts">
    import { defineComponent } from 'vue';       
    
    export default defineComponent({
      name: 'Cat',
      props: ['cat'],
      setup() {
        const cat2 = 'props'
        return {          
          cat2
        }
      },
      components: {
        
      },
    });
    </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/header.scss';
  </style>
  