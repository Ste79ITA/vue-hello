const { createApp } = Vue;

createApp({
  data() {
    return {
      greetings: 'Hello Vue!',
      img: 'kotetsu-jeeg.jpg',
      path: '../img/',
      input: '',
      display: 'd-none',
    };
  },
  methods: {
    displayImg: function () {
      console.log('TEST');
      console.log(this.input);
      console.log(this.display);
      this.display = 'd-none'
        ? (this.display = 'd-block')
        : (this.display = 'd-none');
      console.log(this.display);
    },
  },
}).mount('#app');
