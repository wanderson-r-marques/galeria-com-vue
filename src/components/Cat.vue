<template>
    <section>        
        <div class="box-cat">
          <button class="reset-button btn-favorite" @click="favorited(cat)" :class="{active:actived}">
            <fa icon="heart"></fa>
          </button>
          <img :src="cat.url" alt="">
          <div class="box-button">
            <button class="btn btn-loved reset-button"><fa icon="thumbs-up"></fa> Adorei</button>
            <button class="btn btn-hated reset-button">Odiei <fa icon="thumbs-down"></fa></button>
          </div>
        </div>        
    </section>
  </template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';       
    import { useStore } from 'vuex';  

    export default defineComponent({
      name: 'Cat',
      props: ['cat'],      
      setup() {       
        
        let actived = ref(false)        
        const store = useStore()

        // Cria um tipo de dado 
        type Cat = {
          id: string,
          url: string,
          width: number,
          height: number
        }

        const favorited = (cat:Cat) => { 
          actived.value = !actived.value         
          store.dispatch('ADD_FAVORITE_CAT',cat)
        }
        return {          
          actived,
          favorited
        }
      },      
    });
    </script>
  
  <style lang="scss" scoped>  
    .box-cat{
      position: relative;
      img{
        width: 164px;
        height: 164px;
        object-fit: cover;  
        display: flex;
        flex-direction: column;  
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        
      }
      .box-button{
        display: flex;
        .btn{         
          flex: 1;
          height: 100%; 
          padding: 10px 15px;
          font-size: 12px;
          cursor: pointer;
          font-weight: 700;
          &.btn-loved{
            background: #1a9f18;
            color: #fff;
            border-bottom-left-radius: 8px;
          }          
          &.btn-hated{
            background: #a9001e;
            color: #fff; 
            border-bottom-right-radius: 8px;
          }
        }
        .btn:hover{
          filter: brightness(0.85);
        }
      }
      .btn-favorite{
        background: #fff;
        width: 30px;
        height: 30px;
        position: absolute;
        top:10px;
        right:10px;
        border-radius: 5px;
        cursor: pointer;        
      }
      .active{
          color: #a9001e;
        }

    }
  </style>
  