const app = Vue.createApp({
  // template: '<h2>Hola , esto es una template</h2>'
  data() {
    return {
      showTitle: true,
      title: 'Hola desde Vue!',
      originalTitle: 'Hola desde Vue!',
      newTitle: 'Has cambiado el titulo',
      description: 'Ahora podemos escribir desde Vue',
      age: 24,
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Has cambiado el titulo'
    },
    undoTitle() {
      this.title = this.originalTitle
      console.log('funciona')
    },
    hideEverything() {
      this.showTitle = !this.showTitle
    },
    changeTitleConditional() {
      this.title = this.newTitle
    }
  }
}
);

app.mount('#app');