import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    pageTitle: 'Teste',
    listCats: [],
    favoritesCats: []

  },
  getters: {
  },
  mutations: {
    setPageTitle(state,payload){
      state.pageTitle = payload
    },
    ADD_CATS(state,payload){
        state.listCats= []
        state.listCats= payload
    }
  },
  actions: {
    async addCat({commit,state}){
      if(!state.listCats.length){
        try{
            const req = await axios.get('https://api.thecatapi.com/v1/images/search?limit=100' ) 
            const cats = await req.data
            console.log(cats)
            commit('ADD_CATS',cats) 
        }catch(err){
            console.log(err)
        }
      }
      
    }
  },
  modules: {
  }
})
