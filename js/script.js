const { createApp } = Vue

  createApp({
    data() {
      return {
        title : 'Vue Hello',
        image : 'img/image1.jpg' ,
      }
    },
}).mount('#app')