<template>
  <div class="home">
    <Cats />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import Cats from '@/components/Cats.vue'; 


export default defineComponent({
  name: 'HomeView',   
  created(){
    const store = useStore()   
    store.commit('setPageTitle','Vote!')
    store.dispatch('addCat')
  },
  components: {
    Cats
  },
});
</script>
