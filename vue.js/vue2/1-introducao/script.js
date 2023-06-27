
const vm = new Vue({
  el: "#app",
  data: {
    name: 'Tiago Ribeiro',
    idade: 35,
    faculdade: {
      status: 'concluído',
      curso: 'ADS'
    }
  }
}
);
console.log (vm)