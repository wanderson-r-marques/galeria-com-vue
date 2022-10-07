import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  
  state: {
    pageTitle: '',
    listCats: [],
    favoritesCats: [], 

  },
  getters: {
  },
  mutations: {
    setPageTitle(state,payload){ // Altera o título da página
      state.pageTitle = payload
    },
    ADD_CATS(state,payload){
        state.listCats= []
        state.listCats = payload
    },
    ADD_FAVORITE_CAT(state,payload){ 
      state.favoritesCats.push(payload)
      // OBSERVAÇÃO
      // Tive umas incompatibilidades então precisei desativar uma função do Vuex

      // Comentado segue um rascunho do código que estava usando antes
      // type Cat = {
      //   id: string,
      //   url: string,
      //   width: number,
      //   height: number
      // }
      // let cat = state.listCats.find((x) => x['id'] == payload.id)
      
      // state.favoritesCats = [...state.favoritesCats, cat]
      
      // state.favoritesCats.push(payload)
      
    },
  },
  actions: {
    async addCat({commit,state}){ // Importando os gatos da API
      if(!state.listCats.length){
        try{
            const req = await axios.get('https://api.thecatapi.com/v1/images/search?limit=100' ) 
            const cats = await req.data            
            commit('ADD_CATS',cats) 
        }catch(err){
            console.log(err)
        }
      }      
    },
    ADD_FAVORITE_CAT: (context, payload) => { // Adiciona um gato nos favoritos
      context.commit("ADD_FAVORITE_CAT", payload)
    }
  },
  modules: {
  }
})
