<template>    
    <section id="cats">  
      <keep-alive>    
        <Cat v-for="cat in cats" :key="cat.id" :cat="cat" />
      </keep-alive>
    </section>
  </template>

<script lang="ts">
    import { defineComponent, computed } from 'vue';   
    import { useStore } from 'vuex';   
    import Cat from '@/components/Cat.vue';   
    
    export default defineComponent({
      name: 'Cats',
      setup() {
        const store = useStore()

        const pageTitle = computed(() => store.state.pageTitle)
        const cats = computed(() => store.state.listCats)
                
        return {
          pageTitle,
          cats
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
  