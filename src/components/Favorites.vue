<template>    
    <section id="cats">                 
        <Cat v-for="cat in favorites" :key="cat.id" :cat="cat" />
    </section>
  </template>

<script lang="ts">
    import { defineComponent, computed, ref, onMounted } from 'vue';   
    import { useStore } from 'vuex';   
    import Cat from '@/components/Cat.vue';   
    
    export default defineComponent({
      name: 'Cats',
      setup(){

        // Busca os gatos favoritos
        const store = useStore()       
        const favorites =  store.state.favoritesCats        

        return{
            favorites
        }
      },          
      components: {
        Cat
      },
    });
    </script>
  
  <style lang="scss" scoped>
    @import '@/assets/scss/header.scss';    
    #cats{
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      row-gap: 30px;
      column-gap: 20px;
    }
  </style>
  