const MyNameApp = { //Nome do elemento
  data(){ // abrir dados
    return { // informar que terá retorno
      name: 'Tiago' // elemento + conteúdo que será retornado.
    }
  }
}

Vue.createApp(MyNameApp).mount('#app')