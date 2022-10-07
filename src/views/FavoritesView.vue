<template>

  <header class="top-cats">    
    <div class="title-cats">
      <h4>Curta fotos de gatos</h4>
      <p>Você também pode favoritar seus gatinhos preferidos!</p>
    </div>            
  </header>

  <div class="home">    
    <Favorites />      
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import Favorites from '@/components/Favorites.vue'; 

export default defineComponent({
  name: 'FavoritesView',   
  created(){
    const store = useStore()   
    store.commit('setPageTitle','Favoritos')   
  },
  components: {
    Favorites
  },
});
</script>

<style lang="scss"  scoped >
  @import '@/assets/scss/variables.scss';
  .top-cats{
      display: flex;
      .title-cats{
        flex: 1;
        margin-bottom: 25px;
        h4{
          margin: 0;
        }
        p{
          margin-top: 4px;
          font-size: 12px;
          color: darkgray;
        }
      }
      .add-cat-filter{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 10px;
        padding-bottom: 30px;        
        button{                    
          padding: 10px 15px;
          border-radius: 6px;
        }
        .btn-add{
          background: $color-blue;
          color: #fff;
        }
        .btn-filter{
          background: $color-main;
        }
      }
    } 

</style>
