<template>
  <header class="top-cats">    
        <div class="title-cats">
          <h4>Curta fotos de gatos</h4>
          <p>Você também pode favoritar seus gatinhos preferidos!</p>
        </div>
        <div class="add-cat-filter">
          <button class="btn-add reset-button"><fa icon="plus"></fa> Adicionar</button>
          <button class="btn-filter reset-button"><fa icon="sliders"></fa> Filtrar</button>
        </div>       
    </header>
  <div class="home">
    <keep-alive>
      <Cats />
    </keep-alive>    
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

<style lang="scss"  scoped >
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
          background: #1847ED;
          color: #fff;
        }
        .btn-filter{
          background: #F0F2F6;
        }
      }
    } 

</style>
