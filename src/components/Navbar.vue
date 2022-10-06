<template>
    <nav>
      <ul>
        <li>
          <img src="@/assets/img/icon-1.jpg" />
          <router-link to="/">Vote!</router-link></li>
        <li>
          <img src="@/assets/img/icon-2.jpg" />
          <router-link to="/favorites">Favoritos</router-link>
        </li>        
      </ul>
    </nav>   
  </template>

<script lang="ts">
    import { defineComponent } from 'vue';   
    import { useStore } from 'vuex';   
    
    export default defineComponent({
      name: 'Navbar',
      components: {
        
      },     
    });
    </script>
  
  <style lang="scss" scoped>
  
  nav {
    padding: 30px;
    display: flex;
    flex-direction: column;

    li{
      display: flex;
      margin: 0 0 20px -20px;
      padding: 0;
      img{
        margin:0 5px 0 0;
      }
    }
    
    a {
      font-weight: bold;
      color: #2c3e50;
  
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  </style>
  