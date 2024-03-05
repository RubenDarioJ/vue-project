const app = Vue.createApp({
  // template: '<h2>Hola , esto es una template</h2>'
  data() {
    return {
      show: true,
      title: {
        value: 'Hola desde Vue!!',
        original: 'Hola desde Vue!',
        newTitle: 'Has cambiado el titulo'
      },
      description: 'Ahora podemos escribir desde Vue',
      age: 24,
      maxAge: 30,
      minAge: 1
    }
  },
  methods: {
    toggleShowContent() {
      this.show = !this.show;
    },
    toggleTitle() {
      if (this.title.value !== this.title.original) {
        this.title.value = this.title.original;
      } else {
        this.title.value = this.title.newTitle;
      }
    },
    incrementAge() {
      if (this.age >= this.maxAge) {
        return false;
      }

      this.age++;
    },
    decrementAge() {
      if (this.age <= this.minAge) {
        return false;
      }

      this.age--;
    }
  }
});

app.mount('#app');
