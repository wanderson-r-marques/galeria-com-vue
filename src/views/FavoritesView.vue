<template>
  <div class="about">
    <h1>Favoritos</h1>
  </div>
</template>


<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from 'vuex';
  
  
  export default defineComponent({
    name: 'Favorite',  
    created(){
      const store = useStore()   
      store.commit('setPageTitle','Favoritos')
    },
    components: {
      
    },
  });
  </script>
  