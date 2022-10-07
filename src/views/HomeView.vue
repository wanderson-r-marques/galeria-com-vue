<template>
  
  <header class="top-cats">    
        <div class="title-cats">
          <h4>Curta fotos de gatos</h4>
          <p>Você também pode favoritar seus gatinhos preferidos!</p>
        </div>
        <div class="add-cat-filter">
          <button class="btn-add reset-button"><fa icon="plus"></fa> Adicionar</button>
          <button class="btn-filter reset-button" @click="showFilter = !showFilter"><fa icon="sliders"></fa> Filtrar</button>
          <!-- Início do box de filtro -->
          <Transition>
          <div v-if="showFilter" class="box-filter">
            <div class="top-filter">
              <h3>Filtre por</h3>
              <span @click="showFilter = !showFilter">
                <fa icon="close" class="fa"></fa> 
              </span>             
            </div>
            <form>
              <select class="breed">
                <option value="">Vira Lata</option>
                <option value="">Angorá</option>
                <option value="">Persa</option>
              </select>    
              <select class="category">
                <option value="">Adulto</option>
                <option value="">Filhote</option>
              </select>    
              <select class="type">
                <option value="">Macho</option>
                <option value="">Fêmea</option>
              </select> 
              <div id="bottom-form">
                <span>Limpar</span>
                <button>Salvar</button>
              </div>   
            </form>
          </div>
        </Transition>
        <!-- Fim do box de filtro -->
        </div>       
    </header>

  <div class="home">
    <keep-alive>
      <Cats />
    </keep-alive>    
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import Cats from '@/components/Cats.vue'; 

export default defineComponent({
  name: 'HomeView', 
  setup(){
    const showFilter = ref(false)
    return{
      showFilter
    }
  },  
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
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
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
        position: relative;     
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
        .box-filter{
          position: absolute;
          top: 50px;
          width: 200px;
          background: #FFFFFF;
          box-shadow: 3px 12px 20px #bbbbbb;
          z-index: 1;
          padding: 30px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }
        .top-filter{
          display: flex;
          justify-items: center;  
          h3{
            flex: 1;
            font-size: 22px;
            padding-top: 0;
            margin-top: 0;
          }     
          span{
            flex: 1;
            font-size: 20px;
            text-align: right;
            cursor: pointer;
          }   
        }
        form {
          display: flex;
          flex-direction: column;
          row-gap: 15px;
          select{            
            padding: 10px 15px;
            border-radius: 5px;
            background: #fff;
            border: 1px solid -#888888;
          }
          #bottom-form{
            display: flex;
            align-items: center;
            span{
              flex: 1;
              display: block;
              color: #a9001e;
              
            }
            button{
              background: #1847ED;
              color: #fff;
              font-weight: 700;
            }
          }
        }
        
      }
    } 
</style>