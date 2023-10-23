const { createApp } = Vue;

createApp({
  data() {
    return {
      greetings: 'Hello Vue!',
      img: 'kotetsu-jeeg.jpg',
      path: '../img/',
    };
  },
}).mount('#app');

console.log(this.path, this.img);
