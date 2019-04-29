/* 
    Created on : 31/01/2019, 11:08:30 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
var vue = new Vue({
    el: '#app',
    data: {
        nombre: '',
        mensaje: '',
        checked: false
    }
});

var vue2 = new Vue({
  el: '#app-2',
  data: {
    checkedNames: []
  }
});

var vue3 = new Vue({
  el: '#app-3',
  data: {
    picked: ''
  }
});

var vue4 = new Vue({
  el: '#app-4',
  data: {
    selected: ''
  }
});

var vue5 = new Vue({
  el: '#app-5',
  data: {
    selected: []
  }
});

var vue6 = new Vue({
  el: '#app-6',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
});

var vue7 = new Vue({
  el: '#app-7',
  data: {
    picked: '',
    toggle: false,
    selected: ''
  }
});

var vue8 = new Vue({
  el: '#app-8',
  data: {
    toggle: false
  }
});

var vue9 = new Vue({
  el: '#app-9',
  data: {
    pick: '',
    a: 'variable secundaria'
  }
});

var vue10 = new Vue({
  el: '#app-10',
  data: {
    selected: {
        number: 0
    }
  }
});
